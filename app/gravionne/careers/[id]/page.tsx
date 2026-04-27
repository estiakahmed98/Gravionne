import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { CheckCircle2, MapPin, Briefcase, Calendar, Mail, Award, Users, TrendingUp } from "lucide-react";
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
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const job = jobsData.find((j: Job) => j.id === params.id);
  
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

export default function JobDetailPage({ params }: PageProps) {
  const job = jobsData.find((j: Job) => j.id === params.id);

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
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#003535] via-[#004d4d] to-[#003535] overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#be923c] rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#be923c] rounded-full filter blur-3xl" />
          </div>
          
          <div className="container mx-auto max-w-screen-xl px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Briefcase className="w-4 h-4 text-[#be923c]" />
              <span className="text-white/90 text-sm">Open Position</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              {job.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              {job.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#be923c]" />
                {job.department}
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#be923c]" />
                {job.location}
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#be923c]" />
                {job.jobType}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${job.email}?subject=${encodeURIComponent(job.emailSubject)}`}>
                <Button size="lg" className="bg-[#be923c] text-[#003535] hover:bg-[#d4a84b] hover:text-[#003535] font-semibold px-8">
                  Apply Now
                </Button>
              </a>
              <Link href="/gravionne/careers">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
                  ← Back to Careers
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Gravionne - Enhanced */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] mb-4">
                About Gravionne
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed">
                {job.about}
              </p>
            </div>
          </div>
        </section>

        {/* Role Overview with Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] text-center mb-4">
                Role Overview
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-8" />
              <p className="text-lg text-gray-600 text-center leading-relaxed mb-12">
                {job.roleOverview}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {job.stats.map((stat, index) => (
                  <Card key={index} className="border-none shadow-lg text-center">
                    <CardContent className="p-6">
                      {index === 0 && <Users className="w-10 h-10 text-[#be923c] mx-auto mb-3" />}
                      {index === 1 && <MapPin className="w-10 h-10 text-[#be923c] mx-auto mb-3" />}
                      {index === 2 && <Award className="w-10 h-10 text-[#be923c] mx-auto mb-3" />}
                      <h3 className="font-semibold text-lg text-[#003535]">{stat.label}</h3>
                      <p className="text-gray-500 text-sm">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] mb-4">
                Key Responsibilities
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {job.responsibilities.map((item: string, index: number) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#be923c] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications & Requirements Combined */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] text-center mb-4">
                Qualifications & Requirements
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-12" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#003535] mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#be923c]" />
                      Qualifications
                    </h3>
                    <ul className="space-y-3">
                      {job.qualifications.map((qual: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#be923c] rounded-full mr-3 mt-2" />
                          <span className="text-gray-600">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#003535] mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#be923c]" />
                      Requirements
                    </h3>
                    <ul className="space-y-3">
                      {job.requirements.map((req: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#be923c] rounded-full mr-3 mt-2" />
                          <span className="text-gray-600">{req}</span>
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
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] text-center mb-4">
                Job Details
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-12" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-[#be923c]/20 shadow-md">
                  <CardContent className="p-6 text-center">
                    <Briefcase className="w-8 h-8 text-[#be923c] mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-[#003535] mb-1">Employment Type</h3>
                    <p className="text-gray-600">{job.jobType}</p>
                  </CardContent>
                </Card>
                <Card className="border border-[#be923c]/20 shadow-md">
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-[#be923c] mx-auto mb-3" />
                    <h3 className="font-semibold text-lg text-[#003535] mb-1">Location</h3>
                    <p className="text-gray-600">{job.location}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation & Benefits */}
        <section className="py-20 bg-[#003535]">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-4">
                Compensation & Benefits
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-12" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {job.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#be923c] flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] text-center mb-4">
                How to Apply
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-8" />
              
              <Card className="border-2 border-[#be923c]/30 shadow-xl mb-8">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-[#be923c] mx-auto mb-4" />
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Interested candidates are invited to send their updated resume along with a brief cover letter to:
                  </p>
                  <a
                    href={`mailto:${job.email}?subject=${encodeURIComponent(job.emailSubject)}`}
                    className="text-[#be923c] hover:text-[#d4a84b] text-xl font-semibold underline decoration-2 underline-offset-4"
                  >
                    {job.email}
                  </a>
                  <p className="text-gray-500 mt-4 text-sm">
                    Please mention <span className="font-mono bg-gray-100 px-2 py-1 rounded">"{job.emailSubject}"</span> in the subject line.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#be923c]/30 bg-gradient-to-r from-[#003535] to-[#004d4d] shadow-xl">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-10 h-10 text-[#be923c] mx-auto mb-3" />
                  <h3 className="font-semibold text-xl text-white mb-2">Application Deadline</h3>
                  <p className="text-3xl font-bold text-[#be923c]">{job.deadline}</p>
                </CardContent>
              </Card>

              <p className="text-sm text-gray-400 text-center mt-8 italic">
                Gravionne reserves the right to cancel or modify the recruitment process at any stage without assigning any reason.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action - Enhanced */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] mb-4">
                Join Gravionne
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Be part of a growing journey in health and wellness. Make a difference in people's lives through premium products and meaningful relationships.
              </p>
              <a href={`mailto:${job.email}?subject=${encodeURIComponent(job.emailSubject)}`}>
                <Button
                  size="lg"
                  className="bg-[#003535] text-[#be923c] hover:bg-[#004d4d] hover:text-[#d4a84b] font-semibold px-10"
                >
                  Apply Now
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}