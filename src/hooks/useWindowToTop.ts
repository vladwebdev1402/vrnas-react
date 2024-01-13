import { useEffect } from "react"

export const useWindowToTop = () => {
    return useEffect(() => {
        window.scrollTo({top: 0})
    }, [])
}