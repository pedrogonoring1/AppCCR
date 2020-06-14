import Index from "pages/Index";
import PageViagem from "pages/Viagem";
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
    }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({ path: '*', component: Error404 })
}

export default routes
