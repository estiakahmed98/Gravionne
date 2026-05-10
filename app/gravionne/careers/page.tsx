import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { Briefcase, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import jobsData from "@/data/jobs.json";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const pageTitle = "Careers";
const pageDescription =
  "Join Gravionne and build your career with a team delivering world-class healthcare products and advanced medical solutions worldwide.";
const pagePath = "/gravionne/careers";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

// Job listings data - derived from JSON
const jobListings = jobsData.map((job) => ({
  id: job.id,
  title: job.title,
  department: job.department,
  location: job.location,
  jobType: job.jobType,
  description: job.description,
  detailPage: `/gravionne/careers/${job.id}`,
  deadline: job.deadline,
}));

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="careers-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Careers", path: pagePath },
        ])}
        id="careers-breadcrumb-jsonld"
      />

      <main className="flex-1">
        {/* Hero Section - Clean & Simple */}
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <div className="mb-6 flex justify-center">
              <Briefcase className="w-8 h-8 text-[#be923c]" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
              Build Your Career with Gravionne
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Join a team delivering world-class healthcare products and
              advanced medical solutions for individuals and institutions
              worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings">
                <Button
                  size="lg"
                  className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/80"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Gravionne - Clean Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-balance">
                About Gravionne
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Gravionne is a premium healthcare enterprise dedicated to
                bridging the gap between global innovation and local care. We
                curate and deliver a sophisticated portfolio of medical devices,
                dietary supplements, and digital health solutions sourced from
                the world's leading centers of excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By supporting both individual wellness and institutional
                infrastructure, we ensure that the highest standards of
                healthcare are accessible on a global scale. We seek driven
                individuals committed to delivering long-term value in a
                high-performance setting.
              </p>
            </div>
          </div>
        </section>

        {/* Why Join Gravionne - Enhanced */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-12 text-balance text-center">
              Why Join Gravionne?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#003535]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#003535]">🌍</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Global Impact
                </h3>
                <p className="text-muted-foreground">
                  Impact healthcare and wellness on a global scale, contributing
                  to meaningful change in people's lives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#003535]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#003535]">💡</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Innovation
                </h3>
                <p className="text-muted-foreground">
                  Work with cutting-edge medical solutions and be part of
                  shaping the future of healthcare technology.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#003535]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#003535]">📈</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Growth
                </h3>
                <p className="text-muted-foreground">
                  Develop your skills in a collaborative environment where
                  expertise is valued and dedication creates impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings - Enhanced */}
        <section id="openings" className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-12 text-balance text-center">
              Current Openings
            </h2>

            {jobListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobListings.map((job) => (
                  <Card
                    key={job.id}
                    className="group hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden border border-border/40"
                  >
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                          {job.title}
                        </h3>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-start text-sm">
                            <Briefcase className="w-4 h-4 text-[#be923c] mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium text-foreground">
                                {job.department}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-start text-sm">
                            <MapPin className="w-4 h-4 text-[#be923c] mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-muted-foreground">
                                {job.location}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-start text-sm">
                            <Clock className="w-4 h-4 text-[#be923c] mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-muted-foreground">
                                {job.jobType}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-start text-sm">
                            <Calendar className="w-4 h-4 text-[#be923c] mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="text-[#be923c] font-medium">
                                {job.deadline}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                      <Link href={job.detailPage} className="mt-6">
                        <Button className="w-full bg-[#003535] text-white hover:bg-[#003535]/90">
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  No current openings available. Please check back soon.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
