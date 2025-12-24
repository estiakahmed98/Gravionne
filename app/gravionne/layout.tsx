// app/gravionne/layout.tsx

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ReactNode } from "react";

export default function GravionneLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
