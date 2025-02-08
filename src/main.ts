import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Icon } from '@iconify/vue'
import Swal from 'sweetalert2'

const app = createApp(App)
app.use(router)
app.component('Icon', Icon)
app.config.globalProperties.$swal = Swal
app.mount('#app')
