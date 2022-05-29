<template>
<div class="wrapper">
<header>
<div class="title">My personal costs</div>
</header>
<main>
<AddPaymentForm @addNewPayment="addNewPayment" />
<PaymentsDisplay :items="paymentsList" />
</main>
</div>

</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'


export default {
  name: 'App',
  components: {
      PaymentsDisplay,
      AddPaymentForm
    },
  data () {
    return {
      paymentsList: [],
      }
    },
  methods: {
    fetchData () {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          amount: 169,
          },
        {
          date: '24.03.2020',
          category: 'Transport',
          amount: 360,
          },
        {
          date: '24.03.2020',
          category: 'Food',
          amount: 532,
          },
      ]
    },
  addNewPayment (data) {
  this.paymentsList = [...this.paymentsList, data]
  }

  },
  created () {
  this.paymentsList = this.fetchData()
  },
}
</script>

<style>
*{
  margin: 0 auto;
  padding:0;
}

.wrapper{
  width: 100%;
  max-width: 1140px;
  }
#app {
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
 font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 300px;
}
.title {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 48px;
  line-height: 58px;
  font-weight: 400;

}
</style>
