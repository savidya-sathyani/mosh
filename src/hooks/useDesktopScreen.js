import { useState, useEffect } from "react";

const useDesktopScreen = () => {
  const [isDesktop, setIsDesktop] = useState();
  const checkScreenSize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return [isDesktop];
};

export default useDesktopScreen;
