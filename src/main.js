import 'reset.css';
import './scss/style.scss';
import "babel-polyfill";
import Vue from 'vue';

import store from './js/store';
import router from './js/router';
import Root from './js/Root.vue';

new Vue({
    el: document.getElementById('app'),
    store,
    router,
    render: (h) => h(Root)
});
