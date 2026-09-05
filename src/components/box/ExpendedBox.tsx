"use client";

import { useEffect, useRef, useState } from "react";

const COLLAPSED_HEIGHT = 100;

export default function ExpendedBox({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const [fullHeight, setFullHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      const scrollHeight = el.scrollHeight;
      setFullHeight(scrollHeight);
      setOverflowing(scrollHeight > COLLAPSED_HEIGHT);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  const height = !overflowing
    ? "auto"
    : expanded
      ? `${fullHeight + 20}px`
      : `${COLLAPSED_HEIGHT}px`;

  return (
    <div className="flex flex-col gap-2">
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
      >
        <div ref={contentRef}>{children}</div>
      </div>

      {overflowing && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="self-start text-xs mt-1 text-color-theme underline underline-offset-4"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
