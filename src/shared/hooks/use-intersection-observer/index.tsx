import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (isLoading: boolean) => {
  const observerRef = useRef<HTMLDivElement>();
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        setIntersecting(true);
      }
    });
    observer.observe(observerRef.current);
    return () => observer?.disconnect();
  }, [isLoading]);

  return { observerRef, isIntersecting };
};
