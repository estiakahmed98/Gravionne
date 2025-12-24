import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbJsonLd,
  buildMetadata,
  webPageJsonLd,
} from "@/lib/seo";

const pageTitle = "Gravionne";
const pageDescription =
  "Discover Gravionne, a luxury health, wellness, and health-tech collective building a flagship experience for visionary partners worldwide.";
const pagePath = "/gravionne";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function Page() {
  return (
    <div>
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="gravionne-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: pagePath },
        ])}
        id="gravionne-breadcrumb-jsonld"
      />
      Gravionne Page
    </div>
  );
}
