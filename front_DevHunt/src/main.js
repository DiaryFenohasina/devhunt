import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vueChatScroll from 'vue-chat-scroll'

// import { BootstrapVue,DropdownPlugin, IconsPlugin,VBScrollspyPlugin,CardPlugin,ModalPlugin,LayoutPlugin,TablePlugin  } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/plugins/themify-icons/themify-icons.css'
import '@/assets/css/style.css'
import '@asika32764/vue-animate/dist/vue-animate.css';


Vue.config.productionTip = false
Vue.use(vueChatScroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
