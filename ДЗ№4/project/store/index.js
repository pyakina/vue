import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        paymentsList: [],
        categoryList: [],
    },
    mutations: {
        SET_PAYMENTS_LIST(state, payload) {
            state.paymentsList = payload
        },
        ADD_PAYMENTS_DATA(state, payload) {
            state.paymentsList.push(payload)
            },
        SET_CATEGORY_LIST(state, payload) {
            if (!Array.isArray(payload)) {
            payload = [payload]
            }
            state.categoryList.push(...payload)
            },
                
            
    },
    getters: {
        paymentsList: (state) => state.paymentsList,
        getFullPaymentValue: (state) => {
            return state.paymentsList.reduce((res, cur) => res + cur.amount, 0)
    },
        getCategoryList: state => state.categoryList,
},
    actions: {
        fetchData({ commit }) {
            setTimeout( () => {
                const initialPaymentsList = [
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
                      { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "amount": 969 },
                      { "id": 5, "date": "24.03.2020", "category": "Education", "amount": 1500 },
                      { "id": 6, "date": "25.03.2020", "category": "Food", "amount": 200 }
                  ];
                  commit('SET_PAYMENTS_LIST', initialPaymentsList);
            }, 1000)
        },
        addNewPayment({ commit }, payload) {
            commit('ADD_PAYMENTS_DATA', payload);
            },
        loadCategories({ commit }) {
           setTimeout(() => {
              const initialCategoryList = ['Food', 'Transport', 'Education', 'Entertainment']; 
              commit('SET_CATEGORY_LIST', initialCategoryList)
           }, 1000)
        },
            
    },

})