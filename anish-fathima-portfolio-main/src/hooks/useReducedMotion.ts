import { useEffect, useState } from 'react';

export const useReducedMotion = () => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mediaQuery]);

  return prefersReducedMotion;
};
