type DataType = {
    id: number,
    title: string,
    description: string,
    price: number | string,
    features: {
        id: number
        feature: string,
        available: boolean
    }[]
}[]
export const priceData: DataType = [
    {
        id: 1,
        title: "Standard",
        description: "For quick wins and smarter UX decisions",
        price: "750,000 (~$500)",
        features: [
            {
                id: 1,
                feature: "UX audit & quick wins (from the UX Sprint Pack)",
                available: true
            },
            {
                id: 2,
                feature: "Wireframes & user flows",
                available: true
            },
            {
                id: 3,
                feature: "UI revamp or new designs",
                available: true
            },
            {
                id: 4,
                feature: "Interactive prototype (Figma or no-code)",
                available: true
            },
            {
                id: 5,
                feature: "Dev-ready files",
                available: true
            },
            {
                id: 6,
                feature: "Handoff-ready Figma file",
                available: true
            },
        ]
    },
    {
        id: 2,
        title: "Premium",
        description: "Scalable design systems and performance-first applications.",
        price: '1,700,000 (~$1,135)',
        features: [
            {
                id: 1,
                feature: "Design system in Figma",
                available: true
            },
            {
                id: 2,
                feature: "Code handoff (React, Tailwind, or Next.js)",
                available: true
            },
            {
                id: 3,
                feature: "UI component libraries",
                available: true
            },
            {
                id: 4,
                feature: "Dev-ready design system",
                available: true
            },
            {
                id: 5,
                feature: "30-min idea clarity session",
                available: true
            },
            {
                id: 6,
                feature: "Pitch/launch asset recommendations",
                available: true
            },
        ]

    },
]