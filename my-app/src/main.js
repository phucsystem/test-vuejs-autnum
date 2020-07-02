import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  render: h => h(App),
}).$mount('#app');
