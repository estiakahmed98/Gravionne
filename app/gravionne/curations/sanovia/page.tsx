import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Sanovia — Core Health & Preventive Science";
const pageDescription =
  "Sanovia blends traditional wisdom with modern innovation for safe, effective preventive health and luxury wellness products.";
const pagePath = "/gravionne/curations/sanovia";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function SanoviaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="sanovia-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Curations", path: "/gravionne/curations" },
          { name: "Sanovia", path: pagePath },
        ])}
        id="sanovia-breadcrumb-jsonld"
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
                  Sanovia — Core Health & Preventive Science
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                  Our flagship collection where traditional wisdom meets modern
                  innovation. Each product is crafted for safety, efficacy, and
                  a truly luxurious wellness experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#products">
                    <Button
                      size="lg"
                      className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/100"
                    >
                      Explore Products
                    </Button>
                  </Link>
                  <Link href="/gravionne/partnership">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-accent text-accent hover:bg-[#003535] hover:text-[#be923c] bg-transparent"
                    >
                      Partner Inquiry
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/elegant-sanovia-wellness-products-with-gold-accent.png"
                    alt="Sanovia Collection Hero"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Features */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Luxury Wellness Redefined
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Sanovia represents the pinnacle of wellness luxury, combining
                time‑honored traditions with cutting‑edge scientific research.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Formulations",
                  desc: "Meticulously crafted using the finest ingredients sourced from around the world, each formulation represents years of research and development.",
                },
                {
                  title: "Scientific Validation",
                  desc: "Every product undergoes rigorous testing and consideration for efficacy and safety for our discerning clientele.",
                },
                {
                  title: "Luxury Experience",
                  desc: "From elegant packaging to personalized service, every touchpoint is designed to deliver an unparalleled luxury wellness experience.",
                },
              ].map((f) => (
                <Card
                  key={f.title}
                  className="group hover:shadow-lg transition-all duration-300 border-accent/20"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <img
                        src={
                          f.title === "Premium Formulations"
                            ? "/premium.png"
                            : f.title === "Scientific Validation"
                            ? "/approve.png"
                            : "/all-inclusive.png"
                        }
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
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Discover our signature wellness solutions—designed to elevate
                daily rituals and support optimal well‑being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Conceive Booster */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/elegant-wellness-supplement-bottles-with-gold-deta.png"
                      alt="Sanovia Conceive Booster"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-semibold">
                      Conceive Booster
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Generic Name: Multinutrient Fertility Formula (Folic Acid
                      + Zinc + CoQ10 + Vitamins)
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-heading font-semibold mb-2">
                          Curated Excellence
                        </h4>
                        <p className="text-muted-foreground">
                          Curated from global leaders in reproductive health,
                          ensuring clinically backed fertility support.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-2">
                          Why Choose from Gravionne Sanovia
                        </h4>
                        <p className="text-muted-foreground">
                          Premium fertility support for both men & women,
                          designed with science‑based safety and trust.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        Key Benefits
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>
                          Enhances ovulation and reproductive cycles in women
                        </li>
                        <li>Improves sperm motility and quality in men</li>
                        <li>
                          Provides essential nutrients for preconception health
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        How It Works
                      </h4>
                      <p className="text-muted-foreground">
                        Balanced nutrients like folic acid, zinc, and CoQ10 act
                        at the cellular level to optimize reproductive function,
                        supporting natural conception.
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground/80 italic">
                      Disclaimer: This is a dietary supplement and not intended
                      to diagnose, treat, cure, or prevent any disease or health
                      condition.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <Button className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/100">
                        Learn More
                      </Button>
                      <Button
                        variant="outline"
                        className="border-accent text-accent hover:bg-[#003535] hover:text-[#be923c] bg-transparent"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Magnesium Glycinate */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/luxury-wellness-spa-with-natural-elements-and-soft.png"
                      alt="Sanovia Magnesium Glycinate"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl font-semibold">
                      Magnesium Glycinate
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Generic Name: Magnesium Glycinate Chelated Complex
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-heading font-semibold mb-2">
                          Curated Excellence
                        </h4>
                        <p className="text-muted-foreground">
                          Sourced from internationally renowned nutraceutical
                          innovators for superior absorption and
                          bioavailability.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-2">
                          Why Choose from Gravionne Sanovia
                        </h4>
                        <p className="text-muted-foreground">
                          Stress relief, sleep support, and recovery in one
                          premium formulation.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        Key Benefits
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Reduces stress and anxiety</li>
                        <li>Promotes restful, deep sleep</li>
                        <li>Relaxes muscles and supports recovery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        How It Works
                      </h4>
                      <p className="text-muted-foreground">
                        Magnesium bound with glycine ensures gentle digestion
                        and high absorption, calming the nervous system and
                        regulating neurotransmitters for mental and physical
                        relaxation.
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground/80 italic">
                      Disclaimer: This is a dietary supplement and not intended
                      to diagnose, treat, cure, or prevent any disease or health
                      condition.
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <Button className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/100">
                        Learn More
                      </Button>
                      <Button
                        variant="outline"
                        className="border-accent text-accent hover:bg-[#003535] hover:text-[#be923c] bg-transparent"
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
              Experience Sanovia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Join our network of partners and bring the Sanovia experience to
              your clientele. Discover how luxury wellness can transform your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gravionne/partnership">
                <Button
                  size="lg"
                  className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/100"
                >
                  Partner With Us
                </Button>
              </Link>
              <Link href="/gravionne/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-[#003535] hover:text-[#be923c] bg-transparent"
                >
                  Request Information
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer wrapper enforces global colors from brand guidance */}
      <div className="bg-[#003535] text-[#be923c]"></div>
    </div>
  );
}
