import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import app_store from './App';

export default new Vuex.Store({
    modules: {
        app: app_store
    }
})