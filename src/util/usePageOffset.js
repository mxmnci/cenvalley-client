import { useState, useEffect } from "react";

export default function usePageOffset() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [pageOffset, setPageOffset] = useState({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleScroll() {
      // Set window width/height to state
      setPageOffset({
        x: window.pageXOffset,
        y: window.pageYOffset,
      });
    }

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Call handler right away so state gets updated with initial window size
    handleScroll();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array ensures that effect is only run on mount

  return pageOffset;
}
