import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Gravionne Curations";
const pageDescription =
  "Explore Gravionne’s curated collections blending luxury, science, and human flourishing across Sanovia, Aurevia, and Mediora.";
const pagePath = "/gravionne/curations";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function CurationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="curations-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Curations", path: pagePath },
        ])}
        id="curations-breadcrumb-jsonld"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Our Curations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
              Three distinct collections, each meticulously crafted to embody
              our commitment to excellence in health, wellness, and human
              flourishing. Discover the intersection of luxury and science.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Sanovia */}
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src="/elegant-sanovia-wellness-products-with-gold-accent.png"
                      alt="Sanovia Collection"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="font-heading text-2xl font-semibold mb-4">
                      Sanovia
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Our flagship collection embodying the essence of luxury
                      wellness, where traditional wisdom meets modern
                      innovation. Each product is a testament to our commitment
                      to excellence and human flourishing.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Premium Health Essentials
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Scientifically Validated
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Luxury Experience
                        </span>
                      </div>
                    </div>
                    <Link href="/gravionne/curations/sanovia">
                      <Button className="w-full bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/90">
                        Discover Sanovia
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Aurevia */}
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src="/premium-aurevia-wellness-collection-with-natural-e.png"
                      alt="Aurevia Collection"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="font-heading text-2xl font-semibold mb-4">
                      Aurevia
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      A curated selection of premium wellness essentials that
                      celebrate the harmony between nature and scientific
                      precision. Crafted for those who appreciate authentic
                      luxury.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Natural Ingredients
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Scientific Precision
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Sustainable Luxury
                        </span>
                      </div>
                    </div>
                    <Link href="/gravionne/curations/aurevia">
                      <Button className="w-full bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/90">
                        View Aurevia
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Mediora */}
              <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src="/sophisticated-mediora-health-tech-products-with-cl.png"
                      alt="Mediora Collection"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="font-heading text-2xl font-semibold mb-4">
                      Mediora
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Advanced health-tech solutions designed for the discerning
                      individual who values both efficacy and elegance. Where
                      cutting-edge technology meets sophisticated design.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Advanced Health Technology
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Precision Monitoring
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Elegant Design
                        </span>
                      </div>
                    </div>
                    <Link href="/gravionne/curations/mediora">
                      <Button className="w-full bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/90">
                        Explore Mediora
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Curated with Purpose
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty mb-12 leading-relaxed">
              Each collection represents a different facet of our commitment to
              elevating human wellness. From traditional luxury to cutting-edge
              technology, we curate experiences that honor both heritage and
              innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Excellence
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every product meets our rigorous standards for quality and
                  efficacy
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Innovation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pioneering solutions that push the boundaries of wellness
                  technology
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full"></div>
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">
                  Luxury
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sophisticated experiences that honor the art of premium
                  wellness
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
