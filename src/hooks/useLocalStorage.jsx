import { useEffect, useState } from "react";

// localStorage.getItem("user") = "{value: {}}"

export const useLocalStorage = (key, initialValue) => {
  const get = () => {
    let storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage).value;
    }
    return initialValue;
  };

  const [value, setValue] = useState(get());

  // subscribe
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value, key]);

  return [value, setValue];
};
