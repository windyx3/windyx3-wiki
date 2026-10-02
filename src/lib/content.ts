import { getCollection, type CollectionEntry } from 'astro:content';

export type Section = 'notes' | 'blog' | 'projects';
export type Entry = CollectionEntry<Section>;
export const sectionNames = { notes: '笔记', blog: '随笔', projects: '项目' };
export const dateLabel = (date: Date) => date.toISOString().slice(0, 10);
export const entryUrl = (entry: Entry) => `/${entry.collection}/${entry.id}/`;
export const tagUrl = (tag: string) => `/tags/${encodeURIComponent(tag)}/`;
export async function entries(section: Section): Promise<Entry[]> {
  return (await getCollection(section, ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
export async function allEntries() {
  return (await Promise.all([entries('notes'), entries('blog'), entries('projects')])).flat();
}
