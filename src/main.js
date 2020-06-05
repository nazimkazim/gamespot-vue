import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import router from './routes';
import store from './Store/store'
import vuelidate from 'vuelidate'
import wysiwyg from 'vue-wysiwyg'

import Button from './components/UI/Button.vue';
import { MdCard, MdButton, MdDialog, MdContent } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
Vue.component('app-button', Button);


Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdDialog);
Vue.use(MdContent);
Vue.use(wysiwyg)

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-gamespot-8b37d.firebaseio.com/';

Vue.use(vuelidate)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
