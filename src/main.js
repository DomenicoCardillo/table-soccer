import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import Toasted from 'vue-toasted';
import App from './App.vue';
import router from './router';
import firebaseVueInstall from './services/firebase';

import './assets/scss/main.scss';
// import store from './store';
// import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VeeValidate, { fieldsBagName: 'formFields' });
Vue.use(firebaseVueInstall);
Vue.use(Toasted, {
  theme: 'bubble',
  position: 'top-center',
  duration: 4000,
});

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app');
