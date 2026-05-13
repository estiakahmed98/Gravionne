import Link from "next/link";
import Image from "next/image";
import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

              <div className="flex flex-wrap gap-4 mb-4">
                <Link
                  href="https://www.tiktok.com/@gravionne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#be923c] hover:text-[#be923c]/80 transition-colors"
                >
                  <span className="sr-only">TikTok</span>
                  <FaTiktok className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.instagram.com/gravionneofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#be923c] hover:text-[#be923c]/80 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.facebook.com/gravionne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#be923c] hover:text-[#be923c]/80 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="h-5 w-5" />
                </Link>

                <Link
                  href="https://x.com/gravionne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#be923c] hover:text-[#be923c]/80 transition-colors"
                >
                  <span className="sr-only">X</span>
                  <FaXTwitter className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.youtube.com/@Gravionne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#be923c] hover:text-[#be923c]/80 transition-colors"
                >
                  <span className="sr-only">YouTube</span>
                  <FaYoutube className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.pinterest.com/gravionne/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#be923c] hover:text-[#be923c]/80 transition-colors"
                >
                  <span className="sr-only">Pinterest</span>
                  <FaPinterestP className="h-5 w-5" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/gravionne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#be923c] hover:text-[#be923c]/80 transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedinIn className="h-5 w-5" />
                </Link>
              </div>

              <p className="text-sm text-[#be923c]/80 leading-relaxed">
                In formation — building our global flagship in health, wellness
                & health-tech. Welcoming visionary partners worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#be923c]/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <Image
                src="/logos/G GOLD.svg"
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
