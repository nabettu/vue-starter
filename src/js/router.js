import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Top from './view/Top.vue';
import About from './view/About.vue';
import NotFound from './view/NotFound.vue';

const router = new VueRouter({
    routes: [{
        name: 'top',
        path: '/',
        component: Top
    }, {
      name: 'about',
      path: '/about',
      component: About
    }, {
      name: 'notFound',
      path: '*',
      component: NotFound
    }]
});

export default router;
