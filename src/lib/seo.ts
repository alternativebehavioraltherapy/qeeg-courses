import { site } from "@/data/site";

export function pageHead({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const fullTitle = title.includes(site.name) ? title : `${title} · ${site.name}`;
  const url = `${site.url}${path}`;
  const host = import.meta.env.VITE_PUBLIC_HOSTNAME;
  const ogImage = host
    ? `https://${host}/og.jpg`
    : "/og.jpg";

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "author", content: `${site.instructor.name}, ${site.instructor.credentials}` },
      {
        name: "keywords",
        content:
          "qEEG courses, qEEG training, neurofeedback phenotype interpretation, raw EEG courses, practical clinical skills neurofeedback, BeeLab training, Joshua Moore qEEG",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
