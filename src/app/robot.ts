import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  const baseUrl = "https://honda-bam.com";
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
