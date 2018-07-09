import Vue from 'vue';

import Example from './components/Example'
import Hello from './components/Hello'
require('../css/global.scss')

new Vue({
    el: '#app',
    components: {Hello}
});