import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="relative isolate flex flex-1 items-center justify-center overflow-hidden bg-[#f8f7f3] px-6 py-24 text-[#003535] sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="absolute size-[340px] rounded-full border border-[#be923c]/15 sm:size-[560px]" />
          <div className="absolute size-[500px] rounded-full border border-[#be923c]/10 sm:size-[780px]" />
          <div className="absolute size-[660px] rounded-full border border-[#be923c]/10 sm:size-[1000px]" />
        </div>

        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#77602e]">
            A moment off the path
          </p>
          <p className="font-heading text-[120px] leading-none tracking-[-0.06em] sm:text-[180px]">
            4<span className="text-[#be923c]">0</span>4
          </p>
          <div aria-hidden="true" className="mx-auto my-8 h-px w-16 bg-[#be923c]" />

          <h1 className="font-heading text-3xl tracking-tight sm:text-5xl">
            This page couldn&rsquo;t be found.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#526565] sm:text-base">
            The page you&rsquo;re looking for may have moved or no longer exists.
            Let&rsquo;s guide you back to a world of health and wellbeing.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 bg-[#003535] px-6 text-[#e0bd78] hover:bg-[#004747]"
            >
              <Link href="/">
                <ArrowLeft aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-[#003535]/25 bg-transparent px-6 text-[#003535] hover:bg-[#003535]/5 hover:text-[#003535]"
            >
              <Link href="/gravionne/curations">
                Explore Our Curations
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <p className="mt-10 text-sm text-[#526565]">
            Need a little guidance?{" "}
            <Link
              href="/gravionne/contact"
              className="rounded-sm font-medium text-[#003535] underline decoration-[#be923c] underline-offset-4 hover:decoration-[#003535] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003535]"
            >
              Get in touch
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
