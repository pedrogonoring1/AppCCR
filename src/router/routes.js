import MainLayout from "layouts/MainLayout";

import PageCaminhao from "pages/Caminhao";
import PageEntretenimento from "pages/Entretenimento";
import Error404 from "pages/Error404";
import Index from "pages/Index";
import PageMotorista from "pages/Motorista";
import PageOficinas from "pages/Oficinas";
import PageParadasProximas from "pages/ParadasProximas";
import PageSocialTruck from "pages/SocialTruck";
import PageSuaSaude from "pages/SuaSaude";
import PageViagem from "pages/Viagem";

const routes = [
    { path: '/caminhao', component: MainLayout,
        children: [
            { path: '', component: PageCaminhao }
        ]
    },
    { path: '/entretenimento', component: MainLayout,
        children: [
            { path: '', component: PageEntretenimento }
        ]
    },
    { path: '/', component: MainLayout,
        children: [
            { path: '', component: Index }
        ]
    },
    { path: '/motorista', component: MainLayout,
        children: [
            { path: '', component: PageMotorista }
        ]
    },
    { path: '/oficinas', component: MainLayout,
        children: [
            { path: '', component: PageOficinas }
        ]
    },
    { path: '/paradasproximas', component: MainLayout,
        children: [
            { path: '', component: PageParadasProximas }
        ]
    },
    { path: '/socialtruck', component: MainLayout,
        children: [
            { path: '', component: PageSocialTruck }
        ]
    },
    { path: '/suasaude', component: MainLayout,
        children: [
            { path: '', component: PageSuaSaude }
        ]
    },
    { path: '/viagem', component: MainLayout,
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
