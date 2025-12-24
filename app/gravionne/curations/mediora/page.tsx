import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Watch,
  HeartPulse,
  Activity,
  Brain,
  Gauge,
  Stethoscope,
  BellRing,
  ShieldCheck,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Mediora — Future Health-Tech & Connected Care";
const pageDescription =
  "Discover Mediora, Gravionne’s connected care ecosystem blending advanced sensors, AI insights, and preventative health technology.";
const pagePath = "/gravionne/curations/mediora";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function MedioraPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="mediora-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Curations", path: "/gravionne/curations" },
          { name: "Mediora", path: pagePath },
        ])}
        id="mediora-breadcrumb-jsonld"
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
                  Mediora — Future Health‑Tech & Connected Care
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                  Advanced health‑tech solutions where cutting‑edge sensors, AI
                  insights, and elegant design come together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#products">
                    <Button
                      size="lg"
                      className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/100"
                    >
                      Explore Technology
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
                {/* Using existing hero image path */}
                <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                  <img
                    src="/sophisticated-mediora-health-tech-products-with-cl.png"
                    alt="Mediora Collection Hero"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Features */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                Health Technology Elevated
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Mediora embodies precision monitoring, AI‑driven guidance, and
                human‑centric industrial design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Precision Monitoring",
                  Icon: HeartPulse,
                  desc: "Advanced sensors and algorithms provide real‑time health insights with consumer‑friendly interfaces.",
                },
                {
                  title: "AI‑Driven Insights",
                  Icon: Brain,
                  desc: "Machine learning turns continuous data into daily scores, trends, and proactive recommendations.",
                },
                {
                  title: "Elegant Design",
                  Icon: Activity,
                  desc: "Sophisticated aesthetics meet intuitive UX for seamless integration into your lifestyle.",
                },
              ].map(({ title, Icon, desc }) => (
                <Card
                  key={title}
                  className="group hover:shadow-lg transition-all duration-300 border-accent/20"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-4">
                      {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {desc}
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
                Innovation Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                Discover connected devices integrated into the Mediora
                ecosystem—delivering proactive, preventive care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Smart Health Watch */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  {/* Using existing image path from your project */}
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/sleek-health-monitoring-device-with-modern-design.png"
                      alt="Mediora Smart Health Watch"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Watch className="w-5 h-5 text-accent" />
                      <h3 className="font-heading text-2xl font-semibold">
                        Smart Health Watch
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Generic Name: Wearable Smart Watch with ECG, SpO₂, Heart
                      Rate, Sleep & Stress Tracking
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-heading font-semibold mb-2 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-accent" />{" "}
                          Curated Excellence
                        </h4>
                        <p className="text-muted-foreground">
                          Sourced from global health‑tech leaders, integrated
                          into Gravionne’s Mediora ecosystem.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-2 flex items-center gap-2">
                          <Stethoscope className="w-4 h-4 text-accent" /> Why
                          Choose from Gravionne Mediora
                        </h4>
                        <p className="text-muted-foreground">
                          Transforms a lifestyle wearable into a true health
                          companion.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        Key Benefits
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <HeartPulse className="w-4 h-4 text-accent" /> Tracks
                          heart rate, oxygen levels, stress, and sleep
                        </li>
                        <li className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-accent" /> Records
                          ECGs for early cardiac insights
                        </li>
                        <li className="flex items-center gap-2">
                          <BellRing className="w-4 h-4 text-accent" /> Promotes
                          proactive, preventive health awareness
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        How It Works
                      </h4>
                      <p className="text-muted-foreground">
                        Advanced biosensors continuously capture vital data,
                        syncing with the Mediora App to generate AI insights,
                        daily health scores, and optional teleconsult
                        integration.
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground/80 italic">
                      Disclaimer: This is a health‑tech monitoring device and
                      not intended to replace professional medical diagnosis or
                      treatment.
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

              {/* Blood Pressure Monitor */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20">
                <CardContent className="p-8">
                  {/* Using existing image path from your project */}
                  <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                    <img
                      src="/elegant-wellness-app-interface-on-premium-tablet.png"
                      alt="Mediora Blood Pressure Monitor"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-accent" />
                      <h3 className="font-heading text-2xl font-semibold">
                        Blood Pressure Monitor
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Generic Name: Digital Smart Blood Pressure Monitor with
                      Bluetooth Connectivity
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-heading font-semibold mb-2 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-accent" />{" "}
                          Curated Excellence
                        </h4>
                        <p className="text-muted-foreground">
                          Curated from trusted global device manufacturers,
                          enhanced with Gravionne Mediora’s SaaS platform.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-2 flex items-center gap-2">
                          <Stethoscope className="w-4 h-4 text-accent" /> Why
                          Choose from Gravionne Mediora
                        </h4>
                        <p className="text-muted-foreground">
                          Beyond a device — a connected chronic care solution.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        Key Benefits
                      </h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <Gauge className="w-4 h-4 text-accent" /> Provides
                          accurate, convenient home BP tracking
                        </li>
                        <li className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-accent" /> Generates
                          monthly reports for physicians
                        </li>
                        <li className="flex items-center gap-2">
                          <BellRing className="w-4 h-4 text-accent" /> AI alerts
                          for hypertension risk
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold mb-2">
                        How It Works
                      </h4>
                      <p className="text-muted-foreground">
                        The digital cuff inflates automatically and records
                        systolic/diastolic readings. Data syncs to the Mediora
                        App where AI generates personalized trends, with
                        optional doctor access.
                      </p>
                    </div>

                    <p className="text-xs text-muted-foreground/80 italic">
                      Disclaimer: This device supports self‑monitoring and is
                      not a substitute for professional medical diagnosis or
                      treatment.
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
              Transform Healthcare Delivery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
              Partner with Mediora to bring connected care to your practice or
              organization.
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
                  Request Demo
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
