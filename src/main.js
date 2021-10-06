import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router'

Vue.use(BootstrapVue);
Vue.use(VueRouter)
Vue.config.productionTip = false


const routes = [
  { path: '/Home', component: ListPost},
  { path: '/About', component: AboutUs},
  { path: '/New', component: Admin}
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
