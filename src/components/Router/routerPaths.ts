import { IPath } from "@/types/IPath"

const root = "/vrnas-react"

export const routerPaths = {
    main: root,
    about: root + "/about",
    ourService: root + "/services",
    pricingPlan: root + "/pricing",
    faq: root + "/faq",
    ourTeam: root + "/team",
    temsAndConditions: root + "/conditions",
    privacyPolicy: root + "/policy",
}

export const translatePath: {[key: string] : string} = {
    "vrnas-react": "Home",
    "about": "About Us",
    "services": "Our Service",
    "pricing": "Pricing Plan",
    "faq": "FAQ",
    "team": "Our Team",
    "conditions": "Tems & Conditions",
    "policy": "Privacy Policy",
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
                to: routerPaths.faq,
            },
            {
                name: "Tems & Conditions",
                to: routerPaths.temsAndConditions,
            },
            {
                name: "Privacy Policy",
                to: routerPaths.privacyPolicy,
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
                to: routerPaths.ourTeam,
            },
            {
                name: "Detail Service",
                to: "",
            },
        ]
    },
]
