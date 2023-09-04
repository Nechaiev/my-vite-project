import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import components from "@/components/UI"
import router from '@/router/router'
import directives from '@/directives'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';


const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

directives.forEach(directive => {
  app.directive(directive.name, directive)
})


app
  .use(router)
  .use(Toast)
  .mount('#app');
