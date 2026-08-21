"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { reveal, defaultTransition } from "@/lib/motion";

export interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  transition,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  const customTransition = {
    ...defaultTransition,
    ...transition,
    delay: delay + ((transition && "delay" in transition && typeof transition.delay === "number") ? transition.delay : 0),
  };

  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={customTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
