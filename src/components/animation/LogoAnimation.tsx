"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Logo from "@public/logo.webp";

export default function LogoWithShadow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const shadow = shadowRef.current;
    if (!container || !shadow) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const tween = gsap.to(container, {
      y: -20,
      duration: 1.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      onUpdate() {
        const progress = this.progress();

        gsap.set(shadow, {
          scaleX: 1 - 0.4 * progress,
          scaleY: 1 - 0.6 * progress,
          opacity: 0.6 - 0.25 * progress,
        });
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      className="relative lg:w-[350px] md:w-[300px] w-[200px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full "
        style={{
          transform: "scale(1.35)",
        }}
      />
      <div ref={containerRef}>
        <Image src={Logo} alt="Mohammad Mirzaie logo" width={400} priority />
      </div>

      <div
        ref={shadowRef}
        style={{
          marginTop: 20,
          height: "20px",
          background: "#2dd4c7",
          borderRadius: "50%",
          filter: "blur(6px)",
          marginInline: "auto",
        }}
        className="w-[100px] md:w-[200px]"
      />
    </div>
  );
}
