import {useEffect, RefObject} from "react";

export const useAnimateHeight = (ref: RefObject<any>, isOpen: boolean) => {
    useEffect(() => {
        if (ref.current && isOpen) {
          ref.current.style.height = `${ref.current.scrollHeight + 
            ref.current.style.paddingTop + 
            ref.current.style.paddingBottom}px`;
        } else if (ref.current) {
          ref.current.style.height = "0px";
        }
      }, [isOpen, ref]);
}  