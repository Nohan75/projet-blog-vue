import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router';
import AboutUs from './components/AboutUs.vue';
import Admin from './components/Admin.vue';
import ListPost from './components/ListPost.vue';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false


const routes = [
  { path: '/', name: "Home", component: ListPost},
  { path: '/About', name: 'About', component: AboutUs},
  { path: '/New', name: 'New', component: Admin}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
