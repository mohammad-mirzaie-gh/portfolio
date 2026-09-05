"use client";

import { motion, type Transition } from "motion/react";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  delay?: number;
  trigger?: "mount" | "view";
  once?: boolean;
  amount?: number;
}

function getOffset(direction: RevealDirection, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
}

export default function Reveal({
  children,
  className,
  direction = "up",
  distance = 32,
  duration = 0.6,
  delay = 0,
  trigger = "view",
  once = true,
  amount = 0.3,
}: RevealProps) {
  const offset = getOffset(direction, distance);
  const initial = { opacity: 0, ...offset };
  const target = { opacity: 1, x: 0, y: 0 };
  const transition: Transition = { duration, delay, ease: "easeOut" };

  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={target}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={target}
      viewport={{ once, amount }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
