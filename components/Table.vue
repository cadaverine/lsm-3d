<template>
  <div class="table">
    <div class="table__row row_header">
      <div
        class="table__cell cell_heading"
        v-for="(heading, i) in columns"
        :key="i"
        v-text="heading"
      />
    </div>
    <div class="table__row" v-for="index in getRange(rowsNumber)" :key="index">
      <input
        class="table__cell cell_input"
        v-for="(heading, i) in columns"
        :key="i"
        v-model="values[heading][index]"
      />
    </div>
  </div>
</template>

<script>
import range from "lodash/range";
import random from "lodash/random";
export default {
  props: {
    columns: {
      type: Array,
      default: () => ["X", "Y", "Z", "Ro"]
    },
    rowsNumber: {
      type: Number,
      default: 15
    }
  },
  data: () => ({
    values: {
      X: [],
      Y: [],
      Z: [],
      Ro: []
    }
  }),
  mounted() {
    this.generateRandomValues();
  },
  updated() {
    if (this.isValuesValid(this.values)) {
      this.$emit("valueschange", this.values);
    }
  },
  methods: {
    getRange(value) {
      return range(value);
    },
    isValuesValid(values) {
      if (
        values.X.some(x => isNaN(parseFloat(x))) ||
        values.Y.some(y => isNaN(parseFloat(y))) ||
        values.Z.some(z => isNaN(parseFloat(z))) ||
        values.Ro.some(ro => isNaN(parseFloat(ro)))
      ) {
        return false;
      }
      return true;
    },
    generateRandomValues(max = 9.9) {
      const indexes = range(this.rowsNumber);
      this.values.Ro = indexes.map(() => 1);
      this.values.X = indexes.map(() => random(0.0, max).toFixed(2));
      this.values.Y = indexes.map(() => random(0.0, max).toFixed(2));
      this.values.Z = indexes.map(() => random(0.0, max).toFixed(2));
    }
  }
};
</script>

<style>
.table {
  display: flex;
  flex-direction: column;
  width: 320px;
}
.table__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.table__cell {
  min-width: 80px;
  min-height: 40px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.row_header {
  background-color: #33c4ff;
  font-weight: bold;
}
.cell_heading {
  border: 1px solid #555;
}
</style>
