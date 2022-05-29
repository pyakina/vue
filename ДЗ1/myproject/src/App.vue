<template>
  <div id="app">
    <h1>Калькулятор</h1>
    <input type="number" v-model.number="op1">
    <input type="number" v-model.number="op2">
  = {{result}}
  <template v-if="remain">(Остаток = {{remain}})</template>
  <div class="keyboard">
<button v-for="(operand,index) in operands" 
v-bind:key="index" 
v-bind:title="operand"
@click="calculate(operand)">
{{ operand }}
</button>
  </div>
  <div v-if="error">Ошибка! {{ error }}</div>
  <div class="display">
fib(<input v-model.number="op1" />)
fib(<input v-model.number="op2" />)
= {{ fibResult }}
</div>
  <div class="strange-message">
<template v-if="result < 0">Получилось отрицательное число</template>
<template v-else-if="result < 100">Результат в первой сотне</template>
<template v-else>Получилось слишком большое число</template>
</div>
<div v-for="(item,index) in myCollection" v-bind:key="index">
{{ index }} - {{ item }}
</div>
<div class="logs">
  <div v-for="(log, id) in logs" v-bind:key="id">{{log}}</div>
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
          remain:0,
          fibResult:0,
          operands: ['+', '-', '*', '/', '^', '/()'],
          myCollection: [1,2,3,4,5,6,7],
          logs: {},
          error: ''
      }
  },
  methods: {
    calculate (operation = '+') {
      this.error = ''
      switch (operation) {
      case '+':
      this.add()
      break;
      case '-':
      this.subtract()
      break;
      case '*':
      this.multiply()
      break;
      case '/':
      this.divide()
      break;
      case '^':
      this.exponantiate()
      break;
      case '/()':
      this.divideInt()
      break;
      }
    const key = Date.now()
    const value = `${this.op1}${operation}${this.op2}=${this.result}`
    this.$set(this.logs, key, value)
    },

    add() {
      this.remain = 0;
      this.result = this.op1 + this.op2;
      this.fibResult = this.fibb1 + this.fibb2;
    },
    subtract() {
      this.remain = 0;
      this.result = this.op1 - this.op2;
      this.fibResult = this.fibb1 - this.fibb2;
    },
    multiply() {
      this.remain = 0;
      this.result = this.op1 * this.op2;
      this.fibResult = this.fibb1 * this.fibb2;
    },
    divide() {
      const { op1, op2 } = this
      if (op2 === 0) {
      this.error = 'Делить на 0 нельзя!'
      } else {
      this.remain = 0;
      this.result = op1 / op2;
      this.fibResult = this.fibb1 / this.fibb2;
      }
    },
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
    exponantiate() {
      this.remain = 0;
      this.result = this.op1 ** this.op2;
      this.fibResult = this.fibb1 ** this.fibb2;
    },
    divideInt() {
      const { op1, op2 } = this
      if (op2 === 0) {
      this.error = 'Делить на 0 нельзя!'
      } else {
      this.remain = op1 % op2;
      this.result = parseInt(op1 / op2);
      }
    },
  },
  computed: {
    fibb1 () {
      return this.fib(this.op1)
      },
    fibb2 () {
      return this.fib(this.op2)
      },
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
