import { useState } from "react";

const token = `mypolitics-first-timer`;

interface UseFirstTimer {
  value: boolean;
  setValue(value: boolean): void;
}

// TODO
export const useFirstTimer = (): UseFirstTimer => {
  const [value, setValue] = useState(false);

  return {
    value: !!value,
    setValue: () => null,
  };
};
