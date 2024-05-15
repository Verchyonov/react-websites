import { MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const useMoveOnScrollHook = (offset: number) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, offset);

  return { ref, y };
};
