import { useState, useEffect, useRef } from 'react';

export const useIsMounted = (delay?: number) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const timeoutIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!delay) {
      setIsMounted(true);
      return;
    }

    timeoutIdRef.current = window.setTimeout(() => {
      setIsMounted(true);
    }, delay || 0);

    return () => {
      if (timeoutIdRef.current) {
        window.clearTimeout(timeoutIdRef.current);
      }
    };
  }, [delay]);

  return { isMounted };
};
