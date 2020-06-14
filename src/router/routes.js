import Index from "pages/Entreterimento";
import PageViagem from "pages/Viagem";
import PageSocialTruck from "pages/SocialTruck";
import PageParadasProximas from "pages/ParadasProximas";
import Error404 from "pages/Error404";

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
            { path: '', component: PageViagem }
        ]
    },

    {
      path: '/socialtruck',
      component: () => import('layouts/MainLayout.vue'),
      children: [
          { path: '', component: PageSocialTruck }
      ]
  },

  {
    path: '/paradasproximas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
        { path: '', component: PageParadasProximas }
    ]
}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({ path: '*', component: Error404 })
}

export default routes
