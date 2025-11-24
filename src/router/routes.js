const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('src/pages/companyProfile/HomePage.vue')
      },
      {
        path: 'about-us',
        name: 'AboutUs',
        component: () => import('src/pages/companyProfile/AboutusPage.vue')
      },
      {
        path: 'why-choose-us',
        name: 'WhyChooseUs',
        component: () => import('src/pages/companyProfile/WhyChooseusPage.vue')
      },
      {
        path: 'services',
        name: 'OurServices',
        component: () => import('src/pages/companyProfile/OurServicesPage.vue')
      },
      {
        path: 'gallery',
        name: 'Gallery',
        component: () => import('src/pages/companyProfile/GalleryPage.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
