import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { entries, entryUrl } from '../lib/content';
import { site } from '../site.config';
export async function GET(context: APIContext) {
  const content = [...await entries('notes'), ...await entries('blog')].sort((a, b) => (b.data.updated || b.data.date).getTime() - (a.data.updated || a.data.date).getTime());
  return rss({ title: site.title, description: site.description, site: context.site!, items: content.map(entry => ({ title: entry.data.title, description: entry.data.description, pubDate: entry.data.updated || entry.data.date, link: entryUrl(entry), categories: entry.data.tags })), customData: '<language>zh-cn</language>' });
}
