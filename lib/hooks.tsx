"use client";

import { useInView } from "react-intersection-observer";
import { useActiveContext } from "@/context/active_section";
import { useEffect, useState } from "react";

export const useSectionInView = (section: string, threshold = 0) => {
  const { setActiveSection, timeOfLastClick } = useActiveContext();
  const { ref, inView } = useInView({ threshold: threshold });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, timeOfLastClick, section]);

  return { ref };
};
