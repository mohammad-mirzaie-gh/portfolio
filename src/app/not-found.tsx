import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center">
      <p className="text-sm font-semibold text-color-theme">404</p>
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="max-w-md text-white-p">
        The page you&apos;re looking for might have been moved or removed.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-color-theme px-6 py-2 font-bold text-bg-theme transition-transform hover:scale-[1.02]"
      >
        Back to home
      </Link>
    </main>
  );
}
