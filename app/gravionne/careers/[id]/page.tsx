import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import {
  CheckCircle2,
  MapPin,
  Briefcase,
  Calendar,
  Mail,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";
import jobsData from "@/data/jobs.json";
import { notFound } from "next/navigation";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  description: string;
  deadline: string;
  email: string;
  emailSubject: string;
  about: string;
  roleOverview: string;
  stats: Array<{ label: string; description: string }>;
  responsibilities: string[];
  qualifications: string[];
  requirements: string[];
  benefits: string[];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const job = jobsData.find((j: Job) => j.id === id);

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  const pageTitle = job.title;
  const pageDescription = `Join Gravionne as a ${job.title} in ${job.location}. ${job.description}`;
  const pagePath = `/gravionne/careers/${job.id}`;

  return buildMetadata({
    title: pageTitle,
    description: pageDescription,
    path: pagePath,
  });
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = jobsData.find((j: Job) => j.id === id);

  if (!job) {
    notFound();
  }

  const pageTitle = job.title;
  const pageDescription = `Join Gravionne as a ${job.title} in ${job.location}. ${job.description}`;
  const pagePath = `/gravionne/careers/${job.id}`;

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id={`${job.id}-webpage-jsonld`}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Careers", path: "/gravionne/careers" },
          { name: job.title, path: pagePath },
        ])}
        id={`${job.id}-breadcrumb-jsonld`}
      />

      <main className="flex-1">
        {/* Hero Section - Clean, matching homepage */}
        <section className="relative min-h-[45vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-[#be923c]" />
              <span className="text-muted-foreground text-sm tracking-wide">
                Open Position
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
              {job.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {job.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-muted px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-[#be923c]" />
                {job.department}
              </span>
              <span className="bg-muted px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#be923c]" />
                {job.location}
              </span>
              <span className="bg-muted px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#be923c]" />
                {job.jobType}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${job.email}?subject=${encodeURIComponent(job.emailSubject)}`}
              >
                <Button
                  size="lg"
                  className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/80 group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Link href="/gravionne/careers">
                <Button variant="outline" size="lg">
                  ← Back to Careers
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Gravionne */}
        <section className="py-20 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-balance">
                About Gravionne
              </h2>
              <div className="w-16 h-0.5 bg-[#be923c] mx-auto mb-8" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {job.about}
              </p>
            </div>
          </div>
        </section>

        {/* Role Overview with Stats */}
        <section className="py-20">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-balance">
                Role Overview
              </h2>
              <div className="w-16 h-0.5 bg-[#be923c] mx-auto mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                {job.roleOverview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {job.stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border border-border/40 shadow-sm text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-[#003535]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      {index === 0 && (
                        <Briefcase className="w-5 h-5 text-[#be923c]" />
                      )}
                      {index === 1 && (
                        <MapPin className="w-5 h-5 text-[#be923c]" />
                      )}
                      {index === 2 && (
                        <CheckCircle2 className="w-5 h-5 text-[#be923c]" />
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="py-20 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-balance">
                  Key Responsibilities
                </h2>
                <div className="w-16 h-0.5 bg-[#be923c] mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {job.responsibilities.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-background rounded-lg border border-border/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#be923c] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications & Requirements */}
        <section className="py-20">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-balance">
                  Qualifications & Requirements
                </h2>
                <div className="w-16 h-0.5 bg-[#be923c] mx-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border border-border/40 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                      Qualifications
                    </h3>
                    <ul className="space-y-2">
                      {job.qualifications.map((qual: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#be923c] rounded-full mr-3 mt-1.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {qual}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border border-border/40 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                      Requirements
                    </h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#be923c] rounded-full mr-3 mt-1.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {req}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-20 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-balance">
                  Job Details
                </h2>
                <div className="w-16 h-0.5 bg-[#be923c] mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-border/40 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <Briefcase className="w-6 h-6 text-[#be923c] mx-auto mb-2" />
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Employment Type
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {job.jobType}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-border/40 shadow-sm">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-6 h-6 text-[#be923c] mx-auto mb-2" />
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      Location
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {job.location}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-balance">
                  Benefits
                </h2>
                <div className="w-16 h-0.5 bg-[#be923c] mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {job.benefits.map((benefit: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-card border border-border/40 rounded-lg p-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#be923c] flex-shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply - With Google Form Link */}
        <section className="py-20 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 text-balance">
                How to Apply
              </h2>
              <div className="w-16 h-0.5 bg-[#be923c] mx-auto mb-8" />

              <Card className="border border-border/40 shadow-sm mb-6">
                <CardContent className="p-8">
                  <Mail className="w-10 h-10 text-[#be923c] mx-auto mb-4" />
                  <a
                    href="mailto:recruitment@gravionne.com?subject=Application for Healthcare Executive Position"
                    className="mb-4 inline-flex items-center justify-center rounded-full border border-[#be923c]/40 bg-[#be923c]/10 px-5 py-2 text-sm font-medium text-[#003535] transition hover:bg-[#be923c]/20"
                  >
                    recruitment@gravionne.com
                  </a>

                  <p className="text-foreground leading-relaxed mb-4">
                    Please send your updated resume and a brief cover letter to
                    our email address below.
                  </p>

                  <Button
                    className="bg-[#003535] text-[#be923c] hover:bg-[#003535]/80"
                    asChild
                  >
                    <a href="mailto:recruitment@gravionne.com?subject=Application for Healthcare Executive Position">
                      Apply via Email
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border border-border/40 shadow-sm">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-6 h-6 text-[#be923c] mx-auto mb-2" />
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    Application Deadline
                  </h3>
                  <p className="text-[#be923c] font-medium">{job.deadline}</p>
                </CardContent>
              </Card>

              <p className="text-xs text-muted-foreground mt-6">
                Gravionne reserves the right to cancel or modify the recruitment
                process at any stage without assigning any reason.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
