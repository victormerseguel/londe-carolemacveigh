import { forwardRef, useEffect } from "react";

const Observer = forwardRef(({ state, setState }, ref) => {
  let options = {
    threshold: [],
  };
  for (let i = 0; i <= 1.0; i += 0.01) {
    options.threshold.push(i);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setState(+Math.floor(entry.intersectionRatio * 100));
    }, options);

    observer.observe(ref.current);
  }, [state]);
});

export default Observer;
