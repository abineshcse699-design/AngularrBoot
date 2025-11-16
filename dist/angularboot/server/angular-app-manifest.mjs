
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5029, hash: 'd33ef82842e7e7555c5f8421757d138fbd5bce41a8e716e0fe77c94c1e165446', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: '9be6dddc201a48b4615fe2caca760e5d5ee765161843e60bc20e7521862fc9bc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11250, hash: 'c212fc05f6fad336db5b213e0b2ff3cd6b98b55bf07bd2d4778da99eccba4405', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VRDYZCWE.css': {size: 230966, hash: 'yJEOwb9t5lw', text: () => import('./assets-chunks/styles-VRDYZCWE_css.mjs').then(m => m.default)}
  },
};
