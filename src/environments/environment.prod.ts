export const environment = {
  production: true,
  backend: {
    protocol: 'https',
    host: 'test.wertkt.com',
    port: undefined,
    endpoints: {
      allEnterprises: '/api/biz',
      allResults: '/api/result/',
      oneEnterprise: '/api/biz/:id/',
      oneResult: '/api/result/:id/',
    },
  },
};
