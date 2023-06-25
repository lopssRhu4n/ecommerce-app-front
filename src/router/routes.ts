export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/pages/HomePage.vue'),
        name: 'Homepage',
      },
    ],
  },
  {
    path: '/auth/',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'register',
        component: () => import('@/pages/Auth/RegisterPage.vue'),
        name: 'Register',
      },
    ],
  },
];
