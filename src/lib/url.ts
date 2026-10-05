/** Prefix a site-local path with Astro's configured deployment base. */
export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
