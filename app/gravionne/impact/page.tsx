import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Gravionne Impact";
const pageDescription =
  "See how Gravionne transforms wellness through scientific innovation, luxury experiences, and partnerships that create measurable impact.";
const pagePath = "/gravionne/impact";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function ImpactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="impact-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Impact", path: pagePath },
        ])}
        id="impact-breadcrumb-jsonld"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Transforming Wellness
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
              Discover how Gravionne is revolutionizing the wellness industry
              through scientific innovation, luxury experiences, and meaningful
              partnerships that create lasting impact.
            </p>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Our Impact by Numbers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Measurable results that demonstrate our commitment to advancing
                wellness science and luxury experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    50+
                  </div>
                  <div className="text-lg font-medium mb-2">
                    Research Publications
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Peer-reviewed studies advancing wellness science
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    10K+
                  </div>
                  <div className="text-lg font-medium mb-2">Lives Enhanced</div>
                  <div className="text-sm text-muted-foreground">
                    Individuals experiencing personalized wellness
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    25
                  </div>
                  <div className="text-lg font-medium mb-2">
                    Global Partners
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Leading institutions and luxury brands
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    98%
                  </div>
                  <div className="text-lg font-medium mb-2">
                    Client Satisfaction
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Exceptional experiences and measurable results
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Research Impact */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-6">
                Scientific Leadership
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto text-pretty">
                Our research initiatives are advancing the field of personalized
                wellness and luxury health experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Breakthrough Research
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium mb-2">
                        AI-Driven Personalization
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Pioneering algorithms that predict individual wellness
                        responses with 94% accuracy
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium mb-2">Biomarker Innovation</h4>
                      <p className="text-sm text-muted-foreground">
                        Developing non-invasive monitoring technologies for
                        real-time health optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium mb-2">
                        Luxury Wellness Standards
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Establishing new benchmarks for premium wellness
                        experiences and outcomes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/research_laboratory.jpg"
                  alt="Research laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industry Recognition */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Industry Recognition
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our innovations and leadership have been recognized by leading
                industry organizations and publications.
              </p>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                   <img src="/brand.png" alt="Innovation Award" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Innovation Award 2024
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Global Wellness Institute
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Recognized for breakthrough AI-driven personalization
                    platform
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/all-inclusive.png" alt="Luxury Excellence" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Luxury Excellence
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Luxury Lifestyle Awards
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Best Luxury Wellness Experience for premium personalization
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/scientific-research.png" alt="Nature Biotechnology" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Scientific Excellence
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Nature Biotechnology
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Featured research on precision wellness methodologies
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                   <img src="/invent.png" alt="Technology Pioneer" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Technology Pioneer
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Forbes Health Tech
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Named among top 10 health tech innovators of 2024
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/sustainability.png" alt="Sustainability Leader" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Sustainability Leader
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Green Luxury Awards
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Outstanding commitment to sustainable luxury practices
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src="/experience.png" alt="Client Excellence" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    Client Excellence
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Luxury Service Awards
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Highest client satisfaction in luxury wellness category
                  </p>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </section>

        {/* Partnership Impact */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Strategic Partnerships
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Collaborating with world-class institutions and luxury brands to
                advance wellness innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-6">
                  Global Collaborations
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">
                      Leading Medical Institutions
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Partnerships Global Medical Schools and Institutes for
                      clinical research and validation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Luxury Brand Alliances</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Strategic collaborations with premium hospitality and
                      luxury goods brands to deliver exceptional experiences.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technology Partners</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Integration with leading health technology platforms and
                      AI research institutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/global_partnerships.jpg"
                  alt="Global partnerships"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Shaping Tomorrow's Wellness
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
              Our vision extends beyond today's innovations. We're building the
              foundation for a future where personalized wellness and luxury
              experiences converge to unlock human potential.
            </p>
            <Button className="bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/100">
              Partner With Us
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
