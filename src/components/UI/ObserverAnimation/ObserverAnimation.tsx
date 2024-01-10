import { useObserve } from "@/hooks/useObserve";
import { IAnimation } from "@/types/IAnimation";
import React, { FC, useRef } from "react";

enum classesAnimations {
  "up-to-down" = "visibleToDown",
  "down-to-up" = "visibleToUp",
  "left-to-right" = "visibleToRight",
  "right-to-left" = "visibleToLeft",
  "big-to-small" = "visibleScale",
  "none" = "visibleScale",
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  typeAnimation: IAnimation;
  threshold?: number;
  component?: "section" | "div";
}

const ObserverAnimation: FC<Props> = ({
  typeAnimation,
  className = "",
  component = "div",
  children,
  threshold = 0.4,
  ...props
}) => {
  const ref = useRef(null);
  const isVisible = useObserve(ref, threshold);

  if (component == "div")
    return (
      <div
        className={`${className} ${
          isVisible ? classesAnimations[typeAnimation] : "notVisible"
        }`}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );

  return (
    <section
      className={`${className} ${
        isVisible ? classesAnimations[typeAnimation] : "notVisible"
      }`}
      {...props}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default ObserverAnimation;
