import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Gravionne Journal";
const pageDescription =
  "Explore the intersection of science, wellness, and human potential with Gravionne’s evidence-based insights and thought leadership.";
const pagePath = "/gravionne/journals";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function JournalsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="journals-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Journal", path: pagePath },
        ])}
        id="journals-breadcrumb-jsonld"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Gravionne Journal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
              Exploring the intersection of science, wellness, and human
              potential. Discover evidence-based insights, thought leadership,
              and the latest developments in health technology.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                Featured Research
              </h2>
            </div>

            <Card className="group hover:shadow-xl transition-all duration-500 mb-16">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] lg:aspect-auto bg-muted overflow-hidden">
                    <img
                      src="/elegant-journal-articles-wellness-research.png"
                      alt="Featured research article"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-sm text-accent font-medium">
                        Featured Research
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        • 12 min read
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-balance">
                      The Future of Personalized Wellness: AI and Biotechnology
                      Convergence
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Exploring how artificial intelligence and biotechnology
                      are reshaping individual health journeys, creating
                      unprecedented opportunities for precision wellness and
                      preventive care.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-muted rounded-full"></div>
                        <span className="text-sm text-muted-foreground">
                          Dr. Sarah Chen
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        March 15, 2024
                      </span>
                    </div>
                    <Link href="/journals/future-personalized-wellness">
                      <Button className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/100">
                        Read Full Article
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-semibold mb-4">
                Latest Insights
              </h2>
              <p className="text-muted-foreground">
                Stay informed with our latest research findings and industry
                perspectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/elegant-wellness-app-interface-on-premium-tablet.png"
                      alt="Luxury meets science article"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-accent font-medium">
                      Research
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      • 8 min read
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-balance">
                    Luxury Meets Science: The New Paradigm of Premium Wellness
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    How the convergence of premium experiences and
                    evidence-based wellness is creating a new standard for
                    health and luxury.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Marcus Rodriguez
                      </span>
                    </div>
                    <Link href="/journals/luxury-meets-science">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:bg-[#003535] hover:text-[#be923c]"
                      >
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/sustainable-wellness-practices-in-luxury-setting.png"
                      alt="Sustainable wellness practices"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-accent font-medium">
                      Sustainability
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      • 6 min read
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-balance">
                    Sustainable Luxury: Redefining Wellness for Future
                    Generations
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Exploring how sustainable practices are becoming integral to
                    luxury wellness, creating value for both consumers and the
                    planet.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Dr. Amara Okafor
                      </span>
                    </div>
                    <Link href="/journals/sustainable-luxury">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-[#be923c] hover:bg-[#003535]"
                      >
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/advanced-health-monitoring-technology-showcase.png"
                      alt="Advanced health monitoring"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-accent font-medium">
                      Technology
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      • 10 min read
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-balance">
                    The Evolution of Health Monitoring: From Reactive to
                    Predictive Care
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    How advanced monitoring technologies are shifting healthcare
                    from treatment-focused to prevention-oriented approaches.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Dr. Sarah Chen
                      </span>
                    </div>
                    <Link href="/journals/evolution-health-monitoring">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-[#be923c] hover:bg-[#003535]"
                      >
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/global-wellness-trends-luxury-market-analysis.png"
                      alt="Global wellness trends"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-accent font-medium">
                      Market Insights
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      • 7 min read
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-balance">
                    Global Wellness Trends: The Rise of Conscious Luxury
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Analyzing emerging trends in the global wellness market and
                    their implications for luxury health brands.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Marcus Rodriguez
                      </span>
                    </div>
                    <Link href="/journals/global-wellness-trends">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-[#be923c] hover:bg-[#003535]"
                      >
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/precision-medicine-personalized-wellness-approach.png"
                      alt="Precision medicine approach"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-accent font-medium">
                      Innovation
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      • 9 min read
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-balance">
                    Precision Medicine: The Future of Individualized Wellness
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    How genetic insights and biomarker analysis are enabling
                    truly personalized wellness strategies for optimal health
                    outcomes.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Dr. Amara Okafor
                      </span>
                    </div>
                    <Link href="/journals/precision-medicine">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-[#be923c] hover:bg-[#003535]"
                      >
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
                    <img
                      src="/mindfulness-technology-integration-wellness.png"
                      alt="Mindfulness and technology"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="text-sm text-accent font-medium">
                      Wellness
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">
                      • 5 min read
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3 text-balance">
                    Digital Mindfulness: Balancing Technology and Inner Peace
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Exploring how technology can enhance rather than hinder our
                    journey toward mindfulness and mental wellbeing.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        Dr. Sarah Chen
                      </span>
                    </div>
                    <Link href="/journals/digital-mindfulness">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-accent hover:text-[#be923c] hover:bg-[#003535]"
                      >
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Stay Informed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Subscribe to our journal for the latest insights in wellness
              science, luxury health trends, and breakthrough research findings.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
