import type { Metadata } from "next";
import Link from "next/link";

import Backdrop from "@/components/backdrop/Backdrop";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center relative">
      <Backdrop />
      <p className="font-mono text-sm font-semibold text-color-theme">
        {"// 404"}
      </p>
      <h1 className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
        This page doesn&apos;t exist
      </h1>
      <p className="max-w-md text-white-p">
        The page you&apos;re looking for might have been moved or removed.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-xl bg-color-theme px-6 py-2.5 font-bold text-bg-theme transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(45,212,199,0.55)]"
      >
        Back to home
      </Link>
    </main>
  );
}
