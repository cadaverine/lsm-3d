import { getApproximatingFunction } from "./lsm";

// Получить координаты аппроксимирущей кривой (МНК)
export function getCoordsByLSM(xArray, yArray, zArray, roArray, N) {
  const polynome = getApproximatingFunction(xArray, yArray, zArray, roArray, N);

  let itemsNum = 10;

  let xCoords = [];
  let yCoords = [];

  for (let i = 0; i < itemsNum; i++) {
    for (let j = 0; j < itemsNum; j++) {
      xCoords[j + i * itemsNum] = i;
      yCoords[j + i * itemsNum] = j;
    }
  }

  const zCoords = [];

  for (let i = 0; i < xCoords.length; i++) {
    zCoords[i] = polynome(xCoords[i], yCoords[i]);
  }

  return {
    X: xCoords,
    Y: yCoords,
    Z: zCoords
  };
}
