<template>
  <div>
    <AddPaymentForm @add-payment="addNewPayment" :categoryList="categoryList"/>
    <PaymentsDisplay :items="paymentsList"/>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
import PaymentsDisplay from '../components/PaymentsDisplay.vue';
import AddPaymentForm from '../components/AddPaymentForm.vue';

export default {
  name: 'DashboardPage',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  methods: {
    ...mapMutations([
      'SET_PAYMENTS_LIST',

    ]),
    ...mapActions([
      'fetchData',
      'addNewPayment',
      'loadCategories',
    ]),
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'getCategoryList',
    ]),
  },
  created() {
    this.fetchData();
   
  },
  updated(){

  }
};
</script>

<style scoped>

</style>
