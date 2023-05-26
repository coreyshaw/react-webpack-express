import { useState } from 'react';

const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    try {
      return JSON.parse(item);
    } catch {
      return false;
    }
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    if (typeof valueToStore !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    }
  };

  const removeValue = () => {
    window.localStorage.removeItem(key);
  };

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
