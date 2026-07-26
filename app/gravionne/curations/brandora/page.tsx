//app/gravionne/curations/brandora/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Brand system                                                        */
/*  Teal  #003535  (dark)   ·   Gold  #be923c  (accent)                 */
/*  Fonts: Playfair Display (headings, .font-heading) + Poppins (body)  */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */
const heroChips = [
  "Premium Quality",
  "Industry Expertise",
  "Reliable Production",
  "On-Time Delivery",
];

const pharmaImages = Array.from(
  { length: 8 },
  (_, i) => `/Pharmaceuticals Images/${i + 1}.jpg`,
);
const garmentImages = Array.from(
  { length: 8 },
  (_, i) => `/Garments Images/${i + 1}.jpg`,
);

const solutions = [
  {
    kicker: "Packaging & Printing Solutions",
    title: "Healthcare & Pharmaceuticals",
    description:
      "High-quality, compliant, and reliable packaging and printing solutions that safeguard product integrity, meet regulatory requirements, and protect your brand's reputation at every batch.",
    images: pharmaImages,
    items: [
      "Folding Cartons",
      "Mono Cartons",
      "Corrugated Cartons",
      "Security & Tamper Labels",
      "Blister Packs",
      "Sachets & Pouches",
      "Bottle Labels",
      "Prescription Pads",
      "Leaflets & Inserts",
      "Regulatory & Compliance Printing",
    ],
  },
  {
    kicker: "Premium Accessories for Fashion & Apparel",
    title: "Garment Accessories",
    description:
      "A wide range of premium garment accessories that enhance brand identity, ensure durability, and add finished value to every piece — from first tag to final zipper pull.",
    images: garmentImages,
    items: [
      "Woven Labels",
      "Buttons & Zippers",
      "Printed Labels",
      "Elastic Tapes",
      "Hang Tags",
      "Drawcords",
      "Care Labels",
      "Poly Bags",
      "Size Labels",
      "Barcode Labels",
      "Heat Transfer Labels",
      "And More",
    ],
  },
];

const whyChoose = [
  {
    title: "Industry Expertise",
    description: "Specialized in healthcare and garment industry requirements.",
  },
  {
    title: "Premium Quality",
    description: "Strict quality control at every stage of production.",
  },
  {
    title: "Custom Solutions",
    description: "Tailored to match your brand and specifications.",
  },
  {
    title: "Flexible Quantities",
    description: "From small runs to large-scale production, consistently.",
  },
  {
    title: "On-Time Delivery",
    description: "Committed to timelines with efficient planning.",
  },
  {
    title: "Dedicated Support",
    description: "Responsive support from concept to delivery.",
  },
];

const clients = {
  healthcare: [
    { name: "ANC Medical Device BD Ltd.", logo: "/logos/anc.jpeg" },
    { name: "Ethical Drugs Ltd.", logo: "/logos/edltd.jpeg" },
    { name: "Everest Pharmaceuticals Ltd.", logo: "/logos/everest.jpeg" },
  ],
  garment: [{ name: "Comodo", logo: "/logos/comodo.jpeg" }],
};

/* ------------------------------------------------------------------ */
/*  Inline icons                                                        */
/* ------------------------------------------------------------------ */
function CheckIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
    </svg>
  );
}
function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function BoxIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <path d="M3 7h13l4 4v6H3z" />
      <circle cx="7.5" cy="19" r="1.6" />
      <circle cx="16.5" cy="19" r="1.6" />
    </svg>
  );
}
function GearIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" />
    </svg>
  );
}
function SupportIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 15v-3a8 8 0 0116 0v3" />
      <path d="M4 15a2 2 0 002 2h1v-5H6a2 2 0 00-2 2zM20 15a2 2 0 01-2 2h-1v-5h1a2 2 0 012 2z" />
    </svg>
  );
}
function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" />
    </svg>
  );
}
function PillBottleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 2h6v4H9z" />
      <path d="M7 6h10v14a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
      <path d="M12 11v6M9 14h6" />
    </svg>
  );
}
function HangTagIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3a2.5 2.5 0 012.5 2.5H9.5A2.5 2.5 0 0112 3z" />
      <path d="M12 5.5L3 11l3 2 1-.7V21h10v-8.7l1 .7 3-2z" />
    </svg>
  );
}
function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function CheckCircleIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Decorative gold hexagon lattice (hero, top-right corner)            */
/* ------------------------------------------------------------------ */
function HexPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hex"
          width="56"
          height="48"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1)"
        >
          <path
            d="M14 0 L42 0 L56 24 L42 48 L14 48 L0 24 Z"
            stroke="#be923c"
            strokeWidth="1"
            fill="none"
          />
        </pattern>
        <radialGradient id="hexFade" cx="80%" cy="20%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="hexMask">
          <rect width="400" height="400" fill="url(#hexFade)" />
        </mask>
      </defs>
      <rect
        width="400"
        height="400"
        fill="url(#hex)"
        mask="url(#hexMask)"
        opacity="0.45"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Scroll-reveal wrapper                                               */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading (matching site convention)                          */
/* ------------------------------------------------------------------ */
function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center justify-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-[#be923c]">
      <span className="h-px w-10 bg-[#be923c]/60" />
      {children}
      <span className="h-px w-10 bg-[#be923c]/60" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Lightbox                                                            */
/* ------------------------------------------------------------------ */
function Lightbox({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#003535]/95 p-6 backdrop-blur-sm"
    >
      <div className="relative max-h-[86vh] w-full max-w-[900px]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[#be923c]/40 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
          <Image
            src={src}
            alt="Gravionne product"
            fill
            className="object-cover"
            sizes="900px"
          />
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#be923c] text-[#003535] shadow-lg transition-transform hover:scale-105"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Product gallery for a solution                                      */
/* ------------------------------------------------------------------ */
function ProductGallery({
  images,
  onOpen,
}: {
  images: string[];
  onOpen: (src: string) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
      {images.map((src, i) => (
        <button
          key={src}
          onClick={() => onOpen(src)}
          className={`group relative overflow-hidden rounded-lg border border-[#be923c]/20 bg-muted shadow-sm ${
            i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
          }`}
        >
          <Image
            src={src}
            alt="Gravionne product"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 33vw, 170px"
          />
          <span className="pointer-events-none absolute inset-0 bg-[#003535]/0 transition-colors duration-300 group-hover:bg-[#003535]/20" />
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Quotation request slip (signature element)                          */
/* ------------------------------------------------------------------ */
function QuoteSlip() {
  const [refNumber, setRefNumber] = useState("REQ-000000");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    setRefNumber(`REQ-${year}-${rand}`);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setSubmitError("");

    try {
      const data = new FormData(formRef.current);
      const response = await fetch(formRef.current.action, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error(result.message || "Unable to submit your request.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="relative rounded-lg bg-white text-[#1f2937] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-start justify-between border-b border-dashed border-[#be923c]/30 px-8 pb-5 pt-7">
        <div>
          <div className="font-heading text-2xl font-semibold text-[#003535]">
            Quotation Request
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#be923c]">
            Gravionne · Print, Pack &amp; Accessories
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#be923c]">
            Reference
          </div>
          <div className="mt-0.5 text-sm font-medium text-[#003535]">
            {refNumber}
          </div>
        </div>
      </div>

      {!submitted ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action="https://formsubmit.co/ajax/gravionne01@gmail.com"
          method="POST"
          className="px-8 pb-8 pt-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Quote Request — Gravionne Website"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="Reference No." value={refNumber} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Full Name"
              name="Full Name"
              placeholder="Your name"
              required
            />
            <Field
              label="Company Name"
              name="Company Name"
              placeholder="Company / Brand"
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Item / Product Required"
              name="Item Required"
              placeholder="e.g. Folding cartons, woven labels"
              required
            />
            <Field
              label="Quantity"
              name="Quantity"
              placeholder="e.g. 50,000 pcs"
              required
            />
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-[#003535]/70">
              Specification
            </label>
            <textarea
              name="Specification"
              required
              placeholder="Size, material, print colors, finishing, compliance requirements, etc."
              rows={3}
              className="w-full resize-y border-b border-[#be923c]/30 bg-transparent py-2 text-[14.5px] outline-none placeholder:text-[#9ca3af] focus:border-[#be923c]"
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
            />
            <Field
              label="Phone"
              name="Phone"
              type="tel"
              placeholder="+880 1XX XXX XXXX"
              required
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Address"
              name="Address"
              placeholder="Company address"
              required
            />
            <Field
              label="BIN"
              name="BIN"
              placeholder="Business Identification Number"
              required
            />
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-dashed border-[#be923c]/30 pt-5">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#be923c]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#be923c]" />
              Confidential Request
            </div>
            <button
              type="submit"
              disabled={sending}
              className="rounded-md bg-[#003535] px-7 py-3.5 text-sm font-medium text-[#be923c] shadow-[0_10px_24px_-10px_rgba(0,53,53,0.6)] transition-transform hover:-translate-y-px disabled:opacity-60"
            >
              {sending ? "Sending…" : "Submit Request"}
            </button>
          </div>
          {submitError && (
            <p
              role="alert"
              className="mt-3 text-[12px] leading-relaxed text-red-600"
            >
              {submitError}
            </p>
          )}
          <p className="mt-3 text-[11px] leading-relaxed text-[#6b7280]">
            By submitting, your request is sent directly to our team for review
            and quotation.
          </p>
        </form>
      ) : (
        <div className="px-8 py-10 text-center">
          <CheckCircleIcon className="mx-auto mb-4 h-10 w-10 text-[#be923c]" />
          <h3 className="font-heading text-2xl font-semibold text-[#003535]">
            Request received
          </h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#6b7280]">
            Thank you. Your quotation request has been sent to our team —
            we&apos;ll reply to your email within 1–2 business days.
          </p>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-[#003535]/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full border-b border-[#be923c]/30 bg-transparent py-2 text-[14.5px] outline-none placeholder:text-[#9ca3af] focus:border-[#be923c]"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
export default function BrandoraPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="font-sans bg-background text-foreground">
      {/* ============================ HERO ============================ */}
      <section className="relative bg-[#003535] px-6 py-24 text-white sm:px-8">
        {/* top-right gold hex lattice */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-[420px] w-[420px]">
          <HexPattern className="h-full w-full" />
        </div>
        {/* soft gold glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 82% 12%, rgba(190,146,60,0.16), transparent 45%)",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-[90vw] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5">
              <Link
                href="/gravionne/curations"
                className="text-sm text-[#be923c] transition-colors hover:text-white"
              >
                ← Back to Curations
              </Link>
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#be923c]">
              A Dedicated Partner, Not Just a Supplier
            </span>
            <h1 className="font-heading mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
              Precision in Every Detail.
              <br />
              Quality in <span className="text-[#be923c]">Every Solution.</span>
            </h1>
            <p className="mt-6 max-w-[480px] text-base leading-relaxed text-white/70">
              Gravionne provides end-to-end printing, packaging, and accessories
              solutions — built for the exacting standards of the pharmaceutical
              and garment industries, and for brands that need a partner they
              can rely on at every stage of production.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              {heroChips.map((chip) => (
                <div
                  key={chip}
                  className="flex items-center gap-2.5 rounded-md border border-[#be923c]/30 bg-white/[0.03] px-4 py-2.5 text-[12.5px] text-white/85"
                >
                  <ShieldIcon className="h-4 w-4 flex-shrink-0 text-[#be923c]" />
                  {chip}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href="#quote"
                className="rounded-md bg-[#be923c] px-6 py-3 text-sm font-medium text-[#003535] shadow-[0_8px_20px_-8px_rgba(190,146,60,0.6)] transition-transform hover:-translate-y-px"
              >
                Request a Quote
              </a>
              <a
                href="#solutions"
                className="rounded-md border border-white/35 px-6 py-3 text-sm text-white transition-colors hover:border-[#be923c] hover:bg-[#be923c]/10"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          {/* hero product visual — single transparent PNG, spills over into the next section */}
          <div className="relative z-20 h-[360px] w-full -mb-[10px] sm:h-[440px] lg:h-[520px]">
            <div className="relative h-full w-full animate-hero-float">
              <Image
                src="/hero (2).png"
                alt="Gravionne print, packaging and garment accessories"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================= PARTNER BAND ======================= */}
      <div className="relative border-y border-[#be923c]/15 bg-[#00302f] py-14 text-white">
        <Reveal className="mx-auto max-w-[80vw] px-6 sm:px-8">
          <blockquote className="font-heading mx-auto max-w-[80vw] text-center text-[22px] italic leading-relaxed text-white/90 sm:text-[28px]">
            &ldquo;We are not just a supplier — we are a{" "}
            <span className="not-italic text-[#be923c]">dedicated partner</span>{" "}
            to the pharmaceutical and garment industries, shaping printing,
            packaging, and accessories around the way you build your
            brand.&rdquo;
          </blockquote>
          <div className="mt-5 text-end md:pr-10 text-[11px] uppercase tracking-[0.2em] text-[#be923c]">
            — The Gravionne Promise
          </div>
        </Reveal>
      </div>

      {/* ========================= SOLUTIONS ========================= */}
      <section id="solutions" className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-screen-xl">
          <Reveal className="mb-16 text-center">
            <SectionKicker>Our Specialized Solutions</SectionKicker>
            <h2 className="font-heading mt-4 text-3xl font-semibold text-[#003535] sm:text-4xl">
              Two Industries. One Standard of Care.
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-relaxed text-muted-foreground">
              Every specification, tolerance, and compliance mark is treated as
              non-negotiable — because your product&apos;s packaging is the
              first promise you make to your customer.
            </p>
          </Reveal>

          <div className="flex flex-col gap-24">
            {solutions.map((sol, idx) => (
              <Reveal key={sol.title}>
                <div
                  className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                    idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* text side */}
                  <div>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#be923c]/10 text-[#be923c]">
                      {idx === 0 ? (
                        <PillBottleIcon className="h-6 w-6" />
                      ) : (
                        <HangTagIcon className="h-6 w-6" />
                      )}
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#be923c]">
                      {sol.kicker}
                    </span>
                    <h3 className="font-heading mt-1.5 text-[28px] font-semibold text-[#003535] sm:text-[32px]">
                      {sol.title}
                    </h3>
                    <p className="mt-4 max-w-[480px] text-[14.5px] leading-relaxed text-muted-foreground">
                      {sol.description}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-2.5 border-t border-[#be923c]/15 pt-6 sm:grid-cols-2">
                      {sol.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-[13.5px] text-[#374151]"
                        >
                          <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#be923c]" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <a
                      href="#quote"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#be923c] transition-colors hover:text-[#003535]"
                    >
                      Request this product
                      <ArrowIcon className="h-4 w-4" />
                    </a>
                  </div>

                  {/* gallery side */}
                  <ProductGallery images={sol.images} onOpen={setLightbox} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== WHY CHOOSE ======================== */}
      <section id="why" className="bg-card px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-screen-xl">
          <Reveal className="mb-14 text-center">
            <SectionKicker>Why Choose Gravionne</SectionKicker>
            <h2 className="font-heading mt-4 text-3xl font-semibold text-[#003535] sm:text-4xl">
              Built to Be Depended On.
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#be923c]/20 bg-[#be923c]/15 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item, i) => {
                const icons = [
                  ShieldIcon,
                  StarIcon,
                  GearIcon,
                  BoxIcon,
                  ClockIcon,
                  SupportIcon,
                ];
                const Icon = icons[i];
                return (
                  <div
                    key={item.title}
                    className="bg-card p-9 text-center transition-colors hover:bg-white"
                  >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#003535] text-[#be923c]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-heading text-xl font-semibold text-[#003535]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================== CLIENTS ========================== */}
      <section id="clients" className="px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-screen-xl">
          <Reveal className="mb-14 text-center">
            <SectionKicker>Our Satisfied Clients</SectionKicker>
            <h2 className="font-heading mt-4 text-3xl font-semibold text-[#003535] sm:text-4xl">
              Trusted Across Two Industries.
            </h2>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="rounded-xl border border-[#be923c]/20 bg-white p-8 shadow-sm">
              <span className="mb-6 inline-block rounded-full bg-[#003535] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#be923c]">
                Healthcare &amp; Pharmaceuticals Buyer
              </span>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                {clients.healthcare.map((c) => (
                  <div
                    key={c.name}
                    className="relative h-10 w-28 transition-transform duration-300 hover:scale-105"
                    title={c.name}
                  >
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      className="object-contain object-left"
                      sizes="112px"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-[#be923c]/20 bg-white p-8 shadow-sm">
              <span className="mb-6 inline-block rounded-full bg-[#003535] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#be923c]">
                Garment &amp; Apparel Buyer
              </span>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                {clients.garment.map((c) => (
                  <div
                    key={c.name}
                    className="relative h-10 w-28 transition-transform duration-300 hover:scale-105"
                    title={c.name}
                  >
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      className="object-contain object-left"
                      sizes="112px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================= REQUEST A QUOTE ===================== */}
      <section
        id="quote"
        className="relative overflow-hidden bg-[#003535] px-6 py-24 text-white sm:px-8"
      >
        <div className="pointer-events-none absolute -left-10 -top-10 h-[360px] w-[360px] rotate-180">
          <HexPattern className="h-full w-full" />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 85% 15%, rgba(190,146,60,0.12), transparent 45%)",
          }}
        />
        <div className="relative z-10 mx-auto grid max-w-screen-xl grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#be923c]">
              Start a Conversation
            </span>
            <h2 className="font-heading mt-4 text-3xl font-semibold sm:text-4xl">
              Request a Quote
            </h2>
            <p className="mt-4 max-w-[420px] text-[14.5px] leading-relaxed text-white/70">
              Tell us what you need — item, quantity, and specification — and
              our team will get back to you with a tailored quotation. No
              obligation, just a straight answer from people who understand your
              industry.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-3 text-[13.5px] text-white/80">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#be923c]" />
                We reply directly to the email you provide.
              </div>
              <div className="flex items-start gap-3 text-[13.5px] text-white/80">
                <ClockIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#be923c]" />
                Typical response time: 1–2 business days.
              </div>
              <div className="flex items-start gap-3 text-[13.5px] text-white/80">
                <ShieldIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#be923c]" />
                Your details are used only to prepare your quotation.
              </div>
            </div>
          </Reveal>

          <Reveal>
            <QuoteSlip />
          </Reveal>
        </div>
      </section>

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </main>
  );
}
