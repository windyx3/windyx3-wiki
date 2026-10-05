# windyx3 🌱

A personal corner of the internet: learning notes, programming knowledge, LeetCode, technical writing, reflections, projects, and favorites.

Built with Astro, TypeScript, and Markdown / MDX. Statically generated and ready for Cloudflare Pages.

## Local development

Requires Node.js 22.12 or newer. Node.js 24 is recommended.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

## Writing content

Add notes to `src/content/notes/`, posts to `src/content/blog/`, and projects to `src/content/projects/`. Both `.md` and `.mdx` are supported. File paths become page paths; use stable, descriptive filenames.

```yaml
---
title: My new note
description: A short description of the entry
date: 2026-10-01
updated: 2026-10-02
tags: [TypeScript, Learning]
category: Programming
draft: false
sample: false
---
```

`updated` is optional. Entries with `draft: true` are excluded from pages, lists, RSS, and tags. Future dates do not delay publishing; use the draft flag to control publication.

Projects can also include `status` (In progress, Complete, or Exploring), `repo`, and `demo`. Initial notes, posts, and favorites are clearly marked examples; replace them with your own writing. The sample content does not describe personal experiences.

Edit your identity and current activities in `src/site.config.ts`, favorites in `src/data/interests.ts`, and the introduction in `src/pages/about.astro`.

## Deploy to GitHub Pages

The current configuration uses `site: 'https://windyx3.github.io'` and
`base: '/windyx3-wiki'`. The published address is
`https://windyx3.github.io/windyx3-wiki/`.

1. In the repository, open Settings → Pages and select **GitHub Actions** as the source.
2. Commit and push to `main`. `.github/workflows/deploy.yml` builds and deploys the site.
3. Check that the deployment succeeds in the Actions tab.

Site-local links in Astro components should use `withBase()` from `src/lib/url.ts`.
For example, `withBase('/notes/')` produces `/windyx3-wiki/notes/`. Fragment links
such as `#main` and external URLs do not need a prefix. Within Markdown, use
relative links or include the configured base in site-root links.

## Alternative: Cloudflare Pages

Before switching back, remove the GitHub Pages `base` setting and change `site`
to the Cloudflare or custom domain. The `withBase()` helper also supports a site
hosted at `/`.

1. In the Cloudflare dashboard, open Workers & Pages, create a Pages project, and connect the GitHub repository `windyx3/windyx3-wiki`.
2. Use production branch `main`, build command `npm run build`, output directory `dist`, and the repository root as the root directory.
3. Set the environment variable `NODE_VERSION=24`.
4. Set `SITE_URL` to the actual HTTPS address, for example `https://windyx3.pages.dev`. If that project name is taken, use the domain Cloudflare assigns.
5. After connecting a custom domain, update `SITE_URL` and rebuild so canonical URLs, RSS, robots, and the sitemap use the correct address.

Preview deployments also use the production `SITE_URL` for canonical links. This website is fully static and needs no Cloudflare adapter.

[Cloudflare deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)

## Pages and structure

- `/`: home; `/about/`: introduction
- `/notes/`: topic directory and wiki; `/blog/`: chronological posts
- `/projects/`: projects; `/interests/`: interests and favorites
- `/tags/`: tags; `/rss.xml`: notes and posts feed
- `/sitemap-index.xml`: sitemap; `/robots.txt`: crawler configuration

Layouts live in `src/layouts/`, components in `src/components/`, and styles in `src/styles/global.css`. Use Markdown for ordinary writing and MDX when embedded components are helpful.

## Verification

`npm run check` validates Astro and TypeScript. `npm run build` generates the complete static website. GitHub Actions runs both checks on pushes to `main` and pull requests.

