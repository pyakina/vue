<template>

<div  :class="$style.wrapper">
<button :class="$style.button" @click="show=!show" >Add new cost +</button>
<div :class="$style.form" v-show="show">
<input placeholder="Payment description" v-model="category"/>
<input placeholder="Payment amount" v-model="amount" />
<input placeholder="Payment date" v-model="date" />
<button :class="$style.button" @click="onSaveClick">Save!</button>
</div>
</div>
</template>


<script>
export default {
name: 'AddPaymentForm',
data () {
    return {
        date: '',
        category: '',
        amount: '',
        show: false
        }
    },
computed: {
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
        this.$emit('addNewPayment', data)
        },
      
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
</style>