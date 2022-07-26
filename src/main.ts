import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import App from '@/App.vue'
import router from '@/router'
import pinia from '@/service'
import eventBus from '@/utils/instance.eventBus'

import Toast, { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options: PluginOptions = {
  transition: 'Vue-Toastification__fade',
  maxToasts: 20,
  newestOnTop: true,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: false,
  draggablePercent: 2,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: false,
  rtl: false,
  shareAppContext: true
}

const app = createApp(App)
// app.use(router, pinia, Antd)
app.use(router)
app.use(pinia)
app.use(Antd)
app.use(Toast, options)
app.provide('eventBus', eventBus)
app.mount('#application')
