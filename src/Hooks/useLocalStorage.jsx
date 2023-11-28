import { useState } from "react";

export const useLocaleStorage = (key, initialValue = []) => {
  const getStoragedValue = () => {
    try {
      const localStoragedValue = window.localStorage.getItem(key);
      return localStoragedValue ? JSON.parse(localStoragedValue) : initialValue;
    } catch (error) {
      console.error(`Error with the ${key} in LS: ${error}`);
      return initialValue;
    }
  };

  const [storagedValue, setStoragedValue] = useState(getStoragedValue());

  return [storagedValue, setStoragedValue];
};
