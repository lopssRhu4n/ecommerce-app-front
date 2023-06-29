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
      {
        path: '/category/:id',
        component: () => import('@/pages/CategoryPage.vue'),
        name: 'Category',
        props: true,
      },
      {
        path: '/product/:id',
        component: () => import('@/pages/ProductPage.vue'),
        name: 'Product',
        props: true,
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
      {
        path: 'login',
        component: () => import('@/pages/Auth/LoginPage.vue'),
        name: 'Login',
      },
    ],
  },
];
