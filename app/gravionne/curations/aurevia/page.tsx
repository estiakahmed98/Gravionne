import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Aurevia — Beauty, Glow & Lifestyle Wellness";
const pageDescription =
  "Explore Aurevia, Gravionne’s curation of premium beauty and lifestyle wellness essentials that unite nature with scientific precision.";
const pagePath = "/gravionne/curations/aurevia";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function AureviaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="aurevia-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Curations", path: "/gravionne/curations" },
          { name: "Aurevia", path: pagePath },
        ])}
        id="aurevia-breadcrumb-jsonld"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <Link
                    href="/gravionne/curations"
                    className="text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    ← Back to Curations
                  </Link>
                </div>
                <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
                  Aurevia — Beauty, Glow & Lifestyle Wellness
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                  A curated selection of premium wellness essentials that
                  celebrate the harmony between nature and scientific precision.
                  Crafted for those who appreciate authentic luxury.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#products">
                    <Button
                      size="lg"
                      className="bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/100"
                    >
                      Discover Products
                    </Button>
                  </Link>
                  <Link href="/gravionne/partnership">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-accent text-accent hover:bg-[#50000B] hover:text-[#C2A36A] bg-transparent"
                    >
                      Partner Inquiry
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/premium-aurevia-wellness-collection-with-natural-e.png"
                    alt="Aurevia Collection Hero"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Philosophy */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Nature Meets Science
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Aurevia embodies our commitment to sustainable luxury, combining
                the wisdom of nature with the precision of modern science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Natural Ingredients",
                  desc: "Sourced from pristine environments worldwide, our ingredients are selected for their purity, potency, and sustainable harvesting practices.",
                },
                {
                  title: "Scientific Precision",
                  desc: "Advanced extraction and formulation techniques ensure maximum bioavailability and therapeutic efficacy in every product.",
                },
                {
                  title: "Sustainable Luxury",
                  desc: "Committed to environmental stewardship, every aspect of Aurevia reflects our dedication to sustainable and ethical luxury practices.",
                },
              ].map((f) => {
                const iconSrc =
                  f.title === "Natural Ingredients"
                    ? "/natural-ingredients.png"
                    : f.title === "Scientific Precision"
                    ? "/research.png"
                    : "/all-inclusive.png";

                return (
                  <Card
                    key={f.title}
                    className="group hover:shadow-lg transition-all duration-300 border-accent/20"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <img
                          src={iconSrc}
                          alt={`${f.title} icon`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <h3 className="font-heading text-xl font-semibold mb-4">
                        {f.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Wellness Essentials
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Discover our carefully curated selection of wellness essentials,
                each crafted to support your journey toward optimal health and
                radiance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Collagen */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/natural-wellness-oils-in-elegant-glass-bottles.png"
                      alt="Aurevia Collagen"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-semibold">
                      Collagen
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Generic Name: Hydrolyzed Collagen Peptides with Vitamin C
                      & Hyaluronic Acid
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-heading font-semibold mb-2">
                          Curated Excellence
                        </h4>
                        <p className="text-muted-foreground">
                          Handpicked from world-class collagen innovators,
                          merging clinical science with luxury beauty.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-2">
                          Why Choose from Gravionne Aurevia
                        </h4>
                        <p className="text-muted-foreground">
                          Beauty-from-within solution trusted for skin, hair,
                          nails, and joint health.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        Key Benefits
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Improves skin elasticity and hydration</li>
                        <li>Strengthens hair and nails</li>
                        <li>Supports joint mobility and bone health</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        How It Works
                      </h4>
                      <p className="text-muted-foreground">
                        Hydrolyzed collagen peptides are absorbed efficiently,
                        stimulating natural collagen production. Vitamin C
                        boosts synthesis, while hyaluronic acid locks in
                        hydration.
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground/80 italic">
                      Disclaimer: This is a dietary supplement and not intended
                      to diagnose, treat, cure, or prevent any disease or health
                      condition.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <Button className="bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/100">
                        Learn More
                      </Button>
                      <Button
                        variant="outline"
                        className="border-accent text-accent hover:bg-[#50000B] hover:text-[#C2A36A] bg-transparent"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Glutathione */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/premium-herbal-supplements-in-sustainable-packagin.png"
                      alt="Aurevia Glutathione"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-semibold">
                      Glutathione
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Generic Name: L-Glutathione Reduced + Vitamin C Complex
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-heading font-semibold mb-2">
                          Curated Excellence
                        </h4>
                        <p className="text-muted-foreground">
                          Curated from leading global antioxidant specialists,
                          ensuring safety and clinical validation.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-2">
                          Why Choose from Gravionne Aurevia
                        </h4>
                        <p className="text-muted-foreground">
                          Premium detoxification and glow enhancer backed by
                          science.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        Key Benefits
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Brightens skin tone and radiance</li>
                        <li>Strengthens immune defense</li>
                        <li>Protects cells from oxidative stress</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        How It Works
                      </h4>
                      <p className="text-muted-foreground">
                        Glutathione acts as the body’s master antioxidant,
                        supporting liver detoxification and recycling free
                        radicals. Vitamin C enhances glutathione activity and
                        absorption.
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground/80 italic">
                      Disclaimer: This is a dietary supplement and not intended
                      to diagnose, treat, cure, or prevent any disease or health
                      condition.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <Button className="bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/100">
                        Learn More
                      </Button>
                      <Button
                        variant="outline"
                        className="border-accent text-accent hover:bg-[#50000B] hover:text-[#C2A36A] bg-transparent"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Embrace Natural Luxury
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Join our network of wellness partners and bring the Aurevia
              experience to your community. Discover how natural luxury can
              enhance your wellness offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gravionne/partnership">
                <Button
                  size="lg"
                  className="bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/100"
                >
                  Partner With Us
                </Button>
              </Link>
              <Link href="/gravionne/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-[#50000B] hover:text-[#C2A36A] bg-transparent"
                >
                  Request Catalog
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer wrapper enforces global colors from brand guidance */}
      <div className="bg-[#50000B] text-[#C2A36A]"></div>
    </div>
  );
}
