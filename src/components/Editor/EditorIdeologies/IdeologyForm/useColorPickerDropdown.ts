import React, { useEffect, useState } from "react";

const useColorPickerDropdown = (
  toggleRef: React.RefObject<HTMLElement>,
  menuRef: React.RefObject<HTMLElement>
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const targetNode = e.target as Node;
      if (toggleRef.current?.contains(targetNode)) {
        setIsVisible((p) => !p);
      } else if (
        // hide on click outside hex color input
        !menuRef.current?.contains(targetNode) ||
        targetNode.nodeName.toLowerCase() !== "input"
      ) {
        setIsVisible(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return isVisible;
};

export default useColorPickerDropdown;
