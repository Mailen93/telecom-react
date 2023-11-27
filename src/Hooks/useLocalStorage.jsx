import { useState } from "react";

export const useLocaleStorage = (key, initialValue = []) => {
  const getSavedValue = () => {
    try {
      const savedValue = window.localStorage.getItem(key);
      return savedValue ? JSON.parse(savedValue) : initialValue;
    } catch (error) {
      console.error(`Error al obtener ${key} del LocalStorage: ${error}`);
      return initialValue;
    }
  };
  const [savedValue, setSavedValue] = useState(getSavedValue());

  const saveValue = (newValue) => {
    try {
      const newSavedValue = [...savedValue, newValue];
      setSavedValue(newSavedValue);
      window.localStorage.setItem(key, JSON.stringify(newSavedValue));
    } catch (error) {
      console.error(`Error al guardar ${key} en LocalStorage: ${error}`);
    }

    return [saveValue, savedValue];
  };
};
