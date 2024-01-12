import { IPath } from "@/types/IPath"

const root = "/vrnas-react"

export const routerPaths = {
    main: root,
    about: root + "/about",
    ourService: root + "/services",
    pricingPlan: root + "/pricing",
}

export const translatePath: {[key: string] : string} = {
    "vrnas-react": "Home",
    "about": "About Us",
    "services": "Our Service"
}
// FAQ
// Tems & Conditions
// Privacy Policy
export const navPaths: IPath[] = [
    {
        name: "Home",
        to: routerPaths.main,
    },
    {
        name: "About Us",
        to: routerPaths.about,
    },
    {
        name: "Service",
        to: routerPaths.ourService,
    },
    {
        name: "Page",
        to: "",
        children: [
            {
                name: "Pricing Plan",
                to: routerPaths.pricingPlan,
            }
        ]
    },
    {
        name: "Blog",
        to: ""
    },
]