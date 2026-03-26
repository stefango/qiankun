import { defineConfig } from '@umijs/max';

export default defineConfig({
  base: '/umi4/',
  // mfsu: false,
  mfsu: {
    strategy: 'normal',
    // esbuild: true,
  },
  qiankun: {
    slave: {},
  },
  routes: [
    {
      path: '/',
      component: 'index',
      wrappers: ['@/wrappers/auth'],
    },
    { path: '/docs', component: 'docs' },
  ],
  npmClient: 'pnpm',
  // todo shared 的组件不支持热更新
  monorepoRedirect: { peerDeps: true },
});
