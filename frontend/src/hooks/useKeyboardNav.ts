import { useEffect } from 'react';

interface KeyboardNavOptions {
  onPrevious?: () => void;
  onNext?: () => void;
  onEscape?: () => void;
  isEnabled?: boolean;
}

/**
 * Handles keyboard navigation (ArrowLeft, ArrowRight, Escape)
 * with robust cleanup and active element checks.
 */
export function useKeyboardNav({
  onPrevious,
  onNext,
  onEscape,
  isEnabled = true
}: KeyboardNavOptions): void {
  useEffect(() => {
    if (!isEnabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Avoid intercepting keystrokes if the user is typing in an input/textarea
      const target = event.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          onPrevious?.();
          break;
        case 'ArrowRight':
          event.preventDefault();
          onNext?.();
          break;
        case 'Escape':
          event.preventDefault();
          onEscape?.();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onPrevious, onNext, onEscape, isEnabled]);
}
