import { useRef, useCallback, useEffect } from 'react';

interface SwipeInput {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
}: SwipeInput) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  }, []);

  const handleSwipe = useCallback(() => {
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
  }, [threshold, onSwipeLeft, onSwipeRight]);

  return { handleTouchStart, handleTouchEnd };
};
