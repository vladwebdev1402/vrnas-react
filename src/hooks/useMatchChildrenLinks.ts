import { IPath } from "@/types/IPath";
import { useMatch } from "react-router-dom";

export const useMatchChildrenLinks = (links: IPath[], location: string): boolean => {
    for (let link of links) {
        if (location === link.to) return true;
    }
    return false;
}