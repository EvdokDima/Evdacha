import React from "react";
import useViewportFocus from "../hooks/useViewportFocus";

export default function FocusBlock({
  as: Tag = "div",
  className = "",
  children,
  minOpacity,
  style,
  ...rest
}) {
  const [ref, focusStyle] = useViewportFocus(minOpacity);

  return (
    <Tag
      ref={ref}
      className={[className, "focus-block"].filter(Boolean).join(" ")}
      style={{ ...focusStyle, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
