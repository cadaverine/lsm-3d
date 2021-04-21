export default {
  layout: {
    autosize: true,
    scene: {
      aspectratio: {
        x: 1,
        y: 1,
        z: 1
      },
      camera: {
        center: {
          x: 0,
          y: 0,
          z: 0
        },
        eye: {
          x: 1.25,
          y: 1.25,
          z: 1.25
        },
        up: {
          x: 0,
          y: 0,
          z: 1
        }
      },
      xaxis: {
        type: "linear",
        // zeroline: false,
        range: [-5, 15],
      },
      yaxis: {
        type: "linear",
        // zeroline: false,
        range: [-5, 15],
      },
      zaxis: {
        type: "linear",
        // zeroline: false,
        range: [-5, 15],
      }
    }
  },
  mesh: {
    opacity: 0.2,
    type: "mesh3d",
    x: [],
    y: [],
    z: []
  },
  scatterAppr: {
    x: [],
    y: [],
    z: [],
    mode: "markers",
    type: "scatter3d",
    marker: {
      color: "rgb(10, 50, 230)",
      size: 1
    },
    name: "approximation"
  },
  scatterOrig: {
    x: [],
    y: [],
    z: [],
    mode: "markers",
    type: "scatter3d",
    marker: {
      color: "rgb(23, 190, 207)",
      size: 4
    },
    name: "original points"
  },
  surface: {
    x: [],
    y: [],
    z: [],
    type: "surface",
    opacity: 0.2,
    showscale: false,
  }
};
