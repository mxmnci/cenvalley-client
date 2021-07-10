import React, { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CounterText = ({ title, from = 0, to }) => {
  const nodeRef = useRef();
  const [ref, inView] = useInView();
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (inView && !animationDone) {
      const controls = animate(from, to, {
        duration: 5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = `${value.toFixed(0)} +`;
        },
        onComplete() {
          controls.stop();
          setAnimationDone(true);
        },
      });
    }
  }, [from, to, inView, animationDone]);

  return (
    <div className="flex flex-col items-center z-10" ref={ref}>
      <h4 className="text-white text-3xl font-bold font-mono mb-2">{title}</h4>
      <span ref={nodeRef} className="text-yellow text-5xl font-extrabold">
        0 +
      </span>
    </div>
  );
};

export default CounterText;
