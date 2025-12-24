import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[#be923c]/30 bg-gradient-to-b from-[#003535] to-[#003535]/90 text-[#be923c]">
      <div className="container mx-auto max-w-screen-xl px-4 py-12">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Curations</h3>
              <div className="space-y-2">
                <Link
                  href="/gravionne/curations"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  All Curations
                </Link>
                <Link
                  href="/gravionne/curations/sanovia"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Sanovia
                </Link>
                <Link
                  href="/gravionne/curations/mediora"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Mediora
                </Link>
                <Link
                  href="/gravionne/curations/aurevia"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Aurevia
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Company</h3>
              <div className="space-y-2">
                <Link
                  href="/gravionne/leadership"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Leadership
                </Link>
                <Link
                  href="/gravionne/impact"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Impact
                </Link>
                <Link
                  href="/gravionne/journals"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Journal
                </Link>
                <Link
                  href="/gravionne/contact"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Engagement</h3>
              <div className="space-y-2">
                <Link
                  href="/gravionne/partnership"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/gravionne/contact"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Policies</h3>
              <div className="space-y-2">
                <Link
                  href="/gravionne/privacy"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Privacy & Dignity
                </Link>
                <Link
                  href="/gravionne/terms"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Terms of Engagement
                </Link>
                <Link
                  href="/gravionne/compliance"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Compliance & Governance
                </Link>
                <Link
                  href="/gravionne/accessibility"
                  className="block text-sm text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  Accessibility
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <Link
                  href="#"
                  className="text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.928-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.405c-.35 0-.647-.122-.892-.367-.245-.245-.367-.542-.367-.892s.122-.647.367-.892c.245-.245.542-.367.892-.367s.647.122.892.367c.245.245.367.542.367.892s-.122.647-.367.892c-.245.245-.542.367-.892.367z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-[#be923c] hover:text-[#be923c] transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-[#be923c]/80 leading-relaxed">
                In formation — building our global flagship in health, wellness
                & health-tech. Welcoming visionary partners worldwide.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p>A subsidiary of Aan-Nahl Software</p>
            <img src="/aan logo.png" alt="Aan-Nahl Software" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#be923c]/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <Image
                src="/logos/Gravionne_logo.jpeg"
                alt="Gravionne Logo"
                width={45}
                height={45}
                priority
                className="rounded-full ring-1 ring-[#be923c] transition-all duration-200 hover:scale-110"
              />
              <p className="text-sm text-[#be923c]/80 text-center md:text-left">
                © 2025 Gravionne. Elevating Health, Wellness & Humanity. All
                rights reserved.
              </p>
            </div>
            <p className="text-sm text-[#be923c]/80">
              Registered in Bangladesh — Serving globally.
            </p>
          </div>
          <p className="text-xs text-[#be923c]/70 mt-4 text-center md:text-left">
            Crafted with precision. Guided by science. Inspired by humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}
