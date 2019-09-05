import firebase from 'firebase'
import Vue from 'vue'
import Router from 'vue-router'

// Auth Views
import Login from '@/views/auth/Login'

// Frontend Views
import Home from '@/views/front/Home'
import About from '@/views/front/About'
import Contact from '@/views/front/Contact'

// Admin Views
import Dashboard from '@/views/admin/Dashboard'

Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [
    // Default route
    {
      path: '*',
      redirect: '/'
    },
    // Front routes
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/admin-login',
      name: 'login',
      component: Login
    },
    // Auth routes
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('admin-login');
  else if (!requiresAuth && currentUser) next('dashboard');
  else next();
});

export default router;