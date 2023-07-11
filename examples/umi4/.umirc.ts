import { defineConfig } from "@umijs/max";

export default defineConfig({
  base: '/umi4/',
  // mfsu: false,
  qiankun: {
    slave: {},
  },
  routes: [
    {
      path: "/", component: "index", wrappers: ['@/wrappers/auth']
    },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
