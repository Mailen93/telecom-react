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

  const saveValueLocalStorage = (newValue) => {
    try {
      const newStoragedValue = [...storagedValue, newValue];
      setStoragedValue(newStoragedValue);
      window.localStorage.setItem(key, JSON.stringify(newStoragedValue));
    } catch (error) {
      console.error(`Error saving ${key} in LS: ${error}`);
    }
  };

  return [saveValueLocalStorage, storagedValue];
};
