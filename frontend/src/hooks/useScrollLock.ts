import { useEffect, useRef } from 'react';

/**
 * Cleanly disables body scrolling when a modal/overlay is open,
 * preserving scroll position and restoring styles safely on unmount.
 */
export function useScrollLock(isLocked: boolean): void {
  const originalStyle = useRef<string>('');

  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (isLocked) {
      originalStyle.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle.current;
    }

    return () => {
      document.body.style.overflow = originalStyle.current;
    };
  }, [isLocked]);
}
