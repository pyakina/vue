<template>

<div  :class="$style.wrapper">
<button :class="$style.button" @click="show=!show" >Add new cost +</button>
<div :class="$style.form" v-show="show">
<select v-model="category" placeholder="">
<option :value="null" disabled>Select payment description</option>
<option  v-for="option in getCategoryList" v-bind:key="option" :value="option">
{{ option }}
</option>
</select>
<input placeholder="Payment amount" v-model="amount" />
<input placeholder="Payment date" v-model="date" />
<button :class="$style.button" @click="onSaveClick">Save!</button>
</div>
</div>
</template>


<script>
import { mapActions,  mapGetters } from 'vuex'
export default {
name: 'AddPaymentForm',

data () {
    return {
        date: '',
        category: '',
        amount: '',
        show: false,
        selected: 0
        }
    },
computed: {
    ...mapGetters([
    'getCategoryList'
]),
    getCurrentDate () {
        const today = new Date();
        const d = today.getDate()
        const m = today.getMonth() + 1
        const y = today.getFullYear()
        return `${d}.${m}.${y}`
        }
    },
methods: {
    onSaveClick () {
        const data = {
            date: this.date || this.getCurrentDate,
            category: this.category,
            amount: +this.amount,
            }
        this.$emit('add-payment', data);
        },
    ...mapActions([
        'loadCategories',
    ]),

    },
    mounted () {
        if (!this.getCategoryList.length) {
            this.loadCategories()
            }
        }

}
</script>


<style module>
*{
    margin: 0 auto;
    padding:0;
}
.wrapper{
    width: 100%;
}
.button {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 26px;
    line-height: 32px;
    font-weight: 400;
    color: #fff;
    text-transform: uppercase;
    background-color:green;
    border: solid 3px transparent;
    border-radius: 5px;
}
.button:hover {
    opacity: 0.7;
}
.button:active {
    opacity: 1;
}
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
input {
    display:block;
    padding: 10px;
    margin: 10px 0;
}
select {
    display:block;
    width: 190px;
    padding: 10px;
    margin: 10px 0;
}
</style>