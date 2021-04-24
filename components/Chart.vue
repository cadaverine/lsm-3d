<template>
  <div class="plot-wrapper">
    <div id="plot-id" ref="plot"></div>
  </div>
</template>

<script>
import Plotly from "plotly.js-gl3d-dist";
import config from "./plotlyConfig.js";
import { getPointsCoords, getSurfaceCoords } from "@/assets/getCoordsByLSM.js";
import { getApproximatingFunction } from "@/assets/lsm";

export default {
  props: {
    points: {
      type: Object,
      default: () => ({
        X: [1, 2, 3, 1, 2, 3, 1, 2, 3],
        Y: [1, 1, 1, 2, 2, 2, 3, 3, 3],
        Z: [3.1, 3.15, 3.5, 4.9, 4.65, 4.4, 9.85, 9.4, 11.1],
        Ro: [1, 1, 1, 1, 1, 1, 1, 1, 1]
      })
    },
    X: {
      type: Number,
      default: 0
    },
    Y: {
      type: Number,
      default: 0
    },
    polynome: {
      type: Object,
      default: () => ({
        degree: 1
      })
    }
  },
  data: () => ({
    plotCreated: false
  }),
  watch: {
    points() {
      this.drawPlot(this.points, this.polynome.degree);
    },
    ["polynome.degree"]() {
      this.drawPlot(this.points, this.polynome.degree);
    },
    X() {
      if (!isNaN(parseFloat(this.X))) {
        this.drawPlot(this.points, this.polynome.degree);
      }
    },
    Y() {
      if (!isNaN(parseFloat(this.X))) {
        this.drawPlot(this.points, this.polynome.degree);
      }
    }
  },
  mounted() {
    this.drawPlot(this.points, this.polynome.degree);
  },
  methods: {
    drawPlot(points, degree) {
      let {
        layout,
        mesh,
        scatterOrig,
        scatterAppr,
        scatterMain,
        surface
      } = config;

      let { X, Y, Z, Ro } = this.points;

      const { polynome } = getApproximatingFunction(
        X,
        Y,
        Z,
        Ro,
        Number(degree)
      );

      let pCoords = getPointsCoords(X, Y, polynome);
      let sCoords = getSurfaceCoords(X, Y, polynome);

      // approximaxion
      mesh.x = pCoords.X;
      mesh.y = pCoords.Y;
      mesh.z = pCoords.Z;
      scatterAppr.x = pCoords.X;
      scatterAppr.y = pCoords.Y;
      scatterAppr.z = pCoords.Z;

      // original points
      scatterOrig.x = X;
      scatterOrig.y = Y;
      scatterOrig.z = Z;

      // specified point
      scatterMain.x = [this.X];
      scatterMain.y = [this.Y];
      scatterMain.z = [polynome(this.X, this.Y)];

      surface.x = sCoords.X;
      surface.y = sCoords.Y;
      surface.z = sCoords.Z;

      if (this.plotCreated === false) {
        Plotly.newPlot(
          this.$refs.plot,
          [scatterOrig, scatterAppr, scatterMain, surface],
          layout
        );
        this.plotCreated = true;
      } else {
        Plotly.update(
          this.$refs.plot,
          [scatterOrig, scatterAppr, scatterMain, surface],
          layout
        );
      }
    }
  }
};
</script>

<style scoped>
.plot-wrapper {
  border: 1px solid black;
  border-radius: 2px;
}

#plot-id {
  height: 438px;
}
</style>
