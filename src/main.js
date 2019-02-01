import Vue from 'vue'
import App from './App.vue'

import Codemirror from 'vue-codemirror';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Codemirror);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
