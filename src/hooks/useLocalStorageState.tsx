import { useState, useEffect, useMemo } from "react";

// Define a custom hook that syncs state with local storage
export const useLocalStorageState = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  // Get the initial value from local storage, if available
  const storedValue =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;

  const initial = useMemo(() => {
    try {
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {}
  }, [initialValue, storedValue]);

  // Create the state using useState
  const [state, setState] = useState<T>(initial);

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

// Path: src/lib/hooks/use-sessionstorage-state.hook.ts
export const useSessionStorageState = <T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const storedValue =
    typeof window !== "undefined" ? sessionStorage.getItem(key) : null;
  const initial = useMemo(() => {
    try {
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {}
  }, [initialValue, storedValue]);
  const [state, setState] = useState<T>(initial);
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};