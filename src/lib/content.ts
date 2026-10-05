import { getCollection, type CollectionEntry } from "astro:content";
import { withBase } from "./url";

export type Section = "notes" | "blog" | "projects";
export type Entry = CollectionEntry<Section>;
export const sectionNames = {
  notes: "Notes",
  blog: "Blog",
  projects: "Projects",
};
export const dateLabel = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
export const entryUrl = (entry: Entry) => withBase(`/${entry.collection}/${entry.id}/`);
export const tagUrl = (tag: string) => withBase(`/tags/${encodeURIComponent(tag)}/`);
export async function entries(section: Section): Promise<Entry[]> {
  return (await getCollection(section, ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}
export async function allEntries() {
  return (
    await Promise.all([entries("notes"), entries("blog"), entries("projects")])
  ).flat();
}
