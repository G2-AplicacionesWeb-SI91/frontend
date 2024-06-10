import {createRouter, createWebHistory} from "vue-router";
import PromosComponent from "@/tracking/pages/promos.component.vue";
import HistoryComponent from "@/tracking/pages/history.component.vue";
import ConfigComponent from "@/tracking/pages/config.component.vue";
import PayTicketComponent from "@/tracking/pages/pay-ticket.component.vue";
import SearchRoutesComponent from "@/tracking/pages/search-routes.component.vue";
import SupportComponent from "@/tracking/pages/support.component.vue";
import LoginComponent from "@/tracking/pages/login.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/promos', component: PromosComponent, meta: {title: 'Promociones'}},
        {path: '/history', component: HistoryComponent, meta: {title: 'Historial de viajes'}},
        {path: '/config', component: ConfigComponent, meta: {title: 'Configuracion'}},
        {path: '/pay-ticket', component: PayTicketComponent, meta: {title: 'Pagar Pasaje'}},
        {path: '/search-routes', component: SearchRoutesComponent, meta: {title: 'Buscar Rutas'}},
        {path:'/support',component: SupportComponent,meta: {title: 'Support'}},
        {path: '/login', component: LoginComponent, meta: {title: 'Login'}},
        {path: '/', redirect: '/login'},

    ],
});

router.beforeEach((to,
                   from,
                   next) => {
    let baseTitle = 'TrackMyRoute1';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});


export default router;
