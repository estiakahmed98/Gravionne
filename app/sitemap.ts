import type { MetadataRoute } from "next";
import { gravionneStaticPaths, siteMetadata } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return gravionneStaticPaths.map((path) => ({
    url: new URL(path, siteMetadata.baseUrl).toString(),
    lastModified,
  }));
}
