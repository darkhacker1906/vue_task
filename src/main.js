import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from './router'
import { persist,store } from './store/store'

app.use(router)
app.use(store)
app.use(persist)
app.mount('#app')

