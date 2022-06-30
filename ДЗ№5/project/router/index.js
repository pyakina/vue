import Vue from 'vue';
import VueRouter from 'vue-router';
import DashboardPage from '../src/components/PageDashboard.vue';
import AboutPage from '../src/components/PageAbout.vue';
import NotFound from '../src/components/Page404.vue';
import AddPaymentForm from '../src/components/AddPaymentForm.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage,
    },
    {
      path: '/about*',
      name: 'About',
      component: AboutPage,
    },

    {
      path: '/add/payment/:category',
      name: 'AddPaymentForm',
      component: AddPaymentForm,
  
    },
    {
      path: '/notfound',
      name: 'Notfound',
      component: NotFound,
    },
    {
      path: '*',
      redirect: {
        name: 'Notfound',
      },
    },
  ],
});


const titles = routeName => {
    return {
    'Dashboard': 'Take a look on your payments and add more!',
    'About': 'Anything about our awesome application!',
    'NotFound': 'Oops! Seems like we lost this page :('
    }[routeName]
    }
    

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
