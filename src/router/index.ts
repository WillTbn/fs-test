import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import ContentPage from '../views/ContentPage.vue';


const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      redirect: '/home'
    },
    {
        path: "/",
        component:ContentPage,
        children:[
            {
                path:'',
                redirect: '/home'
            },
            {
                path:'login',
                component:() => import('../views/LoginPage.vue')
            },
            {
                path:'home', 
                component: () => import('../views/PermissionsPage.vue'),
            },
            {
                path:'locals',
                component:() =>  import('../views/LocalsPage.vue')
            }
        ]
    }
   
  // {
  //   path: '/tabs/',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/tabs/tab1'
  //     },
  //     {
  //       path: 'tab1',
  //       component: () => import('@/views/Tab1Page.vue')
  //     },
  //     {
  //       path: 'tab2',
  //       component: () => import('@/views/Tab2Page.vue')
  //     },
  //     {
  //       path: 'tab3',
  //       component: () => import('@/views/Tab3Page.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
