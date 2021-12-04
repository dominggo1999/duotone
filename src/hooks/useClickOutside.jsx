import React, { useEffect } from 'react';
import useSizes from './useSizes';

const useClickOutside = (ref, handler, secondRef) => {
  const { isMedium } = useSizes();

  useEffect(
    () => {
      const listener = (event) => {
        const validate = secondRef ? !secondRef.current
        || secondRef.current.contains(event.target) : null;

        if (
          isMedium
          && (!ref.current
          || ref.current.contains(event.target)
          )) {
          return;
        }

        if (
          !isMedium && (!ref.current
          || ref.current.contains(event.target)
          || validate)
        ) {
          return;
        }

        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, secondRef, handler],
  );
};

export default useClickOutside;
