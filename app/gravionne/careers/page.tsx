import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";
import { Briefcase, MapPin, Clock, Calendar, Users, Target, Shield, TrendingUp, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import jobsData from "@/data/jobs.json";

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

const values = [
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description: "We maintain the highest standards in every product and service we deliver.",
  },
  {
    icon: Target,
    title: "Excellence Driven",
    description: "We strive for precision and continuous improvement in all we do.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We believe in teamwork, respect, and shared success.",
  },
  {
    icon: TrendingUp,
    title: "Global Impact",
    description: "We're committed to shaping the future of healthcare worldwide.",
  },
];

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
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#003535] via-[#004d4d] to-[#003535] overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#be923c] rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#be923c] rounded-full filter blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#be923c] rounded-full filter blur-4xl opacity-5" />
          </div>
          
          <div className="container mx-auto max-w-screen-xl px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Briefcase className="w-4 h-4 text-[#be923c]" />
              <span className="text-white/90 text-sm">Join Our Team</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Build Your Career<br />with Gravionne
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Be part of a team delivering world-class healthcare products and advanced medical solutions for individuals and institutions worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings">
                <Button size="lg" className="bg-[#be923c] text-[#003535] hover:bg-[#d4a84b] hover:text-[#003535] font-semibold px-8">
                  View Openings
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Gravionne - Enhanced */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[#be923c] text-sm font-semibold uppercase tracking-wider">Who We Are</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] mt-2 mb-6">
                About Gravionne
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed">
                Gravionne is a premium healthcare enterprise dedicated to bridging the gap between global innovation and local care. 
                We curate and deliver a sophisticated portfolio of medical devices, dietary supplements, and digital health solutions, 
                sourced from the world's leading centers of excellence. By supporting both individual wellness and institutional infrastructure, 
                we ensure that the highest standards of healthcare are accessible on a global scale.
              </p>
            </div>
          </div>
        </section>

        {/* Our Culture & Values - Redesigned */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-12">
              <span className="text-[#be923c] text-sm font-semibold uppercase tracking-wider">What Drives Us</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] mt-2 mb-4">
                Our Culture & Values
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-6" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Built on a foundation of uncompromising quality and reliability, Gravionne operates at the intersection of professionalism and progress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-[#003535]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#003535] transition-colors duration-300">
                      <value.icon className="w-7 h-7 text-[#003535] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg text-[#003535] mb-2">{value.title}</h3>
                    <p className="text-gray-500 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our environment is defined by accountability and a shared drive for excellence. 
                We empower our people to contribute meaningfully to the global health landscape, 
                fostering a culture where expertise is cultivated and dedication creates a measurable impact.
              </p>
            </div>
          </div>
        </section>

        {/* Join the Mission - Enhanced */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[#be923c] text-sm font-semibold uppercase tracking-wider">Your Opportunity</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] mt-2 mb-6">
                Join the Mission
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-8" />
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Gravionne, we seek driven individuals who are committed to delivering long-term value in a high-performance setting. 
                Whether you are an emerging talent or an established professional, you will find a collaborative team focused on precision, 
                integrity, and the future of global wellness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-2xl font-bold text-[#003535]">Global Reach</span>
                  <p className="text-gray-500 text-sm">Impact healthcare worldwide</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-2xl font-bold text-[#003535]">Innovation</span>
                  <p className="text-gray-500 text-sm">Cutting-edge solutions</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-2xl font-bold text-[#003535]">Growth</span>
                  <p className="text-gray-500 text-sm">Career development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings - Enhanced */}
        <section id="openings" className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="text-center mb-12">
              <span className="text-[#be923c] text-sm font-semibold uppercase tracking-wider">Opportunities</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#003535] mt-2 mb-4">
                Current Openings
              </h2>
              <div className="w-20 h-1 bg-[#be923c] mx-auto mb-6" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our available positions and find your place in our mission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobListings.map((job) => (
                <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 border border-[#be923c]/10 hover:border-[#be923c]/30 flex flex-col overflow-hidden">
                  {/* Accent bar */}
                  <div className="h-1 bg-gradient-to-r from-[#003535] to-[#be923c] w-full" />
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-[#003535] mb-3">
                        {job.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Briefcase className="w-4 h-4 text-[#be923c] mr-2" />
                          <span className="font-medium text-gray-700 mr-2">Department:</span>
                          {job.department}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-[#be923c] mr-2" />
                          <span className="font-medium text-gray-700 mr-2">Location:</span>
                          {job.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-[#be923c] mr-2" />
                          <span className="font-medium text-gray-700 mr-2">Type:</span>
                          {job.jobType}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-[#be923c] mr-2" />
                          <span className="font-medium text-gray-700 mr-2">Deadline:</span>
                          <span className="text-[#be923c] font-medium">{job.deadline}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {job.description}
                      </p>
                    </div>
                    <Link href={job.detailPage}>
                      <Button
                        className="w-full bg-[#003535] text-white hover:bg-[#004d4d] transition-colors duration-300 group"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {jobListings.length === 0 && (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-lg text-gray-500">
                  No current openings available. Please check back later.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action - Enhanced */}
        <section className="py-20 bg-[#003535] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#be923c] rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#be923c] rounded-full filter blur-3xl" />
          </div>
          
          <div className="container mx-auto max-w-screen-xl px-4 text-center relative z-10">
            <Mail className="w-12 h-12 text-[#be923c] mx-auto mb-4" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join a team that's shaping the future of global healthcare. 
              Submit your CV to our talent pool and we'll reach out when opportunities match your profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@gravionne.com?subject=Job%20Inquiry">
                <Button size="lg" className="bg-[#be923c] text-[#003535] hover:bg-[#d4a84b] font-semibold px-8">
                  Submit Your CV
                </Button>
              </a>
              <a href="#openings" className="inline-flex items-center justify-center px-6 py-2.5 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors">
                Browse Openings
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer wrapper enforces global colors from brand guidance */}
      <div className="bg-[#003535] text-[#be923c]"></div>
    </div>
  );
}