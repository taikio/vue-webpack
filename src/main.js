import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes-config'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/styles/main.scss'

Vue.use(ElementUi)
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: routes
});

const app = new Vue({
  router
}).$mount('#app');
