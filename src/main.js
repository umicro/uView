/*
 * @Desc: ---   ----
 * @Date: 2020-04-22 12:29:21
 * @LastEditors: 王
 * @LastEditTime: 2020-04-22 15:18:39
 */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 此处为演示Vue.prototype使用，非uView的功能部分
Vue.prototype.vuePrototype = '枣红'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

// 此处为演示vuex使用，非uView的功能部分
import store from '@/store'

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')
Vue.mixin(vuexStore)

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare)

const app = new Vue({
  store,
  ...App
})

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)

app.$mount()

