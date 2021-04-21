<template>
  <div class="plot-wrapper">
    <div id="plot-id" ref="plot"></div>
  </div>
</template>

<script>
import Plotly from "plotly.js-gl3d-dist";
import config from "./plotlyConfig.js";
import { getCoordsByLSM, getSurfaceCoords } from "@/assets/getCoordsByLSM.js";

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
    }
  },
  mounted() {
    this.drawPlot(this.points, this.polynome.degree);
  },
  methods: {
    drawPlot(points, degree) {
      let { layout, mesh, scatterOrig, scatterAppr, surface } = config;

      let { X, Y, Z, Ro } = this.points;

      let coords = getCoordsByLSM(X, Y, Z, Ro, degree);
      let sCoords = getSurfaceCoords(X, Y, Z, Ro, degree);

      // approximaxion
      mesh.x = coords.X;
      mesh.y = coords.Y;
      mesh.z = coords.Z;
      scatterAppr.x = coords.X;
      scatterAppr.y = coords.Y;
      scatterAppr.z = coords.Z;

      // original points
      scatterOrig.x = X;
      scatterOrig.y = Y;
      scatterOrig.z = Z;

      surface.x = sCoords.X;
      surface.y = sCoords.Y;
      surface.z = sCoords.Z;

      if (this.plotCreated === false) {
        Plotly.newPlot(
          this.$refs.plot,
          [scatterOrig, scatterAppr, surface],
          layout
        );
        this.plotCreated = true;
      } else {
        Plotly.update(
          this.$refs.plot,
          [scatterOrig, scatterAppr, surface],
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
  border-right: 0px;
}

#plot-id {
  height: 438px;
}
</style>
