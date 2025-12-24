import AllBlogs from "@/components/admin/blog/AllBlogs";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">

      {/* Page Header */}
      <section className="relative pt-16 pb-10">
        <div className="container mx-auto max-w-screen-xl px-4">
          
          {/* Top Row */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              ← Back to Home
            </Link>

            <span
              className="text-xs tracking-[0.3em] text-muted-foreground uppercase"
              style={{ letterSpacing: "0.3em" }}
            >
              Journal
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Gravionne Journal
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Editorial insights on health, wellness, beauty, and the philosophy
            of elevated living.
          </p>

          {/* Divider */}
          <div className="mt-6 h-px w-24 bg-[#be923c]/60" />
        </div>
      </section>

      {/* Blog List */}
      <main className="flex-1">
        <div className="space-y-6">
          <AllBlogs />
        </div>
      </main>
    </div>
  );
}
