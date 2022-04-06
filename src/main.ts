import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import pinia from '@/service'
import eventBus from '@/utils/instance.eventBus'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.provide('eventBus', eventBus)
app.mount('#application')
