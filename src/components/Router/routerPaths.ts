const root = "/vrnas-react"

export const routerPaths = {
    main: root,
    about: root + "/about",
    ourService: root + "/services"
}

export const translatePath: {[key: string] : string} = {
    "vrnas-react": "Home",
    "about": "About Us",
    "services": "Our Service"
}

export const navPaths = [
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
    },
    {
        name: "Blog",
        to: ""
    },
]