"use client";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({ children, baseVelocity = 100, ...props }) {
  const baseX = useMotionValue(0);
  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [children]);

  const x = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    const moveBy = baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
    x.set(`${wrap(-100 / repetitions, 0, baseX.get())}%`);
  });

  return (
    <div ref={containerRef} className="w-full overflow-hidden whitespace-nowrap" {...props}>
      <motion.div className="inline-block" style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null}>
            {children}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({ defaultVelocity = 5, numRows = 2, children, className, ...props }) {
  return (
    <div className={cn("relative w-full text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]", className)} {...props}>
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxText key={i} baseVelocity={defaultVelocity}>
          {children}
        </ParallaxText>
      ))}
    </div>
  );
}
