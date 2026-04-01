import { useEffect, useRef, useState } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const timerRef = useRef();
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        const currentWidth = window.innerWidth;
        const currentHeight = window.innerHeight;
        setSize((prev) => {
          if (prev.height === currentHeight && prev.width === currentWidth)
            return prev;
          else {
            return {
              height: currentHeight,
              width: currentWidth,
            };
          }
        });
      }, 2000);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { width: size.width, height: size.height };
};
