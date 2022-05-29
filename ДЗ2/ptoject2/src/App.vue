<template>
<div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Калькулятор</h1>
  <input type="number" id="op1" v-model.number="op1" >
  <input type="number" id="op2" v-model.number="op2" >
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
  <div class="keyboard-layout"> 
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Отобразить экранную клавиатуру</label>
    <div v-show="checked">
      <button v-for="fig in myCollection" 
      v-bind:key="fig"
      @click="push(fig)">
      {{fig}}
      </button>
      <button @click="reset">reset</button>
      <br>
      <input type="radio" id="one" name="radio" value="op1" v-model="currentOperand">
      <label for="one">Операнд 1</label>
      <input type="radio" id="two" name="radio" value="op2" v-model="currentOperand">
      <label for="two">Операнд 2</label>
    </div>
  
  </div>

</div>
</template>

<script>

export default {
  name: 'App',
    data() {
      return {
          op1: 0,
          op2: 0,
          operand1: 0,
          operand2: 0,
          result:0,
          remain:0,
          fibResult:0,
          operands: ['+', '-', '*', '/', '^', '/()'],
          myCollection: [0,1,2,3,4,5,6,7,8,9],
          checked:false,
          currentOperand: 'op1',
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
    push(fig) {
      this[this.currentOperand] = fig;
    },
    reset() {
      this[this.currentOperand] = 0;
    }
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
