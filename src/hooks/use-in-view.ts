import { useEffect, useRef, useState, useMemo } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  // Memoize options to prevent unnecessary observer recreation
  const memoizedOptions = useMemo(() => ({
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15,
    ...options
  }), [options?.rootMargin, options?.threshold, options?.root]);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      memoizedOptions
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [memoizedOptions]);

  return { ref, inView } as const;
}
