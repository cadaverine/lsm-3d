<template>
  <section class="container">
    <Header class="header"
      >Algorithm and software implementation of the root-mean-square
      approximation<br />in the two-dimensional version by first-and
      second-degree polynomials</Header
    >
    <a-row class="control-panel">
      <a-button type="primary" @click="generateRandomValues">
        Generate table
      </a-button>
      <div class="input_box">
        <div class="input_text">
          Degree of a polynomial:
        </div>
        <a-select
          class="input"
          v-model="polynome.degree"
          @change="updatePolynome"
        >
          <a-select-option value="1">1</a-select-option>
          <a-select-option value="2">2</a-select-option>
        </a-select>
      </div>
    </a-row>
    <a-row class="control-panel">
      <div class="input_box">
        <div class="var_text">
          Set X:
        </div>
      </div>
      <a-col :span="3">
        <a-input-number
          v-model="X"
          :min="-5"
          :max="15"
          :step="0.1"
          style="marginLeft: 16px"
        />
      </a-col>
      <div class="input_box">
        <div class="var_text">
          Set Y:
        </div>
      </div>
      <a-col :span="3">
        <a-input-number
          v-model="Y"
          :min="-5"
          :max="15"
          :step="0.1"
          style="marginLeft: 16px"
        />
      </a-col>
      <div class="input_box">
        <div class="input_text">
          Number of points:
        </div>
      </div>
      <a-col :span="5">
        <a-slider v-model="pointsNumder" :min="2" :max="20" />
      </a-col>
      <a-col :span="3">
        <a-input-number
          v-model="pointsNumder"
          :min="2"
          :max="20"
          style="marginLeft: 16px"
        />
      </a-col>
    </a-row>
    <div class="polynome" v-text="polynome.text"></div>
    <div class="wrapper">
      <Chart :points="points" :polynome="polynome" :X="X" :Y="Y" />
      <Table
        @valueschange="saveValues"
        ref="table"
        :rowsNumber="pointsNumder"
      />
    </div>
  </section>
</template>

<script>
import Chart from "../components/Chart.vue";
import Table from "../components/Table.vue";
import random from "lodash/random";

import { getApproximatingFunction } from "@/assets/lsm";

const max = 9.9;

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
    pointsNumder: 10,
    X: Number(random(0.0, max).toFixed(2)),
    Y: Number(random(0.0, max).toFixed(2)),
    polynome: {
      degree: 1,
      text: ""
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

      const { text } = getApproximatingFunction(
        X,
        Y,
        Z,
        Ro,
        Number(this.polynome.degree)
      );

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
  align-items: flex-start;
  justify-content: space-between;
  /* border: 1px solid black; */
  margin-bottom: 10px;
}

.control-panel {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
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
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
}

.var_text {
  width: 40px;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  /* margin-right: 10px; */
}

.input {
  width: 80px;
  font-size: 14px;
  text-align: center;
  text-align-last: center;
}
</style>
