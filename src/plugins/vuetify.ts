import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMoment from 'vue-moment';

import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify);
Vue.use(VueMoment);

export default new Vuetify({
  theme: {
    dark: true
  },
  icons: {
    iconfont: 'fa'
  }
});
