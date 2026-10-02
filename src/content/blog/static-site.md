---
title: A personal website can stay simple
description: Keep content in Markdown, generate pages at build time, and make maintenance manageable.
date: 2026-09-28
tags: [Astro, Programming, Personal website]
category: Technical writing
sample: true
---

## Start with the actual needs

A personal sharing website is mostly a place to read. Writing can happen in an editor, Git can track changes, and public pages can be generated at build time.

The main work becomes organizing content and checking that its connections still make sense.

## Content is a collection of files

```text
Write Markdown → Commit with Git → Build static pages → Publish
```

Each entry can carry a title, date, and tags. Those details are enough to generate lists, tag pages, and a subscription feed.

## Spend complexity where it helps

For this website, reading is worth the effort:

1. Pages should feel comfortable on a phone.
2. Code and tables should fit without breaking the layout.
3. Topics and tags should make entries easy to find.
4. New writing should automatically appear on the home page, in RSS, and in the sitemap.

Related: [Describe your ideas with types](/notes/programming/typescript/)
