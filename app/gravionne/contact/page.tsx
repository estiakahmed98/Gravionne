import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Contact Gravionne";
const pageDescription =
  "Connect with Gravionne’s concierge team for personalized wellness guidance, curations, and partnership opportunities.";
const pagePath = "/gravionne/contact";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="contact-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Contact", path: pagePath },
        ])}
        id="contact-breadcrumb-jsonld"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6">
              Connect With Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8 leading-relaxed">
              Ready to embark on your personalized wellness journey? Our team of
              experts is here to guide you toward optimal health and vitality.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-3xl font-semibold mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're interested in our curations, seeking
                  personalized wellness guidance, or exploring partnership
                  opportunities, we'd love to hear from you.
                </p>

                <Card className="border-accent/20">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium mb-2"
                          >
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium mb-2"
                          >
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

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
                          placeholder="Enter your email address"
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

                      <div>
                        <label
                          htmlFor="interest"
                          className="block text-sm font-medium mb-2"
                        >
                          Area of Interest *
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        >
                          <option value="">Select your area of interest</option>
                          <option value="sanovia">
                            Sanovia - Luxury Wellness
                          </option>
                          <option value="mediora">
                            Mediora - Health Technology
                          </option>
                          <option value="aurevia">
                            Aurevia - Natural Luxury
                          </option>
                          <option value="consultation">
                            Personal Consultation
                          </option>
                          <option value="partnership">
                            Partnership Opportunities
                          </option>
                          <option value="media">Media & Press</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                          placeholder="Tell us about your wellness goals or how we can help you..."
                        ></textarea>
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
                          and consent to Gravionne contacting me about my
                          inquiry. *
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#003535] text-[#be923c] hover:bg-[#003535]/85"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="font-heading text-3xl font-semibold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our team is available to assist you with personalized wellness
                  solutions and partnership inquiries.
                </p>

                <div className="space-y-8">
                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <p className="font-heading text-lg font-semibold mb-4">
                        Gravionne – A Premium Health, Wellness & Health-Tech Company
                      </p>
                      <img src="/aan logo.png" alt="" />
                    </CardContent>
                  </Card>

                  {/* General Inquiries */}
                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg font-semibold mb-4">
                        General Inquiries
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-accent" />
                          <a
                            href="mailto:hello@Gravionne.com"
                            className="text-sm hover:underline"
                          >
                            hello@Gravionne.com
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-accent" />
                          <a
                            href="tel:+8801729273517"
                            className="text-sm hover:underline"
                          >
                            +8801729273517
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Partnership Opportunities */}
                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg font-semibold mb-4">
                        Partnership Opportunities
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-accent" />
                          <a
                            href="mailto:partnership@gmail.com"
                            className="text-sm hover:underline"
                          >
                            partnership@gmail.com
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-accent" />
                          <a
                            href="tel:+8801714002135"
                            className="text-sm hover:underline"
                          >
                            +8801714002135
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Media & Press */}
                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg font-semibold mb-4">
                        Media & Press
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-accent" />
                          <a
                            href="mailto:press@Gravionne.com"
                            className="text-sm hover:underline"
                          >
                            press@Gravionne.com
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-accent" />
                          <a
                            href="tel:+8801729273517"
                            className="text-sm hover:underline"
                          >
                            +8801729273517
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Office Hours */}
                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg font-semibold mb-4">
                        Office Hours
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent" /> Monday -
                            Friday
                          </span>
                          <span>9:00 AM - 6:00 PM PST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent" /> Saturday
                          </span>
                          <span>10:00 AM - 4:00 PM PST</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent" /> Sunday
                          </span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Socials */}
                  <Card className="border-accent/20">
                    <CardContent className="p-6">
                      <h3 className="font-heading text-lg font-semibold mb-4">
                        Follow Us
                      </h3>
                      <div className="flex items-center gap-4">
                        {/* Placeholder links until accounts are opened */}
                        <a
                          href="#"
                          aria-label="Instagram"
                          className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                        >
                          <Instagram className="w-5 h-5 text-accent" />
                        </a>
                        <a
                          href="#"
                          aria-label="Facebook"
                          className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                        >
                          <Facebook className="w-5 h-5 text-accent" />
                        </a>
                        <a
                          href="#"
                          aria-label="LinkedIn"
                          className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-accent" />
                        </a>
                        <a
                          href="#"
                          aria-label="YouTube"
                          className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                        >
                          <Youtube className="w-5 h-5 text-accent" />
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        We'll update these links once the official accounts are
                        live.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto max-w-screen-xl px-4">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Find answers to common questions about our services and
                approach.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    How does Gravionne's personalized wellness approach work?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our approach combines advanced biotechnology, AI-driven
                    analytics, and luxury service delivery to create truly
                    personalized wellness strategies. We begin with
                    comprehensive health assessments, including genetic testing
                    and biomarker analysis, then use AI to develop customized
                    interventions tailored to your unique biology and lifestyle.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    What makes Gravionne different from other wellness
                    companies?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Gravionne uniquely combines scientific rigor with luxury
                    experiences. Our team includes leading scientists, medical
                    professionals, and luxury service experts who work together
                    to deliver evidence-based wellness solutions with
                    unparalleled service quality and attention to detail.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    How do I get started with Gravionne's services?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Getting started is simple. Contact us through this form or
                    call our team directly. We'll schedule a confidential
                    consultation to understand your wellness goals and determine
                    the best approach for your unique needs. Our team will guide
                    you through every step of the process.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Do you offer partnership opportunities?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes, we actively seek partnerships with like-minded
                    organizations, luxury brands, medical institutions, and
                    technology companies. If you're interested in exploring
                    partnership opportunities, please use our dedicated
                    partnership contact or visit our partnership page for more
                    information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer wrapper enforces global colors from brand guidance */}
      <div className="bg-[#003535] text-[#be923c]"></div>
    </div>
  );
}
