import Vue from 'vue'
import Router from 'vue-router'

import PageWrapper from "@/components/PageWrapper";
import EventPageWrapper from "@/components/EventPageWrapper";

Vue.use(Router);


let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: PageWrapper
        },
        {
            path: '/test',
            name: 'test',
            component: EventPageWrapper,
            props: true,

        }
    ]
})

export default router