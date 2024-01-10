import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import st from "./Numbers.module.scss";
import { useObserve } from "@/hooks/useObserve";
interface Props {
  num: number;
  children?: React.ReactNode;
  className?: string;
}
const AnimationNumber: FC<Props> = ({ num, children, className = "" }) => {
  const ref = useRef(null);
  const isVisible = useObserve(ref, 1);

  const [thisNum, setThisNum] = useState(0);

  useEffect(() => {
    if (isVisible)
      thisNum !== num && setTimeout(setThisNum, 1000 / num, thisNum + 1);
  }, [isVisible, thisNum]);

  return (
    <h1 className={className} ref={ref}>
      {thisNum}
      {children}
    </h1>
  );
};

export default AnimationNumber;
