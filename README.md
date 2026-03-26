<p align="center">
  <a href="https://qiankun.umijs.org">
    <img src="https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png" alt="qiankun" width="180" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/qiankun"><img src="https://img.shields.io/npm/v/qiankun.svg?style=flat-square" alt="npm version" /></a>
  <a href="https://codecov.io/gh/umijs/qiankun"><img src="https://img.shields.io/codecov/c/github/umijs/qiankun.svg?style=flat-square" alt="coverage" /></a>
  <a href="https://www.npmjs.com/package/qiankun"><img src="https://img.shields.io/npm/dt/qiankun.svg?style=flat-square" alt="npm downloads" /></a>
  <a href="https://github.com/umijs/qiankun/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/umijs/qiankun/ci.yml?branch=master&style=flat-square" alt="build status" /></a>
  <a href="https://github.com/umijs/dumi"><img src="https://img.shields.io/badge/docs%20by-dumi-blue" alt="dumi" /></a>
</p>

# qiankun（乾坤）

> In Chinese, `qian(乾)` means heaven and `kun(坤)` earth. `qiankun` is the universe.

Qiankun enables you and your teams to build next-generation and enterprise-ready web applications leveraging [Micro Frontends](https://micro-frontends.org/). It is inspired by and based on [single-spa](https://github.com/CanopyTax/single-spa).

## 🤔 Motivation

A quick recap about the concept of `Micro Frontends`:

> Techniques, strategies and recipes for building a **modern web app** with **multiple teams** using **different JavaScript frameworks**. — [Micro Frontends](https://micro-frontends.org/)

Qiankun was birthed internally in our group during the time web app development by distributed teams had turned to complete chaos. We faced every problem micro frontend was conceived to solve, so naturally, it became part of our solution.

The path was never easy, we stepped on every challenge there could possibly be. Just to name a few:

- In what form do micro-apps publish static resources?
- How does the framework integrate individual micro-apps?
- How to ensure that sub-applications are isolated from one another (development independence and deployment independence) and runtime sandboxed?
- Performance issues? What about public dependencies?
- The list goes on long ...

After solving these common problems of micro frontends and lots of polishing and testing, we extracted the minimal viable framework of our solution, and named it `qiankun`, as it can contain and serve anything. Not long after, it became the cornerstone of hundreds of our web applications in production, and we decided to open-source it to save you the suffering.

**TLDR: Qiankun is probably the most complete micro-frontend solution you ever met🧐.**

## :sparkles: Features

Qiankun inherits many benefits from [single-spa](https://github.com/CanopyTax/single-spa):

- 📦 **Micro-apps Independent Deployment**
- 🛴 **Lazy Load**
- 📱 **Technology Agnostic**

And on top of these, it offers:

- 💃 **Elegant API**
- 💪 **HTML Entry Access Mode**
- 🛡 **Style Isolation**
- 🧳 **JS Sandbox**
- ⚡ **Prefetch Assets**
- 🔌 **[Umi Plugin](https://github.com/umijs/plugins/tree/master/packages/plugin-qiankun) Integration**

## 📦 Installation

```shell
$ yarn add qiankun  # or npm i qiankun
```

## Start
```shell
$ pnpm i
$ pnpm start:main // start master app
$ pnpm start:umi4 // start sub app (umi4)
```

Visit `http://localhost:7099`.
