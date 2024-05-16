import React, { useEffect, useState } from "react";

export const useCompensateScrollbar = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      console.log("Calculated scrollbar width:", scrollbarWidth);
      return scrollbarWidth;
    };

    const adjustBodyPadding = () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        console.log(`Set body padding-right to ${scrollbarWidth}px`);
      } else {
        document.body.style.paddingRight = "";
        console.log("Reset body padding-right");
      }
    };

    setScrollbarWidth(calculateScrollbarWidth());

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          adjustBodyPadding();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    adjustBodyPadding();

    return () => {
      observer.disconnect();
    };
  }, [scrollbarWidth]);

  return null;
};
