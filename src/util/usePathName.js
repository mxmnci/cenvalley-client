import { useState, useEffect } from "react";

export default function usePathName() {
  const [pathName, setPathName] = useState(undefined);
  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return pathName;
}
