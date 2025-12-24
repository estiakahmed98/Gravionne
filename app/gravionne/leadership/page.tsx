import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Visionary Leadership";
const pageDescription =
  "Meet Gravionne’s leadership team blending scientific expertise with visionary business acumen to redefine luxury wellness.";
const pagePath = "/gravionne/leadership";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="leadership-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Leadership", path: pagePath },
        ])}
        id="leadership-breadcrumb-jsonld"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Visionary Leadership
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
              Meet the pioneering minds behind Gravionne's revolutionary
              approach to luxury wellness. Our leadership team combines decades
              of scientific expertise with visionary business acumen.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-6">
                Executive Leadership
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto text-pretty">
                Our leadership team brings together world-class expertise in
                biotechnology, luxury markets, and wellness innovation.
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
          </div>
        </section>

        {/* Advisory Board */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Advisory Board
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our Advisory Board is composed of leading experts in health,
                nutrition, and public health who provide strategic insights and
                guidance to strengthen our mission. With their expertise and
                integrity, we ensure trusted, evidence-based approaches that
                promote wellness, innovation, and impact.
              </p>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              We're always seeking exceptional talent to join our team of
              visionaries, scientists, and innovators who are reshaping the
              future of wellness.
            </p>
            <Button className="bg-[#50000B] text-[#C2A36A] hover:bg-[#50000B]/100">
              Explore Opportunities
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
