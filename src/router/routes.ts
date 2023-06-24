export const routes = [
  {
    path: '/',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/auth/',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'register',
        component: () => import('@/pages/Auth/RegisterPage.vue'),
        name: 'Register'
      }
    ]
  }
];
