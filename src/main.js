import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'

import QueryString from "qs";

Vue.prototype.$axios = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    paramsSerializer: params => QueryString.stringify(params, {arrayFormat: "repeat"})
})

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
