<template>
<div class="wrapper">
<header>
<nav >
<router-link to="/dashboard">Dashboard</router-link>
<router-link to="/about">About</router-link><br />
<router-link to="/add/payment/Food?value=200">Добавить платеж категории Food с ценой 200</router-link><br />
<router-link to="/add/payment/Transport?value=50">Добавить платеж категории Transport с ценой 50)</router-link><br />
<router-link to="/add/payment/Entertainment?value=2000">Добавить платеж категории Entertainment с ценой 2000)</router-link><br />
</nav>

<div class="title">My personal costs</div>
</header>

<main>
<PageDashboard v-if="page === 'dasboard'" />
<router-view />
</main>
</div>

</template>

<script>


import PageDashboard from './components/PageDashboard.vue';
export default {
  name: 'App',
  data () {
    return {
    page: ''
    }
  },

  components: {
      PageDashboard,

    },

  methods: {

  
    setPage () {
      this.page = location.pathname.slice(1)
      },
     
  },
  mounted () {
    
    this.setPage()
    this.$on('router-go', this.setPage)
    window.addEventListener('popstate', this.setPage)


    const links = document.querySelectorAll('a')
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
        history.pushState({}, '', link.href)
        this.$root.$emit('router-go')
      })
      })

  },

  created () {
  // this.paymentsList = this.fetchData()

  this.$router.push({ name: 'Dashboard' })

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
  color: #2c3e50;

}
.title {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 48px;
  line-height: 58px;
  font-weight: 400;

}
a {
  margin: 10px;
}
</style>
