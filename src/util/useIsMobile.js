import { useState, useEffect } from "react";
import useWindowSize from "./useWindowSize";

export default function useIsMobile(mediaQuery) {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMobile(width < mediaQuery);
  }, [width, mediaQuery]); // Empty array ensures that effect is only run on mount

  return isMobile;
}
