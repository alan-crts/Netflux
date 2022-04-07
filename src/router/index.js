import { createRouter, createWebHashHistory } from 'vue-router'
import MoviesView from '../views/MoviesView.vue'
import SeriesView from '../views/SeriesView.vue'

const routes = [{
        path: '/movies',
        alias: '/',
        name: 'Films',
        component: MoviesView
    },
    {
        path: '/series',
        name: 'Séries',
        component: SeriesView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router