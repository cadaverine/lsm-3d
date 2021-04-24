// прямой ход
function straightStroke(matrix) {
  // rowsNum - количество строк,
  // количество столбцов rowsNum + 1
  const rowsNum = matrix.length;

  // по строкам
  for (let i = 0; i < rowsNum; i++) {
    let diagElem = matrix[i][i];
    // по столбцам
    for (let j = i; j < rowsNum + 1; j++) {
      matrix[i][j] = matrix[i][j] / diagElem;
    }
    // по строкам
    for (let k = i + 1; k < rowsNum; k++) {
      let underDiagElem = matrix[k][i];
      // по столбцам
      for (let l = i; l < rowsNum + 1; l++) {
        matrix[k][l] -= matrix[i][l] * underDiagElem;
      }
    }
  }

  return matrix;
}

// обратный ход
function backStroke(matrix) {
  // rowsNum - количество строк,
  // количество столбцов rowsNum + 1
  const rowsNum = matrix.length;
  const coefs = [];

  for (let i = rowsNum - 1; i >= 0; i--) {
    let sum = 0;

    for (let j = i + 1; j < rowsNum; j++) {
      sum += matrix[i][j] * coefs[j];
    }

    coefs[i] = matrix[i][rowsNum] - sum;
  }

  return coefs;
}

// Метод прогонки
function gaussSweepMethod(matrix) {
  const diagMatrix = straightStroke(matrix);
  const result = backStroke(diagMatrix);

  return result;
}

export function getApproximatingFunction(xArray, yArray, zArray, pArray, N) {
  let funcs = [
    (x, y) => 1,
    (x, y) => x,
    (x, y) => y,
    (x, y) => x * y,
    (x, y) => x ** 2,
    (x, y) => y ** 2
  ];

  const matrix = assemblySumsMatrix(xArray, yArray, zArray, pArray, N);
  const coefs = gaussSweepMethod(matrix);

  let text;
  let fixedLen = 4;

  if (N === 1) {
    let c1 = coefs[0].toFixed(fixedLen);
    let c2 = coefs[1].toFixed(fixedLen);
    let c3 = coefs[2].toFixed(fixedLen);

    text = `P(x,y) = ${c1} + ${c2}x + ${c3}y`;
  } else if (N === 2) {
    let c1 = coefs[0].toFixed(fixedLen);
    let c2 = coefs[1].toFixed(fixedLen);
    let c3 = coefs[2].toFixed(fixedLen);
    let c4 = coefs[3].toFixed(fixedLen);
    let c5 = coefs[4].toFixed(fixedLen);
    let c6 = coefs[5].toFixed(fixedLen);

    text = `P(x,y) = ${c1} + ${c2}x + ${c3}y + ${c4}xy + ${c5}x^2 + ${c6}y^2`;
  }

  let polynome = (x, y) => {
    let z = 0;

    for (let i = 0; i < N * 3; i++) {
      z += coefs[i] * funcs[i](x, y);
    }

    return z;
  };

  return {
    polynome,
    text
  };
}

// N - степень полинома
// roArray - весовые коэффициенты
function assemblySumsMatrix(xArray, yArray, zArray, pArray, N) {
  let funcs = [
    (x, y) => 1, // x^0 * y^0
    (x, y) => x, // x^1 * y^0
    (x, y) => y, // x^0 * x^1
    (x, y) => x * y, // x^1 * y^1
    (x, y) => x ** 2, // x^2 * y^0
    (x, y) => y ** 2 // x^0 * y^2
  ];

  // количество слагаемых в полиноме
  const n = N * 3;
  // количество точек
  const pointsNum = xArray.length;
  const matrix = [];

  // строки
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    // столбцы
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
      // сборка сумм - элементов матрицы
      for (let k = 0; k < pointsNum; k++) {
        let fi = funcs[i];
        let fj = funcs[j];

        matrix[i][j] +=
          pArray[k] * fi(xArray[k], yArray[k]) * fj(xArray[k], yArray[k]);
      }
    }

    // сборка последнего столбца
    matrix[i][n] = 0;
    for (let k = 0; k < pointsNum; k++) {
      let fi = funcs[i];

      matrix[i][n] += pArray[k] * zArray[k] * fi(xArray[k], yArray[k]);
    }
  }

  return matrix;
}
