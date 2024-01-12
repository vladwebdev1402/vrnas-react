import React, { FC, useEffect, useRef, useState } from "react";
import { useObserve } from "@/hooks/useObserve";
interface Props {
  num: number;
  children?: React.ReactNode;
  prev?: React.ReactNode;
  className?: string;
  component?: "div" | "h1";
}
const AnimationNumber: FC<Props> = ({
  num,
  children,
  prev,
  component = "div",
  className = "",
}) => {
  const ref = useRef(null);
  const isVisible = useObserve(ref, 1);

  const [thisNum, setThisNum] = useState(0);

  useEffect(() => {
    if (isVisible)
      thisNum !== num && setTimeout(setThisNum, 1000 / num, thisNum + 1);
  }, [isVisible, thisNum]);

  if (component == "h1")
    return (
      <h1 className={className} ref={ref}>
        {prev}
        {thisNum}
        {children}
      </h1>
    );

  return (
    <div className={className} ref={ref}>
      {prev}
      {thisNum}
      {children}
    </div>
  );
};

export default AnimationNumber;
