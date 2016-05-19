import * as Vue from 'vue';
import * as Vuex from 'vuex';
import store from './vuex/store';
import * as App from "./App.vue";
import ElementQueries = require('css-element-queries/src/ElementQueries');


/* --- Require Pages --- */
// import Page = require("./pages/...");

/* --- REGISTERING ALL THE STUFF --- */
// registering css element queries
ElementQueries.listen();

// registering the Vue.js components
Vue.use(Vuex);


new Vue({
  el: 'body',
  components: { App },
  store
})
