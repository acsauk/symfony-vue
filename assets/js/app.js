import Vue from 'vue';

import Charges from './components/Charges'
import store from './store/index'
require('../css/global.scss')

new Vue({
    el: '#app',
    store,
    components: {Charges}
});