import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'

import QueryString from "qs";

Vue.prototype.$axios = axios.create({
    baseURL: "http://localhost:8000",
    paramsSerializer: params => QueryString.stringify(params, {arrayFormat: "repeat"})
})

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
