import { useEffect } from 'react';

// Custom hook to detect clicks outside a referenced element
const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>, // Reference to the element to detect outside clicks
  handler: (event: MouseEvent | TouchEvent) => void // Callback function to handle the outside click event
) => {
  useEffect(() => {
    // Listener function to be called when there's a click or touch event
    const listener = (event: MouseEvent | TouchEvent) => {
      // If the ref is not assigned or the click is inside the referenced element, do nothing
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      // Call the handler if the click happens outside the referenced element
      handler(event);
    };

    // Add event listeners for mouse down and touch start events
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Cleanup function to remove the event listeners when the component unmounts or the hook dependencies change
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Re-run the effect only if the ref or handler changes
};

export default useOnClickOutside;
