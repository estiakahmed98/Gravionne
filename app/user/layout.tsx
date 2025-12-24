"use client";

import { useState } from "react";
import UserHeader from "@/components/User/UserHeader";
import UserSidebar from "@/components/User/UserSidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F3F4F2]">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <UserSidebar />
      </div>

      {/* Mobile sidebar */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed z-50 inset-y-0 left-0 md:hidden transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <UserSidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <UserHeader onMenuClick={() => setOpen(true)} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
