import { defineConfig } from "@umijs/max";

export default defineConfig({
  base: '/umi4/',
  qiankun: {
    slave: {},
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
});
