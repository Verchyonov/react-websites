import { useEffect, useState } from "react";

export const useCompensateScrollbar = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      return window.innerWidth - document.documentElement.clientWidth;
    };

    setScrollbarWidth(calculateScrollbarWidth());

    const adjustBodyPadding = () => {
      document.body.style.paddingRight =
        document.body.style.overflow === "hidden" ? `${scrollbarWidth}px` : "";
    };

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "style") {
          adjustBodyPadding();
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
    });

    adjustBodyPadding();

    return () => {
      observer.disconnect();
    };
  }, [scrollbarWidth]);

  return null;
};
