import { Breadcrumb } from "../ui/Breadcrumbs/Breadcrumbs";

export function parseUrlForBreadcrumbs(url: string): Breadcrumb[] {
  const parts = url.slice(1).split("/");
  return parts
    .map((part, index) => {
      const text = part
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
      if (index === 0) {
        const href = "/" + part;
        return { text, href };
      }
      return { text };
    })
    .slice(-2);
}
