import { useEffect, useRef, useState } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function useViewportFocus(minOpacity = 0.22) {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    opacity: 1,
    transform: "scale(1)",
    filter: "blur(0px)",
  });

  useEffect(() => {
    let frameId = null;

    const update = () => {
      const element = ref.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const viewportCenter = viewportHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - elementCenter);
      const reach = (viewportHeight + rect.height) * 0.52;

      let focus = clamp(1 - distance / reach, 0, 1);
      const atPageBottom =
        window.scrollY + viewportHeight >=
        document.documentElement.scrollHeight - 2;

      // Ensure the last viewport block becomes crisp when user reaches page end.
      if (atPageBottom && rect.bottom <= viewportHeight) {
        focus = 1;
      }
      const opacity = minOpacity + (1 - minOpacity) * focus;
      const scale = 0.94 + 0.06 * focus;
      const blur = (1 - focus) * 1.6;

      setStyle({
        opacity: Number(opacity.toFixed(3)),
        transform: `scale(${scale.toFixed(3)})`,
        filter: `blur(${blur.toFixed(2)}px)`,
      });
    };

    const onScroll = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [minOpacity]);

  return [ref, style];
}
