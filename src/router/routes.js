import Index from "pages/Index";
import Viagem from "pages/Viagem";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: Index }
    ]
  },

  {
    path: '/viagem',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: Viagem }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
