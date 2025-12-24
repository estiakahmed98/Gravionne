"use client";

import { useSession } from "next-auth/react";

export default function UserPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Prevents rendering protected content until the auth state is known
    return <p className="p-6">Loading...</p>;
  }

  if (!session?.user) {
    // Guards the page so unauthenticated visitors see a clear message instead of the profile
    return <p className="p-6">Not authenticated</p>;
  }

  return (
    <div className="min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4 text-[#003B3A]">
          User Profile
        </h1>

        <div className="space-y-2 text-sm">
          <p>
            <span className="font-medium">Name:</span>{" "}
            {session.user.name || "N/A"}
          </p>
          <p>
            <span className="font-medium">Email:</span> {session.user.email}
          </p>
        </div>
      </div>
    </div>
  );
}
