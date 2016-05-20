// import Vue & vuex
import * as Vue from 'vue';
import * as Vuex from 'vuex';

// import vuex store
import store from './vuex/store';

// import root app component
import * as App from "./App.vue";

// import ElementQueries
import ElementQueries = require('css-element-queries/src/ElementQueries');

// registering css element queries
ElementQueries.listen();

// bind the new Vue-object to our body and inject the vuex-store
new Vue({
  el: 'body',
  components: { App },
  store
})
