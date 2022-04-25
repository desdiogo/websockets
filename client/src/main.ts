import { createApp } from 'vue'
import App from './App.vue'
import Socketio from './utils/socket'

const app = createApp(App)
app.use(Socketio, {
  connection: 'http://localhost:4000'
})

app.mount('#app')
