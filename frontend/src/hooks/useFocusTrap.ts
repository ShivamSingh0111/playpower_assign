import { useEffect, useRef } from 'react';

/**
 * Focus trap hook for accessible modal dialogs.
 * Traps Tab focus inside the active container and restores focus to previous element upon unmount.
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Save previous active element to restore later
    if (document.activeElement instanceof HTMLElement) {
      previousFocusedElement.current = document.activeElement;
    }

    const container = containerRef.current;
    if (!container) return;

    // Find all focusable elements inside modal
    const getFocusableElements = (): HTMLElement[] => {
      const selectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
      ];
      return Array.from(
        container.querySelectorAll<HTMLElement>(selectors.join(','))
      ).filter((el) => el.offsetParent !== null);
    };

    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      // Focus the first focusable element (typically Close button)
      focusableElements[0].focus();
    } else {
      container.focus();
    }

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const currentFocusables = getFocusableElements();
      if (currentFocusables.length === 0) {
        e.preventDefault();
        return;
      }

      const firstElement = currentFocusables[0];
      const lastElement = currentFocusables[currentFocusables.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleTabKey);

    return () => {
      window.removeEventListener('keydown', handleTabKey);
      // Restore focus
      if (previousFocusedElement.current && typeof previousFocusedElement.current.focus === 'function') {
        previousFocusedElement.current.focus();
      }
    };
  }, [isActive]);

  return containerRef;
}
