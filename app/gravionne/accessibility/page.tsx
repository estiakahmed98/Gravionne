import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Accessibility Commitment";
const pageDescription =
  "Gravionne ensures inclusive, WCAG 2.1 AA-aligned wellness experiences across our digital and physical services.";
const pagePath = "/gravionne/accessibility";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="accessibility-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Accessibility", path: pagePath },
        ])}
        id="accessibility-breadcrumb-jsonld"
      />

      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6">
              Accessibility Commitment
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Gravionne is committed to ensuring that our wellness services and
              digital experiences are accessible to all individuals, regardless
              of their abilities or disabilities. We believe that everyone
              deserves equal access to premium wellness solutions.
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              Last updated: January 15, 2025
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Our Accessibility Philosophy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe that accessibility is not just about
                    compliance—it's about creating inclusive experiences that
                    empower everyone to achieve their wellness goals. Our
                    commitment extends beyond technical requirements to
                    encompass the full spectrum of human diversity and needs.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Accessibility is integrated into our design and development
                    processes from the ground up, ensuring that our services are
                    usable, understandable, and valuable for people with diverse
                    abilities and preferences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Web Content Accessibility Guidelines
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">
                        WCAG 2.1 AA Compliance
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our website and digital platforms are designed to meet
                        or exceed WCAG 2.1 Level AA standards, ensuring
                        compatibility with assistive technologies and providing
                        clear navigation for all users.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Perceivable Content</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All content is presented in ways that users can
                        perceive, including appropriate color contrast,
                        alternative text for images, and captions for multimedia
                        content.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Operable Interface</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our interface components and navigation are operable
                        through various input methods, including keyboard
                        navigation, voice commands, and assistive devices.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Understandable Information
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Information and user interface operation are
                        understandable, with clear language, consistent
                        navigation, and helpful error messages and instructions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Assistive Technology Support
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Screen Readers</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Full compatibility with popular screen readers including
                        JAWS, NVDA, and VoiceOver, with proper semantic markup
                        and ARIA labels throughout our platform.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Keyboard Navigation</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Complete keyboard accessibility with logical tab order,
                        visible focus indicators, and keyboard shortcuts for
                        efficient navigation without requiring a mouse.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Voice Control</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Support for voice control software and speech
                        recognition tools, enabling hands-free interaction with
                        our platform and services.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Magnification Tools</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Compatibility with screen magnification software and
                        browser zoom features up to 200% without loss of
                        functionality or content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Design & User Experience
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Color & Contrast</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All text and interactive elements meet or exceed WCAG
                        contrast requirements (4.5:1 for normal text, 3:1 for
                        large text), and information is never conveyed through
                        color alone.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Typography & Readability
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Clear, readable fonts with appropriate sizing, line
                        spacing, and paragraph structure. Users can adjust text
                        size and spacing according to their preferences.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Interactive Elements</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All buttons, links, and form controls have clear labels,
                        adequate size for easy interaction, and provide
                        appropriate feedback for user actions.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Error Prevention & Recovery
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Clear error messages, input validation, and confirmation
                        dialogs help prevent mistakes and provide clear paths
                        for error recovery.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Content Accessibility
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Alternative Formats</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Important documents and content are available in
                        multiple formats including HTML, PDF with accessibility
                        features, and plain text versions upon request.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Multimedia Accessibility
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All videos include captions and transcripts, audio
                        content has transcripts available, and complex images
                        include detailed alternative text descriptions.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Plain Language</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We strive to use clear, concise language and provide
                        definitions for technical terms to ensure our content is
                        understandable by users with diverse cognitive abilities
                        and backgrounds.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Service Accessibility
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">
                        Communication Options
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Multiple communication channels including email, phone,
                        video calls with sign language interpretation available,
                        and text-based chat support to accommodate different
                        communication preferences.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Flexible Service Delivery
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our wellness services can be adapted to accommodate
                        various needs, including extended session times,
                        alternative communication methods, and customized
                        delivery formats.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Accommodation Requests
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We welcome requests for reasonable accommodations and
                        work with each individual to ensure they can fully
                        access and benefit from our wellness services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Continuous Improvement
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Regular Testing</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We conduct regular accessibility audits using both
                        automated tools and manual testing with assistive
                        technologies to identify and address potential barriers.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">User Feedback</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We actively seek feedback from users with disabilities
                        to understand their experiences and identify areas for
                        improvement in our accessibility efforts.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Staff Training</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All team members receive training on accessibility best
                        practices, disability awareness, and inclusive service
                        delivery to ensure consistent, respectful interactions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Feedback & Support
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We welcome your feedback on the accessibility of our
                    services and are committed to addressing any barriers you
                    may encounter. Please contact our accessibility team:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>Email: accessibility@Gravionne.com</p>
                    <p>Phone: +1 (555) 123-4573</p>
                    <p>TTY: +1 (555) 123-4574</p>
                    <p>Response time: Within 2 business days</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    If you encounter any accessibility barriers, please let us
                    know so we can work together to find a solution and improve
                    our services for everyone.
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
