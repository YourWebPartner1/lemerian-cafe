import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Custom hook for an auto-advancing slide index.
 * @param totalSlides - The total number of slides.
 * @param duration - The time in milliseconds for each slide.
 */
// 👇 FIXED: Added the '=>' before the opening '{'
export const useAutoSlide = (totalSlides: number, duration: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // This function starts (or restarts) the timer
  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, duration);
  }, [totalSlides, duration]);

  // This effect runs when the component mounts or the timer needs to restart
  useEffect(() => {
    if (totalSlides > 1) {
      startTimer();
    }
    // This is a cleanup function to stop the timer when the component unmounts
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [totalSlides, startTimer]);

  // This function lets the user manually change the slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset the timer so the user gets the full "duration" on the new slide
    if (totalSlides > 1) {
      startTimer();
    }
  };

  // We return the current index and the function to change it
  return { currentIndex, goToSlide };
};