import Script from "next/script";

type JsonLdProps = {
  data: object;
  id?: string;
};

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
