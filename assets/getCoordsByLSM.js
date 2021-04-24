import { getApproximatingFunction } from "./lsm";
import _ from "lodash";

// получаем координаты точек аппроксимации
export function getPointsCoords(xArray, yArray, polynome) {
  const xCoords = [];
  const yCoords = [];

  const xMax = Math.ceil(_.max(xArray.map(Number))) + 1
  const xMin = Math.floor(_.min(xArray.map(Number))) - 1

  const yMax = Math.ceil(_.max(yArray.map(Number))) + 1
  const yMin = Math.floor(_.min(yArray.map(Number))) - 1

  const xRange = xMax - xMin
  const yRange = yMax - yMin

  let k = 0;
  for (let i = 0; i < xRange; i++) {
    for (let j = 0; j < yRange; j++) {
      xCoords[k] = xMin + i;
      yCoords[k] = yMin + j;
      k++;
    }
  }

  const zCoords = [];

  for (let i = 0; i < xCoords.length; i++) {
    zCoords[i] = polynome(xCoords[i], yCoords[i]);
  }

  return {
    X: xCoords,
    Y: yCoords,
    Z: zCoords,
  };
}

// получаем координаты для построения аппроксимирующей поверхности
export function getSurfaceCoords(xArray, yArray, polynome) {
  const xMax = Math.ceil(_.max(xArray.map(Number))) + 1
  const xMin = Math.floor(_.min(xArray.map(Number))) - 1

  const yMax = Math.ceil(_.max(yArray.map(Number))) + 1
  const yMin = Math.floor(_.min(yArray.map(Number))) - 1

  const xRange = xMax - xMin
  const yRange = yMax - yMin

  const xCoords = [];
  const yCoords = [];
  const zCoords = [];


  for (let i = 0; i < xRange; i++) {
    xCoords[i] = xMin + i;
  }

  for (let j = 0; j < yRange; j++) {
    yCoords[j] = yMin + j;
  }

  for (let [i, y] of yCoords.entries()) {
    zCoords[i] = []

    for (let [j, x] of xCoords.entries()) {
      zCoords[i][j] = polynome(x, y)
    }
  }

  return {
    X: xCoords,
    Y: yCoords,
    Z: zCoords,
  };
}
