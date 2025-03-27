export const paths = {
  auth: {
    login: {
      path: 'login',
      getHref: () => '/login',
    },
  },
  app: {
    root: {
      path: '',
      getHref: () => '/',
    },
  },
  errors: {
  },
} as const;
