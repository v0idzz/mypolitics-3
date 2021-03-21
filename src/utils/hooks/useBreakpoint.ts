import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

const isBreaking = (breakpoint: number) => breakpoint > window.innerWidth;

const useBreakpoint = (key: string) => {
  const { breakpoints } = useTheme();
  const breakValue = breakpoints[key];
  const [isSmallerThan, setIsSmallerThan] = useState(isBreaking(breakValue));

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerThan(isBreaking(breakValue));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallerThan;
};

export default useBreakpoint;
