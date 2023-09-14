import { useEffect, useRef, useState } from "react";

export const useObserve = (refBlock: React.RefObject<Element | HTMLDivElement>) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const observer = useRef<any>(null)

    const callback: IntersectionObserverCallback = (entries) => {
    if (!isVisible) {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
        setIsVisible(true);
        }
    }
    };

    useEffect(() => {
    observer.current = new IntersectionObserver(callback, { threshold: 0.3 });
    observer.current.observe(refBlock.current!);
    }, [refBlock]);
    
  return isVisible; 
}