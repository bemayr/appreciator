import * as Vue from 'vue';
import * as Vuex from 'vuex';

import { APPRECIATE_APP, ADD_APP } from "./mutation-types.ts";

// use Vuex
Vue.use(Vuex);

const state = {
    apps: [
        {
            name: "atom editor",
            iconURL: "https://raw.githubusercontent.com/zeke/atom-icon/master/old-icon/2.png",
            appreciations: 5
        },
        {
            name: "powerpoint",
            iconURL: "http://f.tqn.com/y/office/1/S/-/4/-/-/Powerpoint-2013.png",
            appreciations: 3
        },
        {
            name: "visual studio",
            iconURL: "http://icons.iconarchive.com/icons/dakirby309/simply-styled/128/Microsoft-Visual-Studio-icon.png",
            appreciations: 8
        }
    ],
}

const mutations = {
    [APPRECIATE_APP] (state, app) {
        app.appreciations++;
    },
    [ADD_APP] (state, app) {
        state.apps.push(app);
    }
}

export default new Vuex.Store({
    state,
    mutations
})
