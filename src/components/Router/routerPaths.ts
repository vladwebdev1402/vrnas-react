import { IPath } from "@/types/IPath"

const root = "/vrnas-react"

export const routerPaths = {
    main: root,
    about: root + "/about",
    ourService: root + "/services",
    pricingPlan: root + "/pricing",
    faq: root + "/faq",
}

export const translatePath: {[key: string] : string} = {
    "vrnas-react": "Home",
    "about": "About Us",
    "services": "Our Service",
    "pricing": "Pricing Plan",
    "faq": "FAQ"
}

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
            },
            {
                name: "FAQ",
                to: ""
            },
            {
                name: "Tems & Conditions",
                to: ""
            },
            {
                name: "Privacy Policy",
                to: ""
            },
        ]
    },
    {
        name: "Blog",
        to: "",
        children: [
            {
                name: "Resent articles",
                to: "",
            },
            {
                name: "Our Team",
                to: "",
            },
            {
                name: "Detail Service",
                to: "",
            },
        ]
    },
]
