import { useEffect, useState } from "react";

const token = `mypolitics-first-timer`;

interface UseFirstTimer {
  value: boolean;
  setValue(value: boolean): void;
}

export const useFirstTimer = (): UseFirstTimer => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setValue(!window.localStorage.getItem(token));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !value) {
      window.localStorage.setItem(token, new Date().toISOString());
    }
  }, [value]);

  return {
    value,
    setValue,
  };
};
