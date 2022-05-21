<template>
  <div id="app">
    <h1>Калькулятор</h1>
    <input type="number" v-model="op1">
    <input type="number" v-model="op2">
  = {{result}}
  <template v-if="remain">(Остаток = {{remain}})</template>
  <div class="keyboard">
<button v-on:click="remain = 0, result = +op1 + +op2">+</button>
<button v-on:click="remain = 0, result = op1 - op2">-</button>
<button v-on:click="result = op1 * op2">*</button>
<button v-on:click="remain = 0, result = op1 / op2">/</button>
<button v-on:click="remain = 0, result = op1 ** op2">^</button>
<button v-on:click="result = parseInt(op1  / op2), remain = op1 % op2">Деление с остатком</button>
  </div>
  </div>
</template>

<script>

export default {
    name: "CalcComp",
    data() {
        return {
            op1: 0,
            op2: 0,
            result:0,
            remain:0
        };
    },
    methods: {


    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
