import { useEffect, useRef, useState } from "react";

export const useObserve = (refBlock: React.RefObject<Element | HTMLDivElement>, threshold?: number) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const observer = useRef<any>(null)

    const callback: IntersectionObserverCallback = (entries) => {
    if (!isVisible) {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= (threshold ?? 0.4)) {
        setIsVisible(true);
        }
    }
    };

    useEffect(() => {
    observer.current = new IntersectionObserver(callback, { threshold: threshold ?? 0.4});
    observer.current.observe(refBlock.current!);
    }, [refBlock]);
    
  return isVisible; 
}