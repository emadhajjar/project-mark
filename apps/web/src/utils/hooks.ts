import {createContext, use, useEffect, useMemo, useRef, useState} from 'react';
import {v4} from 'uuid';

export function createPropertiesContext<Properties>() {
  const Context = createContext<Properties | undefined>(undefined);
  function useProperties(): Properties {
    const value = use(Context);
    if (value == undefined) {
      throw new Error('Context is undefined');
    }

    return value;
  }

  return {
    Provider: Context.Provider,
    useProps: useProperties,
  };
}

export function useDarkMode() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return prefersDarkMode;
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof globalThis === 'undefined') {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = globalThis.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: ((value_: T) => T) | T) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = typeof value === 'function' ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof globalThis !== 'undefined') {
        globalThis.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}

export function useMediaQuery(mediaQuery: string) {
  const { isMatch: initialValue, mediaQueryList } = useMemo(() => {
    if (!globalThis.matchMedia) {
      return {
        isMatch: false,
        mediaQueryList: undefined,
      }
    }

    const mediaQueryList = globalThis.matchMedia(mediaQuery);
    const isMatch = mediaQueryList.matches;

    return {
      isMatch,
      mediaQueryList,
    };
  }, [mediaQuery]);

  const [isMatch, setIsMatch] = useState(initialValue);

  useEffect(() => {
    if (mediaQueryList == undefined) return;

    const handler = (event: MediaQueryListEvent) => {
      setIsMatch(event.matches);
    };

    mediaQueryList.addEventListener('change', handler);

    return () => mediaQueryList.removeEventListener('change', handler);
  }, [mediaQueryList]);

  return isMatch;
}

export function useUuid() {
  const reference = useRef(v4());

  return reference.current;
}
