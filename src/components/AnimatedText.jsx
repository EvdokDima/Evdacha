import React, { useEffect, useRef, useState } from "react";

export default function AnimatedText({ text, as: Tag = "span", className = "" }) {
  const ref = useRef(null);
  const [currentText, setCurrentText] = useState(text);
  const [prevText, setPrevText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [delay, setDelay] = useState(0);
  const [swapId, setSwapId] = useState(0);

  useEffect(() => {
    if (text === currentText) {
      return;
    }

    let nextDelay = 0;
    const el = ref.current;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      nextDelay = Math.min(900, Math.max(0, Math.round(top * 0.12)));
    }

    setDelay(nextDelay);
    setPrevText(currentText);
    setCurrentText(text);
    setIsAnimating(true);
    setSwapId((id) => id + 1);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 680 + nextDelay);

    return () => clearTimeout(timeout);
  }, [text, currentText]);

  if (!isAnimating) {
    return (
      <Tag ref={ref} className={className}>
        {currentText}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={[className, "animated-text", "is-swapping"].filter(Boolean).join(" ")}
      style={{ "--swap-delay": `${delay}ms` }}
    >
      <span key={`old-${swapId}`} className="text-old" aria-hidden="true">
        {prevText}
      </span>
      <span key={`new-${swapId}`} className="text-new">
        {currentText}
      </span>
    </Tag>
  );
}
