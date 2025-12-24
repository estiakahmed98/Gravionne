import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Our Philosophy";
const pageDescription =
  "Gravionne’s philosophy blends precision science, human-centered care, and luxury wellness to redefine trusted health experiences.";
const pagePath = "/gravionne/philosophy";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="philosophy-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Philosophy", path: pagePath },
        ])}
        id="philosophy-breadcrumb-jsonld"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance mb-6">
              Our Philosophy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
              Where precision meets purpose, science meets humanity, and luxury
              meets wellness
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Vision */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Redefining global wellness with trust, science, and human
                  care.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We aim to become the world’s most trusted platform for health,
                  wellness, and health‑tech—where science, innovation, and human
                  care converge to create lasting impact, leaving every life and
                  community better than we found them.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Transforming health and wellness into a universal standard of
                  excellence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to set a new global benchmark in wellness by
                  delivering products, services, and experiences that combine
                  scientific integrity, sustainable practices, and human
                  compassion. We empower individuals and communities to thrive
                  in body, mind, and spirit, while building a future where
                  health is recognized as both a personal right and a collective
                  responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Core Principles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                The foundational beliefs that guide every decision we make and
                every product we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Scientific Rigor
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every formulation, technology, and methodology undergoes
                    rigorous testing and validation. We partner with leading
                    research institutions to ensure efficacy and safety.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Human-Centered Design
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Technology should serve humanity, not replace it. Our
                    solutions enhance human connection, empathy, and
                    understanding while preserving dignity and autonomy.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Sustainable Excellence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    True luxury is sustainable. We prioritize ethical sourcing,
                    environmental responsibility, and long-term value over
                    short-term gains in all our operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Transparent Dialogue
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in open communication about our processes,
                    ingredients, and business practices. Trust is built through
                    honesty and transparency at every level.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Global Perspective
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We honor wellness traditions from around the world while
                    innovating for the future. Our approach integrates ancient
                    wisdom with modern scientific understanding.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Holistic Integrity
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wellness cannot be compartmentalized. We address the
                    complete human experience—physical, mental, emotional, and
                    spiritual—with respect for their interconnectedness.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Governance & Ethics */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Governance & Ethics
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our commitment to ethical excellence guides every aspect of our
                operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-4 text-balance">
                  Scientific Advisory Board
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our products and technologies are developed under the guidance
                  of an independent Scientific Advisory Board comprising leaders
                  in medicine, biotechnology, ethics, and wellness research.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-muted-foreground">
                      Rigorous peer-review process for all claims
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-muted-foreground">
                      Transparent research methodologies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-muted-foreground">
                      Ethical clinical trial standards exceeding requirements
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-semibold mb-4 text-balance">
                  Ethical Framework
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We've established a comprehensive ethical framework that
                  governs our partnerships, sourcing practices, and business
                  decisions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-muted-foreground">
                      Fair trade and equitable partnership models
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-muted-foreground">
                      Environmental impact assessment for all initiatives
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-muted-foreground">
                      Data privacy and security as fundamental rights
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 p-8 border border-accent/20 rounded-lg bg-background">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-center text-balance">
                Our Pledge
              </h3>
              <p className="text-lg text-muted-foreground text-center italic leading-relaxed max-w-3xl mx-auto">
                "We will never compromise on quality, ethics, or scientific
                integrity—even when easier paths exist. Our commitment to
                excellence is unwavering, our respect for humanity
                non-negotiable."
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Join Us in Redefining Wellness
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Discover how our philosophy translates into exceptional products
              and experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gravionne/curations">
                <Button
                  size="lg"
                  className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/100"
                >
                  Explore Our Curations
                </Button>
              </Link>
              <Link href="/gravionne/partnership">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-[#003535] hover:text-[#be923c] bg-transparent"
                >
                  Partner With Us
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
