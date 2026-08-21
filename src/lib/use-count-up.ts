"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function useCountUp(target: number, isInView: boolean, duration: number = 900) {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) {
        startTime = now;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out: 1 - (1 - p)^3
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, target, duration, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return target;
  }

  return count;
}
