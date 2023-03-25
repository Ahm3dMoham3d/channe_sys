import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthView from '../views/AuthView.vue'
import SheetsView from '../views/SheetsView.vue'
import PacksView from '../views/PacksView.vue'
import LettersView from '../views/LettersView.vue'
import MenusView from '../views/MenusView.vue'
import ConstsView from '../views/ConstsView.vue'

import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'تسجيل الدخول',
    component: AuthView
  },
  {
    path: '/sheets',
    name: 'امر شغل أفرخ',
    component: SheetsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/packs',
    name: 'امر شغل بواكي',
    component: PacksView,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/letters',
    name: 'امر شغل اظرف',
    component: LettersView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/menus',
    name: 'امر شغل منيوهات واعلانات',
    component: MenusView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/consts',
    name: 'الضبط',
    component: ConstsView,
    meta: {
      requiresAuth: true
    }
  },
 
  

]

const router = new VueRouter({
  routes
})
const getCurrentUser = () => {
  return new Promise((resolve , reject) => {
    const removeListener = onAuthStateChanged(getAuth() , (user)=> {
      removeListener();
      resolve(user)
    },
    reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  document.title = `${" شانيل" + " " + "-" + " " + to.name}`;
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      alert('يجب ان تسجل دخولك لعرض الصفحة')
      next("/");
    }
  }
  next();

});

export default router
