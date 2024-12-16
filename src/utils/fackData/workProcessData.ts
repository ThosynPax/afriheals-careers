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
        title: "Book a Call",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-shake-hands-line",
        description: "Tell us about your goals and challenges so we can understand how to help you.",
    },
    {
        id: 2,
        title: "Confirm with Payment",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-global-fill",
        description: "Get a tailored course outline, make payment, and finalize your plan.",
    },
    {
        id: 3,
        title: "Start Your Mentoring",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-stack-line",
        description: "Begin your personalized sessions at a time that works for you.",
    },
]