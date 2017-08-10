import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const App = Vue.extend(require("./App.vue"));

// Stores

// Components

// Pages

const Welcomes = {
  index: require("./pages/welcomes/index.vue")
};

// Routing

const routes = [
  {
    path: "/",
    component: Welcomes["index"]
  }
];

const router = new VueRouter({
  routes: routes
});

const app = new Vue({
  el: "#app",
  render: h => h(App),
  router
});
