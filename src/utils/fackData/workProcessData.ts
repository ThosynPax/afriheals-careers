type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Premium Job Board",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-shake-hands-line",
        description: "Exclusive high-paying tech roles (curated for you).",
    },
    {
        id: 2,
        title: "Expert Webinars ",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-global-fill",
        description: "Free & paid sessions on resumes, interviews, trends, and lots more.",
    },
    {
        id: 3,
        title: "Tech Networking Events",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-stack-line",
        description: "Virtual/in-person meetups with industry leaders.",
    },
]