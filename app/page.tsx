import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { BackgroundLines } from "@/components/ui/background-lines";
import SplashCursor from "@/components/ui/SplashCursor";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* <SplashCursor /> */}
        {/* Hero Section */}
        <BackgroundLines className="h-screen flex items-center justify-center">
          <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto max-w-screen-xl px-4 text-center">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
                Elevating Health, Wellness & Humanity
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
                Advancing Health. Improving Lives.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
                Delivering world-class healthcare products and advanced medical
                solutions for individuals and institutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#our-curations">
                  <Button
                    size="lg"
                    className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/80"
                  >
                    Explore Our Work
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
          </div>
        </BackgroundLines>

        {/* Philosophy Snapshot */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                  Our Philosophy
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Gravionne, we believe in the intersection of luxury and
                  wellness, where science meets humanity. Our approach is rooted
                  in precision, guided by research, and inspired by the profound
                  potential of human flourishing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We curate experiences that transcend traditional boundaries,
                  creating pathways to elevated health and wellness that honor
                  both individual needs and collective wellbeing.
                </p>
                <Link href="gravionne/philosophy">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-[#003535] hover:text-[#be923c] bg-transparent"
                  >
                    Explore Our Philosophy
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/Philosophy.png"
                    alt="Luxury wellness environment showcasing our philosophy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curations Preview */}
        <section id="our-curations" className="py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading mb-6 text-3xl font-semibold text-balance md:text-4xl">
                Our Curations
              </h2>

              <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Our distinct collections, each crafted with precision and
                purpose, representing our commitment to excellence in health and
                wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mx-auto">
              <Link
                href="/gravionne/curations/sanovia"
                className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Card className="group h-full overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-6 aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                      <img
                        src="/Sanovia.png"
                        alt="Sanovia Collection"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="font-heading mb-3 text-xl font-semibold text-foreground">
                      Sanovia
                    </h3>

                    <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#be923c] md:text-base">
                      Premium Dietary Supplements
                    </h4>

                    <p className="mb-5 min-h-[88px] text-sm leading-relaxed text-muted-foreground md:text-base">
                      A flagship dietary supplements collection, scientifically
                      formulated to support everyday health and long-term
                      wellbeing.
                    </p>

                    <Button
                      asChild
                      variant="ghost"
                      className="px-0 text-[#be923c] hover:bg-transparent hover:text-[#be923c]"
                    >
                      <span>Discover Sanovia →</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/gravionne/curations/mediora"
                className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Card className="group h-full overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-6 aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                      <img
                        src="/Mediora.jpeg"
                        alt="Mediora Collection"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="font-heading mb-3 text-xl font-semibold text-foreground">
                      Mediora
                    </h3>
                    <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#be923c] md:text-base">
                      Advanced Medical Solutions
                    </h4>
                    <p className="mb-5 min-h-[88px] text-sm leading-relaxed text-muted-foreground md:text-base">
                      A range of advanced medical devices and healthcare
                      solutions designed to support mordern clinical and personal
                      health needs.
                    </p>

                    <Button
                      asChild
                      variant="ghost"
                      className="px-0 text-[#be923c] hover:bg-transparent hover:text-[#be923c]"
                    >
                      <span>Explore Mediora →</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/gravionne/curations/brandora"
                className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Card className="group h-full overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-6 aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                      <img
                        src="/Brandora.jpeg"
                        alt="Brandora Collection"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="font-heading mb-3 text-xl font-semibold text-foreground">
                      Brandora
                    </h3>
                    <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#be923c] md:text-base">
                      Premium Printing & Packaging
                    </h4>
                    <p className="mb-5 min-h-[88px] text-sm leading-relaxed text-muted-foreground md:text-base">
                      A reliable partner for premium printing, packaging and
                      accessories that elevate brand identity and value.
                    </p>

                    <Button
                      asChild
                      variant="ghost"
                      className="px-0 text-[#be923c] hover:bg-transparent hover:text-[#be923c]"
                    >
                      <span>Explore Brandora →</span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Journal Teaser */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/elegant-journal-articles-wellness-research.png"
                    alt="Gravionne Journal insights and research"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                  Insights & Research
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our journal explores the intersection of science, wellness,
                  and human potential. Discover evidence-based insights, thought
                  leadership, and the latest developments in health technology.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="border-l-2 border-accent pl-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      The Future of Personalized Wellness
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Exploring how AI and biotechnology are reshaping
                      individual health journeys
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h3 className="font-semibold text-foreground mb-1">
                      Luxury Meets Science
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The convergence of premium experiences and evidence-based
                      wellness
                    </p>
                  </div>
                </div>
                <Link href="/journals">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-[#003535] hover:text-[#be923c] bg-transparent"
                  >
                    Read Our Journals
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Highlight */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Visionary Leadership
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our leadership team combines decades of experience in health
                technology, luxury brands, and scientific research to guide
                Gravionne's mission of elevating human wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 overflow-hidden">
                    <img
                      src="/ceo_aan_nahl.jpg"
                      alt="Aan Nahl"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Aminur Islam{" "}
                  </h3>
                  <p className="text-accent font-medium mb-4">Chairman</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Providing strategic leadership and stewardship, guiding
                    Gravionne’s growth with a vision rooted in global trade,
                    innovation, and humanitarian excellence.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Global trade
                    </span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Innovation
                    </span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Humanitarian excellence
                    </span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Leadership
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 overflow-hidden">
                    <img
                      src="/ceo_Gravionne.jpg"
                      alt="CEO Gravionne"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Hossain Md. Mosarouf
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    Chief Executive Officer
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Driving strategy and vision with 20+ years of experience in
                    public health, wellness marketing, and technology
                    innovation. to deliver science-driven, innovative, and
                    accessible health and wellness solutions — improving lives
                    worldwide.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Wellness marketing
                    </span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Technology innovation
                    </span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Leadership
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-6 overflow-hidden">
                    <img
                      src="/ceo_beod.jpg"
                      alt="Beod"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Talat Md. Tawfiq Elahi
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    Chief Innovation Officer
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Designing transformative solutions that unite wellness and
                    technology through visionary innovation.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Unite Wellness
                    </span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Technology Innovation
                    </span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      AI & Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-muted text-xs rounded-full">
                      Research
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/leadership">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-[#003535] hover:text-[#be923c] bg-transparent"
                >
                  Meet Our Full Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Global Impact */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Global Impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Building partnerships and creating meaningful change in the
                health and wellness landscape worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                  12+
                </div>
                <p className="text-sm text-muted-foreground">
                  Research Partnerships
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                  5
                </div>
                <p className="text-sm text-muted-foreground">
                  Started Countries
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                  5K+
                </div>
                <p className="text-sm text-muted-foreground">Lives Touched</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                  98%
                </div>
                <p className="text-sm text-muted-foreground">
                  Partner Satisfaction
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="/impact">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-[#003535] hover:text-[#be923c] bg-transparent"
                >
                  Explore Our Impact
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Partner Invitation */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Partner With Visionaries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              We seek partners who share our commitment to excellence,
              innovation, and the elevation of human wellness. Together, we can
              shape the future of health and wellbeing.
            </p>
            <Link href="/gravionne/partnership">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#003535] to-[#003535]/90 text-[#be923c] hover:bg-[#003535]/100"
              >
                Begin Partnership Journey
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
