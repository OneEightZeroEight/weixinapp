import Vue from 'vue'
import './styles/weui.css'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
