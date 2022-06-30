<template>
<div>
<div :class="$style.wrapper" >
 <div :class="$style.total">
Total amount: {{ getFPV }}
</div>
<ul :class="$style.list" >
    <li :class="$style.head">
        <div :class="$style.cell">#</div>
        <div :class="$style.cell">Date</div>
        <div :class="$style.cell">Category</div>
        <div :class="$style.cell">Amount</div>
    </li>
    <li :class="$style.itemList" v-for="(item,index) in items" v-bind:key="index">
    <div :class="$style.cell">{{index+1}}</div>
    <div :class="$style.cell">{{item.date}}</div>
    <div :class="$style.cell">{{item.category}}</div>
    <div :class="$style.cell">{{item.amount}}</div>
    </li>
</ul> 

</div>
</div>
</template>


<script>


export default {
    name: 'PaymentsDisplay',
    props: {
    items: {
        type: Array,
        default: () => ([]),

        }
    },
    computed: {
    getFPV () {
        return this.$store.getters.getFullPaymentValue
    },
    //    paymentsList() {
    //   return this.$store.getters.paymentsList;
    // },
},
update: {
    getFPV () {
        return this.$store.getters.getFullPaymentValue
    },
}
}
</script>



<style module>
*{
    margin: 0 auto;
    padding:0;
}
.wrapper {
    width:100%;
    max-width: 1140px;
    background: transparent;
    
}
.head {
    display: flex;
    border-bottom: solid 1px #ccc;
    padding: 10px;
}
.itemList {
    list-style: none;
    display: flex;
    border-bottom: solid 1px #ccc;
    padding: 10px;
}
.cell {
max-width: 70px;
width:100%;
} 
.total {
    margin: 20px;
}


</style>