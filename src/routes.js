// ====================================
// Router
// ====================================
export default [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/components/SampleComponent.vue')
    },
    {
        path: '/responsiveComponent',
        component: () => import('@/components/HelloWorld.vue')
    },
]