import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ProblemSets from '@/views/ProblemSets.vue';
import WhiteboardSession from '@/views/WhiteboardSession.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ProblemSet',
    component: ProblemSets,
  },
  {
    path: '/problem/:id',
    name: 'Problem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProblemDetail.vue'),
  },
  {
    path: '/session',
    name: 'Session',
    component: WhiteboardSession,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
