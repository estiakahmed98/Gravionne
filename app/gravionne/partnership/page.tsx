import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Partner With Gravionne";
const pageDescription =
  "Explore partnership opportunities with Gravionne to advance scientific excellence and luxury wellness experiences worldwide.";
const pagePath = "/gravionne/partnership";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function PartnershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="partnership-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Partnership", path: pagePath },
        ])}
        id="partnership-breadcrumb-jsonld"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Partner With Gravionne
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
              Join us in revolutionizing the wellness industry. We seek
              visionary partners who share our commitment to scientific
              excellence and luxury experiences.
            </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explore various ways to collaborate with Gravionne and create
                meaningful impact in the wellness industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Luxury Brand Partnerships
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Collaborate with premium hospitality, fashion, and lifestyle
                    brands to create integrated wellness experiences that
                    elevate your brand and delight your customers.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 text-left">
                    <li>• Co-branded wellness experiences</li>
                    <li>• Exclusive product integrations</li>
                    <li>• Premium customer programs</li>
                    <li>• Luxury retail partnerships</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Medical & Research Institutions
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Partner with leading medical centers, research institutions,
                    and healthcare organizations to advance wellness science and
                    clinical applications.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 text-left">
                    <li>• Clinical research collaborations</li>
                    <li>• Data sharing agreements</li>
                    <li>• Joint research publications</li>
                    <li>• Medical advisory partnerships</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Technology Partners
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Integrate with cutting-edge health technology platforms, AI
                    companies, and biotechnology firms to enhance our
                    personalization capabilities.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 text-left">
                    <li>• API integrations</li>
                    <li>• Joint technology development</li>
                    <li>• Data analytics partnerships</li>
                    <li>• Platform collaborations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Distribution Partners
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Expand our reach through strategic distribution partnerships
                    with luxury retailers, wellness centers, and premium service
                    providers.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 text-left">
                    <li>• Authorized retailer programs</li>
                    <li>• Wellness center partnerships</li>
                    <li>• Concierge service integration</li>
                    <li>• Geographic expansion</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Investment Opportunities
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Join our mission as an investor and help us scale our
                    revolutionary approach to personalized luxury wellness
                    across global markets.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 text-left">
                    <li>• Strategic investment rounds</li>
                    <li>• Growth capital partnerships</li>
                    <li>• Market expansion funding</li>
                    <li>• Technology development investment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Media & Content Partners
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Collaborate with premium media brands, content creators, and
                    thought leaders to share wellness insights and expand our
                    educational impact.
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-2 text-left">
                    <li>• Content collaboration</li>
                    <li>• Thought leadership programs</li>
                    <li>• Educational partnerships</li>
                    <li>• Media sponsorships</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership Form */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Partnership Inquiry
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Tell us about your organization and how you envision partnering
                with Gravionne to create exceptional wellness experiences.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-sm font-medium mb-2"
                      >
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium mb-2"
                      >
                        Title/Position *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Enter your title"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company/Organization *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-sm font-medium mb-2"
                      >
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      >
                        <option value="">Select industry</option>
                        <option value="luxury-hospitality">
                          Luxury Hospitality
                        </option>
                        <option value="healthcare">Healthcare & Medical</option>
                        <option value="technology">Technology</option>
                        <option value="luxury-retail">Luxury Retail</option>
                        <option value="wellness">Wellness & Fitness</option>
                        <option value="investment">Investment & Finance</option>
                        <option value="media">Media & Publishing</option>
                        <option value="research">Research & Academia</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="partnershipType"
                      className="block text-sm font-medium mb-2"
                    >
                      Partnership Type *
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select partnership type</option>
                      <option value="luxury-brand">
                        Luxury Brand Partnership
                      </option>
                      <option value="medical-research">
                        Medical & Research Institution
                      </option>
                      <option value="technology">Technology Partnership</option>
                      <option value="distribution">
                        Distribution Partnership
                      </option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="media-content">
                        Media & Content Partnership
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-medium mb-2"
                    >
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select company size</option>
                      <option value="startup">Startup (1-10 employees)</option>
                      <option value="small">Small (11-50 employees)</option>
                      <option value="medium">Medium (51-200 employees)</option>
                      <option value="large">Large (201-1000 employees)</option>
                      <option value="enterprise">
                        Enterprise (1000+ employees)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium mb-2"
                    >
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="https://www.yourcompany.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="proposal"
                      className="block text-sm font-medium mb-2"
                    >
                      Partnership Proposal *
                    </label>
                    <textarea
                      id="proposal"
                      name="proposal"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder="Describe your partnership proposal, including your vision for collaboration, potential synergies, and expected outcomes..."
                    ></textarea>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium mb-2"
                    >
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">
                        Immediate (within 1 month)
                      </option>
                      <option value="short-term">
                        Short-term (1-3 months)
                      </option>
                      <option value="medium-term">
                        Medium-term (3-6 months)
                      </option>
                      <option value="long-term">Long-term (6+ months)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="nda"
                      name="nda"
                      className="mt-1 w-4 h-4 text-accent bg-background border-muted rounded focus:ring-accent focus:ring-2"
                    />
                    <label
                      htmlFor="nda"
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      I understand that this partnership inquiry may involve
                      confidential information and agree to maintain
                      confidentiality during discussions.
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 w-4 h-4 text-accent bg-background border-muted rounded focus:ring-accent focus:ring-2"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      I agree to the{" "}
                      <a
                        href="/privacy"
                        className="text-accent hover:text-accent/80 underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and consent to Gravionne contacting me about this
                      partnership inquiry. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Submit Partnership Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Why Partner With Gravionne
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover the unique advantages of partnering with a leader in
                luxury wellness innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Scientific Excellence
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Partner with a team of world-class scientists and
                    researchers advancing the frontiers of wellness science.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Luxury Market Access
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Gain access to high-net-worth individuals and luxury market
                    segments through our exclusive network.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Innovation Leadership
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Be at the forefront of wellness innovation with cutting-edge
                    AI and biotechnology solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Brand Elevation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Enhance your brand's prestige through association with
                    luxury wellness and scientific excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Global Reach
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Expand your market presence through our growing global
                    network of partners and clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Mutual Growth
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Create synergistic partnerships that drive growth and
                    innovation for all parties involved.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
