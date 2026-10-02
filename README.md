# windyx3 🌱

我的个人互联网空间：学习笔记、编程知识、LeetCode、技术文章、个人思考、项目与收藏。

使用 Astro + TypeScript + Markdown / MDX，构建为静态网站，主要部署到 Cloudflare Pages。

## 本地开发

需要 Node.js 22.12 或更新版本（推荐 Node.js 24）。

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

## 写内容

笔记放在 `src/content/notes/`，随笔放在 `src/content/blog/`，项目放在 `src/content/projects/`。支持 `.md` 和 `.mdx`，文件路径就是页面路径。建议使用稳定的英文文件名。

```yaml
---
title: 我的新笔记
description: 一句话描述这篇笔记
date: 2026-10-01
updated: 2026-10-02
tags: [TypeScript, 学习]
category: 编程知识
draft: false
sample: false
---
```

`updated` 可省略。`draft: true` 的内容不生成页面，也不会出现在列表、RSS 和标签中。完成日期之前的内容也会发布，请用 `draft` 控制发布。

项目还可以设置 `status`（进行中 / 已完成 / 构想中）、`repo` 和 `demo`。初始笔记、随笔与收藏是排版示例，不代表个人经历，发布前请替换或删除。学习和构建状态位于 `src/site.config.ts`，收藏位于 `src/data/interests.ts`，个人介绍位于 `src/pages/about.astro`。

## Cloudflare Pages 部署

1. 在 Cloudflare 控制台打开 Workers & Pages，创建 Pages 项目并连接 GitHub 仓库 `windyx3/windyx3`。
2. 生产分支设为 `main`，构建命令 `npm run build`，输出目录 `dist`，根目录保持仓库根目录。
3. 环境变量设置 `NODE_VERSION=24`。
4. 设置 `SITE_URL` 为实际的 HTTPS 站点地址，例如 `https://windyx3.pages.dev`。如果这个 Pages 名称已被占用，请使用实际分配的域名。
5. 自定义域名配置完成后，把 `SITE_URL` 改成新域名并重新部署，确保 canonical、RSS、robots 和 Sitemap 指向正确地址。

预览部署也使用生产 `SITE_URL` 作为 canonical。网站全部静态生成，无需 Cloudflare 适配器。

部署文档：https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

## 页面与结构

- `/` 首页；`/about/` 个人介绍
- `/notes/` 主题目录与 Wiki；`/blog/` 时间线随笔
- `/projects/` 项目；`/interests/` 兴趣与收藏
- `/tags/` 标签；`/rss.xml` 笔记与文章订阅
- `/sitemap-index.xml` 站点地图；`/robots.txt` 爬虫配置

布局位于 `src/layouts/`，组件位于 `src/components/`，样式位于 `src/styles/global.css`。内容优先使用 Markdown，只在需要嵌入组件时使用 MDX。
