import { createApp } from 'vue'
import App from './App.vue'
import store from '/src/store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(store)
app.use(VueAxios, axios)
app.mount('#app')

