import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import App from '@/App.vue'
import router from '@/router'
import pinia from '@/service'
import eventBus from '@/utils/instance.eventBus'

const app = createApp(App)
// app.use(router, pinia, Antd)
app.use(router)
app.use(pinia)
app.use(Antd)
app.provide('eventBus', eventBus)
app.mount('#app')
