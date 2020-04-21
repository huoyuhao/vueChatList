import Vue from 'vue'
import App from './App.vue'
import '@/js/common.js'

import { ImagePreview, Dialog } from 'vant'
import 'vant/lib/index.css'
Vue.use(ImagePreview)
Vue.use(Dialog)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
