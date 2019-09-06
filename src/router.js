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
import AdminPanel from '@/views/admin/AdminPanel'
import AllMessages from '@/views/admin/messages/AllMessages'
import ViewMessage from '@/views/admin/messages/ViewMessage'

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
      path: '/admin',
      name: 'admin',
      component: AdminPanel,
      meta: {
        requiresAuth: true
      },
      children: [
        // List all messages
        {
          path: 'messages',
          name: 'messages',
          component: AllMessages,
          
        },
        // Lists single message
        {
          path: 'message/:id',
          name: 'view-message',
          component: ViewMessage
        },
      ]
    },
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('admin-login');
  else if (!requiresAuth && currentUser) next('admin-panel');
  else next();
});

export default router;
