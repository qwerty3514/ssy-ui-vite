<div align="center">
<img src="./assets/logo.svg" alt="SSY-UI-VITE Logo">
</div>

<h1 align="center">SSY-UI-VITE</h1>
<p align="center">
  基于 Vite 栈的前端工程化实践
</p>
<p align="center">
![GitHub License](https://img.shields.io/github/license/qwerty3514/ssy-ui-vite)
</p>

## Features

- 基于 Vue 框架
- 支持 JSX 与 Vue 单文件组件
- Jest+Vue3plugins 实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 RoLLup 构建
- Vitepress+Vercel 文档网站搭建
- 基于 ActionCI 实现持续集成与交付

## Install

```bash
npm i ssy-ui-vite
```

## Quick Start

```bash
import Vue from 'vue'
import SSYUI from 'ssy-ui'
const App = {
template:
<SButton color="blue">主要按钮</SButton>
,
};

createApp(App)
-use(SSYUI)
-mount("#app");
```

## Quick Start

如果希望尽快上手，可以访问[Getting Started](https://ssy-ui-vite.vercel.app/)
