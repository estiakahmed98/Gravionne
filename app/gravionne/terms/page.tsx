import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Terms of Engagement";
const pageDescription =
  "Review Gravionne’s Terms of Engagement outlining responsibilities, service scope, and partnership expectations for personalized wellness.";
const pagePath = "/gravionne/terms";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="terms-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Terms of Engagement", path: pagePath },
        ])}
        id="terms-breadcrumb-jsonld"
      />

      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6">
              Terms of Engagement
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              These Terms of Engagement govern your relationship with Gravionne
              and outline the mutual commitments that enable us to provide
              exceptional personalized wellness services.
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              Last updated: January 15, 2025
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Our Service Philosophy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Gravionne is committed to providing personalized wellness
                    services that combine scientific rigor with luxury
                    experiences. Our services are designed to optimize your
                    health and wellbeing through evidence-based interventions
                    tailored to your unique biological and lifestyle profile.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By engaging with our services, you enter into a
                    collaborative partnership focused on achieving your wellness
                    goals through mutual respect, transparency, and shared
                    commitment to your health journey.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Service Scope & Limitations
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">
                        Wellness Optimization Services
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our services focus on wellness optimization, preventive
                        care, and lifestyle enhancement. We provide personalized
                        recommendations based on scientific analysis of your
                        health data.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Not Medical Treatment
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Gravionne services are not intended to diagnose, treat,
                        cure, or prevent any disease. Our recommendations
                        complement but do not replace professional medical care.
                        Always consult with qualified healthcare providers for
                        medical concerns.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Individual Results</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Wellness outcomes are highly individual and depend on
                        many factors including genetics, lifestyle, adherence to
                        recommendations, and environmental factors. We cannot
                        guarantee specific results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Your Responsibilities
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Accurate Information</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Provide complete, accurate, and up-to-date information
                        about your health, lifestyle, and wellness goals. The
                        effectiveness of our services depends on the quality of
                        information you provide.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Professional Medical Care
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Maintain appropriate relationships with qualified
                        healthcare providers and inform them of your
                        participation in Gravionne wellness programs.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Responsible Use</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Use our services responsibly and in accordance with our
                        recommendations. Do not share your account access or use
                        our services for any unlawful purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Service Availability & Modifications
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Service Evolution</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We continuously improve our services based on scientific
                        advances and user feedback. We may modify, update, or
                        discontinue features with appropriate notice to users.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Technical Requirements
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our services require compatible devices, internet
                        connectivity, and may involve third-party integrations.
                        We are not responsible for technical issues beyond our
                        control.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Intellectual Property
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Gravionne Property</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All content, algorithms, methodologies, and technologies
                        provided through our services remain the intellectual
                        property of Gravionne and our partners.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Your Data Rights</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        You retain ownership of your personal health data. By
                        using our services, you grant us permission to analyze
                        and use this data to provide personalized
                        recommendations and improve our services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Gravionne provides wellness optimization services based on
                    current scientific understanding and available data. While
                    we strive for excellence, we cannot guarantee specific
                    outcomes or be held liable for:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Individual variations in response to wellness
                      interventions
                    </li>
                    <li>
                      • Outcomes resulting from failure to follow
                      recommendations
                    </li>
                    <li>
                      • Technical issues or service interruptions beyond our
                      control
                    </li>
                    <li>
                      • Decisions made without consulting appropriate healthcare
                      providers
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Termination & Account Management
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Account Termination</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Either party may terminate the service relationship with
                        appropriate notice. Upon termination, you retain the
                        right to your personal data as outlined in our Privacy
                        Policy.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Data Retention</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Following account termination, we will retain your data
                        only as necessary for legal compliance or legitimate
                        business purposes, in accordance with our Privacy
                        Policy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Contact & Dispute Resolution
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about these terms or to address any concerns,
                    please contact our team:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>Email: legal@Gravionne.com</p>
                    <p>Phone: +1 (555) 123-4571</p>
                    <p>
                      We are committed to resolving any disputes through good
                      faith dialogue and mutual understanding.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
