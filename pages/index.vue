<template>
  <section class="container">
    <Header class="header"
      >Algorithm and software implementation of the root-mean-square approximation<br>in the two-dimensional version by first-and second-degree polynomials</Header
    >
    <div class="buttons">
      <button class="button button_generate" @click="generateRandomValues">
        Generate values
      </button>
      <div class="input_box">
        <div class="input_text">
          Degree of a polynomial:
        </div>
        <select class="input" v-model="polynome.degree" @change="updatePolynome">
          <option>1</option>
          <option>2</option>
        </select>
      </div>
    </div>
    <div class="polynome" v-text="polynome.text"></div>
    <div class="wrapper">
      <Chart :points="points" :polynome="polynome" />
      <Table @valueschange="saveValues" ref="table" />
    </div>
  </section>
</template>

<script>
import Chart from "../components/Chart.vue";
import Table from "../components/Table.vue";
import { getApproximatingFunction } from "@/assets/lsm";

export default {
  components: {
    Chart,
    Table
  },
  data: () => ({
    points: {
      X: [1, 2, 3, 1, 2, 3, 1, 2, 3],
      Y: [1, 1, 1, 2, 2, 2, 3, 3, 3],
      Z: [3.1, 3.15, 3.5, 4.9, 4.65, 4.4, 9.85, 9.4, 11.1],
      Ro: [1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    polynome: {
      degree: 1,
      text: '',
    }
  }),
  methods: {
    saveValues(values) {
      const { X, Y, Z, Ro } = values;

      this.points = {
        X: X,
        Y: Y,
        Z: Z,
        Ro: Ro
      };

      this.updatePolynome();
    },
    updatePolynome() {
      const { X, Y, Z, Ro } = this.points;

      const { text } = getApproximatingFunction(X, Y, Z, Ro, Number(this.polynome.degree));

      this.polynome.text = text;
    },
    generateRandomValues() {
      this.$refs.table.generateRandomValues();
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 100;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}

.header {
  height: 85px;
  margin-top: 15px;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.polynome {
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  color: slateblue;
}

.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.buttons {
  display: flex;
  height: 40px;
  margin-bottom: 20px;
}
.button {
  font-size: 16px;
}
.input_box {
  display: flex;
  margin-left: 30px;
}
.input_text {
  width: 180px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.input {
  width: 80px;
  font-size: 14px;
  text-align: center;
  text-align-last: center;
}
</style>
