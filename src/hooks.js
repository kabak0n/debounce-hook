import { useState, useEffect } from "react";

export const useDebounce = (input, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);
    return () => clearTimeout(timer);
  }, [input, delay]);

  return debouncedValue;
};
