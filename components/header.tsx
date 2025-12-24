"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const getFirstName = (fullName: string | null | undefined) => {
  if (!fullName) return "User";
  return fullName.split(" ")[0];
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCurationsOpen, setMobileCurationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const isSection = (section: string) => pathname.startsWith(section);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setMobileCurationsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuOpen &&
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
      if (
        mobileOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('[aria-label="Toggle menu"]')
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen, userMenuOpen]);

  // Close user menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setUserMenuOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/40 ${
        isScrolled ? "bg-[#003535]/95 backdrop-blur-sm" : "bg-[#003535]"
      } text-[#be923c] transition-all duration-300`}
    >
      <div className="relative h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* LEFT - Brand */}
          <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 md:space-x-3"
              aria-label="Gravionne Home"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <Image
                  src="/logos/G GOLD.svg"
                  alt="Gravionne Logo"
                  fill
                  sizes="(max-width: 768px) 40px, 48px"
                  priority
                  className="rounded-full ring-1 ring-[#be923c] object-cover transition-all duration-200 hover:scale-110"
                />
              </div>
            </Link>
          </div>

          {/* RIGHT - All navigation items and CTA in one div */}
          <div className="flex items-center justify-end w-full gap-2 sm:gap-3 lg:gap-4">
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
              <Link
                href="/gravionne/philosophy"
                aria-current={
                  isActive("/gravionne/philosophy") ? "page" : undefined
                }
                className={`text-sm font-medium transition-colors whitespace-nowrap px-2.5 py-1.5 rounded-md ${
                  isActive("/gravionne/philosophy")
                    ? "text-white bg-[#be923c]/20"
                    : "text-[#be923c] hover:text-white hover:bg-[#be923c]/10"
                }`}
              >
                Philosophy
              </Link>

              {/* Desktop dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 text-sm font-medium px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    isSection("/gravionne/curations")
                      ? "text-white bg-[#be923c]/20"
                      : "text-[#be923c] hover:text-white hover:bg-[#be923c]/10"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={isSection("/curations")}
                >
                  Curations
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-[#003535] border border-[#be923c]/30 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200 origin-top-right z-50">
                  <Link
                    href="/gravionne/curations/sanovia"
                    aria-current={
                      isActive("/gravionne/curations/sanovia")
                        ? "page"
                        : undefined
                    }
                    className={`block px-4 py-3 text-sm transition-colors first:rounded-t-md ${
                      isActive("/gravionne/curations/sanovia")
                        ? "bg-[#be923c] text-[#003535] font-medium"
                        : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                    }`}
                  >
                    Sanovia
                  </Link>
                  <Link
                    href="/gravionne/curations/mediora"
                    aria-current={
                      isActive("/gravionne/curations/mediora")
                        ? "page"
                        : undefined
                    }
                    className={`block px-4 py-3 text-sm transition-colors ${
                      isActive("/gravionne/curations/mediora")
                        ? "bg-[#be923c] text-[#003535] font-medium"
                        : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                    }`}
                  >
                    Mediora
                  </Link>
                  <Link
                    href="/gravionne/curations/aurevia"
                    aria-current={
                      isActive("/gravionne/curations/aurevia")
                        ? "page"
                        : undefined
                    }
                    className={`block px-4 py-3 text-sm transition-colors last:rounded-b-md ${
                      isActive("/gravionne/curations/aurevia")
                        ? "bg-[#be923c] text-[#003535] font-medium"
                        : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                    }`}
                  >
                    Aurevia
                  </Link>
                </div>
              </div>

              <Link
                href="/gravionne/journals"
                aria-current={
                  isActive("/gravionne/journals") ? "page" : undefined
                }
                className={`text-sm font-medium transition-colors whitespace-nowrap px-2.5 py-1.5 rounded-md ${
                  isActive("/gravionne/journals")
                    ? "text-white bg-[#be923c]/20"
                    : "text-[#be923c] hover:text-white hover:bg-[#be923c]/10"
                }`}
              >
                Journals
              </Link>
              <Link
                href="/gravionne/leadership"
                aria-current={
                  isActive("/gravionne/leadership") ? "page" : undefined
                }
                className={`text-sm font-medium transition-colors whitespace-nowrap px-2.5 py-1.5 rounded-md ${
                  isActive("/gravionne/leadership")
                    ? "text-white bg-[#be923c]/20"
                    : "text-[#be923c] hover:text-white hover:bg-[#be923c]/10"
                }`}
              >
                Leadership
              </Link>
              <Link
                href="/gravionne/impact"
                aria-current={
                  isActive("/gravionne/impact") ? "page" : undefined
                }
                className={`text-sm font-medium transition-colors whitespace-nowrap px-2.5 py-1.5 rounded-md ${
                  isActive("/gravionne/impact")
                    ? "text-white bg-[#be923c]/20"
                    : "text-[#be923c] hover:text-white hover:bg-[#be923c]/10"
                }`}
              >
                Impact
              </Link>
              <Link
                href="/gravionne/contact"
                aria-current={
                  isActive("/gravionne/contact") ? "page" : undefined
                }
                className={`text-sm font-medium transition-colors whitespace-nowrap px-2.5 py-1.5 rounded-md ${
                  isActive("/gravionne/contact")
                    ? "text-white bg-[#be923c]/20"
                    : "text-[#be923c] hover:text-white hover:bg-[#be923c]/10"
                }`}
              >
                Contact
              </Link>

              <Link
                href="/gravionne/blog"
                aria-current={
                  isActive("/gravionne/blog") ? "page" : undefined
                }
                className={`text-sm font-medium transition-colors whitespace-nowrap px-2.5 py-1.5 rounded-md ${
                  isActive("/gravionne/blog")
                    ? "text-white bg-[#be923c]/20"
                    : "text-[#be923c] hover:text-white hover:bg-[#be923c]/10"
                }`}
              >
                Blog
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="border-[#be923c] text-[#be923c] hover:bg-transparent hover:text-[#be923c] bg-transparent whitespace-nowrap text-xs xl:text-sm px-3"
                aria-label="Your Gateway to Elegance"
              >
                Your Gateway to Elegance
              </Button>
              {isClient && status === "authenticated" && session?.user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#be923c] text-[#be923c] hover:bg-[#be923c]/10 transition-colors text-sm min-w-[100px] xl:min-w-[120px]"
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    aria-haspopup="true"
                    aria-expanded={userMenuOpen}
                    aria-label="User menu"
                  >
                    <User className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate max-w-[80px] xl:max-w-[100px]">
                      {getFirstName(session.user.name)}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 transition-transform ${
                        userMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-[#003535] border border-[#be923c]/30 rounded-lg shadow-lg overflow-hidden z-50">
                      <div className="px-4 py-3 border-b border-[#be923c]/20">
                        <p className="text-xs text-[#be923c] opacity-75">
                          Welcome
                        </p>
                        <p className="text-sm font-medium text-white truncate">
                          {getFirstName(session.user.name)}
                        </p>
                        <p className="text-xs text-[#be923c] truncate">
                          {session.user.role}
                        </p>
                      </div>
                      <button
                        className="w-full px-4 py-3 text-left text-sm text-[#be923c] hover:bg-[#be923c]/20 transition-colors flex items-center gap-2"
                        onClick={() => {
                          setUserMenuOpen(false);
                          router.push(
                            session.user.role === "ADMIN" ? "/admin" : "/user"
                          );
                        }}
                      >
                        <User className="h-4 w-4" />
                        Dashboard
                      </button>
                      <button
                        className="w-full px-4 py-3 text-left text-sm text-[#be923c] hover:bg-[#be923c]/20 transition-colors border-t border-[#be923c]/20"
                        onClick={() => {
                          setUserMenuOpen(false);
                          signOut({ callbackUrl: "/" });
                        }}
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#be923c] text-[#be923c] hover:bg-[#be923c] hover:text-[#003535] bg-transparent"
                  onClick={() => router.push("/auth/signin")}
                  aria-label="Sign in"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[#be923c] hover:text-white hover:bg-[#be923c]/20 transition flex-shrink-0 ml-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel - Full screen overlay */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            mobileOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-[#003535] shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Mobile header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#be923c]/30">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/logos/G GOLD.svg"
                    alt="Gravionne Logo"
                    fill
                    sizes="40px"
                    className="rounded-full ring-1 ring-[#be923c] object-cover"
                  />
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md text-[#be923c] hover:text-white hover:bg-[#be923c]/20 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-4 py-6 space-y-2">
                <Link
                  href="/gravionne/philosophy"
                  aria-current={
                    isActive("/gravionne/philosophy") ? "page" : undefined
                  }
                  className={`block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive("/gravionne/philosophy")
                      ? "bg-[#be923c] text-[#003535]"
                      : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Philosophy
                </Link>

                {/* Mobile Curations (accordion) */}
                <div className="w-full rounded-lg overflow-hidden">
                  <button
                    className={`w-full flex items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                      isSection("/gravionne/curations")
                        ? "bg-[#be923c] text-[#003535]"
                        : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                    }`}
                    aria-expanded={mobileCurationsOpen}
                    onClick={() => setMobileCurationsOpen((o) => !o)}
                  >
                    <span>Curations</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        mobileCurationsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-200 overflow-hidden ${
                      mobileCurationsOpen ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <div className="pt-1 space-y-1">
                      <Link
                        href="/gravionne/curations/sanovia"
                        aria-current={
                          isActive("/gravionne/curations/sanovia")
                            ? "page"
                            : undefined
                        }
                        className={`block rounded-lg px-4 py-3 text-base transition-colors ml-2 ${
                          isActive("/gravionne/curations/sanovia")
                            ? "bg-[#be923c] text-[#003535]"
                            : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        Sanovia
                      </Link>
                      <Link
                        href="/gravionne/curations/mediora"
                        aria-current={
                          isActive("/gravionne/curations/mediora")
                            ? "page"
                            : undefined
                        }
                        className={`block rounded-lg px-4 py-3 text-base transition-colors ml-2 ${
                          isActive("/gravionne/curations/mediora")
                            ? "bg-[#be923c] text-[#003535]"
                            : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        Mediora
                      </Link>
                      <Link
                        href="/gravionne/curations/aurevia"
                        aria-current={
                          isActive("/gravionne/curations/aurevia")
                            ? "page"
                            : undefined
                        }
                        className={`block rounded-lg px-4 py-3 text-base transition-colors ml-2 ${
                          isActive("/gravionne/curations/aurevia")
                            ? "bg-[#be923c] text-[#003535]"
                            : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        Aurevia
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/gravionne/journals"
                  aria-current={
                    isActive("/gravionne/journals") ? "page" : undefined
                  }
                  className={`block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive("/gravionne/journals")
                      ? "bg-[#be923c] text-[#003535]"
                      : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Journals
                </Link>
                <Link
                  href="/gravionne/leadership"
                  aria-current={
                    isActive("/gravionne/leadership") ? "page" : undefined
                  }
                  className={`block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive("/gravionne/leadership")
                      ? "bg-[#be923c] text-[#003535]"
                      : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Leadership
                </Link>
                <Link
                  href="/gravionne/impact"
                  aria-current={
                    isActive("/gravionne/impact") ? "page" : undefined
                  }
                  className={`block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive("/gravionne/impact")
                      ? "bg-[#be923c] text-[#003535]"
                      : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Impact
                </Link>
                <Link
                  href="/gravionne/contact"
                  aria-current={
                    isActive("/gravionne/contact") ? "page" : undefined
                  }
                  className={`block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive("/gravionne/contact")
                      ? "bg-[#be923c] text-[#003535]"
                      : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/gravionne/blog"
                  aria-current={
                    isActive("/gravionne/blog") ? "page" : undefined
                  }
                  className={`block w-full rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive("/gravionne/blog")
                      ? "bg-[#be923c] text-[#003535]"
                      : "text-[#be923c] hover:bg-[#be923c]/20 hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Blog
                </Link>

                {/* Mobile CTA */}
                <div className="pt-6 mt-6 border-t border-[#be923c]/20">
                  {isClient && status === "authenticated" && session?.user ? (
                    <>
                      <div className="px-4 py-3 bg-[#003535]/50 rounded-lg mb-3">
                        <p className="text-xs text-[#be923c] opacity-75">
                          Logged in as
                        </p>
                        <p className="text-sm font-medium text-white truncate">
                          {getFirstName(session.user.name)}
                        </p>
                        <p className="text-xs text-[#be923c] truncate">
                          {session.user.role}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-[#be923c] text-[#be923c] hover:bg-[#be923c] hover:text-[#003535] bg-transparent text-base py-3 mb-2"
                        onClick={() => {
                          setMobileOpen(false);
                          router.push(
                            session.user.role === "ADMIN" ? "/admin" : "/user"
                          );
                        }}
                      >
                        <User className="h-5 w-5 mr-2" />
                        Dashboard
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-red-600/50 text-red-400 hover:bg-red-600/20 hover:border-red-600 hover:text-red-300 bg-transparent text-base py-3"
                        onClick={() => {
                          setMobileOpen(false);
                          signOut({ callbackUrl: "/" });
                        }}
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        className="w-full border-[#be923c] text-[#be923c] hover:bg-[#be923c] hover:text-[#003535] bg-transparent text-base py-3 mb-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        Your Gateway to Elegance
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-[#be923c] text-[#be923c] hover:bg-[#be923c] hover:text-[#003535] bg-transparent text-base py-3"
                        onClick={() => {
                          setMobileOpen(false);
                          router.push("/auth/signin");
                        }}
                      >
                        <User className="h-5 w-5 mr-2" />
                        Sign In
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}