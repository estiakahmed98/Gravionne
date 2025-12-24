"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const disallowedCallbackPaths = new Set([
  "/auth/signin",
  "/auth/signup",
  "/api/auth/signin",
]);

const resolveDestination = (candidate: string | null, fallback: string) => {
  if (!candidate) return fallback;

  let normalized = candidate;

  try {
    const origin =
      typeof window !== "undefined" ? window.location.origin : undefined;
    const parsed = origin ? new URL(candidate, origin) : new URL(candidate);

    if (!origin || parsed.origin === origin) {
      normalized = `${parsed.pathname}${parsed.search}`;
    }
  } catch {
    // Ignore parsing errors – fall back to the original candidate
  }

  if (!normalized.startsWith("/") || normalized.startsWith("//")) {
    return fallback;
  }

  const pathname = normalized.split("?")[0];
  if (
    disallowedCallbackPaths.has(pathname) ||
    pathname.startsWith("/api/auth/")
  ) {
    return fallback;
  }

  return normalized;
};

/* ---------------- Login Page ---------------- */
export default function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "authenticated") return;

    const defaultDestination =
      session?.user?.role === "ADMIN" ? "/admin" : "/user";
    const destination = resolveDestination(callbackUrl, defaultDestination);

    router.replace(destination);
  }, [callbackUrl, router, session?.user?.role, status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
      callbackUrl,
    });

    if (result?.error || result?.url?.includes("/api/auth/signin")) {
      setError(result?.error ?? "Unable to sign in. Please try again.");
      setLoading(false);
      return;
    }

    // Success - wait for session to update then redirect
    if (result?.ok) {
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Get fresh session
      const response = await fetch("/api/auth/session");
      const newSession = await response.json();

      // Redirect to dashboard based on role
      const destination =
        newSession?.user?.role === "ADMIN" ? "/admin" : "/user";
      router.push(destination);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F2]">
      <main className="flex-1 flex items-center justify-center mt-30 mb-30 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-semibold text-center mb-2 text-[#003B3A]">
            Welcome Back
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Sign in to continue to Gravionne
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C49A3A]"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C49A3A]"
            />

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <button
              disabled={loading}
              className="w-full py-3 rounded-lg font-medium transition
                bg-[#003B3A] text-[#F3F4F2]
                hover:bg-[#003B3A]/90
                disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-[#C49A3A] font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
