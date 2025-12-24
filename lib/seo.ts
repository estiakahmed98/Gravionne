import type { Metadata } from "next";

type MetadataType = "website" | "article";

type BuildMetadataOptions = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  type?: MetadataType;
  noIndex?: boolean;
  keywords?: string[];
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export const siteMetadata = {
  name: "Gravionne",
  baseUrl: "https://gravionne.com",
  description:
    "A luxury health, wellness & health-tech company building our global flagship. Welcoming visionary partners worldwide.",
  defaultOgImage: "/logos/Gravionne_icon.jpeg",
  locale: "en_US",
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteMetadata.baseUrl),
  title: {
    default: siteMetadata.name,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.name,
  generator: siteMetadata.name,
  authors: [{ name: siteMetadata.name }],
  creator: siteMetadata.name,
  publisher: siteMetadata.name,
  keywords: [
    "health",
    "wellness",
    "health-tech",
    "luxury wellness",
    "premium healthcare",
    "Gravionne",
  ],
  openGraph: {
    title: siteMetadata.name,
    description: siteMetadata.description,
    type: "website",
    locale: siteMetadata.locale,
    siteName: siteMetadata.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.name,
    description: siteMetadata.description,
  },
  verification: {
    google: "OxqXmwzefZnf3C_xxmk7O0JvzSO7_d5rZevejZgKsLU",
  },
  icons: {
    icon: "/logos/Gravionne_icon.jpeg",
    shortcut: "/logos/Gravionne_icon.jpeg",
    apple: "/logos/Gravionne_icon.jpeg",
  },
};

const absoluteUrl = (path: string) =>
  new URL(path, siteMetadata.baseUrl).toString();

export function buildMetadata(options: BuildMetadataOptions): Metadata {
  const {
    title,
    description = siteMetadata.description,
    path,
    image = siteMetadata.defaultOgImage,
    type = "website",
    noIndex,
    keywords,
  } = options;

  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(siteMetadata.baseUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteMetadata.name,
      locale: siteMetadata.locale,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    keywords,
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMetadata.name,
    url: siteMetadata.baseUrl,
    logo: absoluteUrl(siteMetadata.defaultOgImage),
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  image = siteMetadata.defaultOgImage,
  datePublished,
  dateModified,
  author,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(image),
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: absoluteUrl(path),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const gravionneStaticPaths = [
  "/",
  "/gravionne",
  "/gravionne/accessibility",
  "/gravionne/compliance",
  "/gravionne/contact",
  "/gravionne/curations",
  "/gravionne/curations/aurevia",
  "/gravionne/curations/mediora",
  "/gravionne/curations/sanovia",
  "/gravionne/impact",
  "/gravionne/journals",
  "/gravionne/journals/future-personalized-wellness",
  "/gravionne/leadership",
  "/gravionne/partnership",
  "/gravionne/philosophy",
  "/gravionne/privacy",
  "/gravionne/projects",
  "/gravionne/projects/gurunet",
  "/gravionne/terms",
];
