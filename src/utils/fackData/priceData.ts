type DataType = {
    id: number,
    title: string,
    img: string,
    price: number | string,
    features: {
        id: number
        feature: string,
        available: boolean
    }[];
    link: string;
}[]
export const priceData: DataType = [
    {
        id: 1,
        title: "Learn to use Jira Like a Pro",
        img: "/images/courses/jira-fundamentals.png",
        price: "10,000",
        features: [],
        link: "https://selar.co/Jira",
    },
    
    {
        id: 2,
        title: "Business Analysis Practical",
        img: "/images/courses/business-analysis.png",
        price: '10,000',
        features: [],
        link: "https://selar.co/337y75",

    },

    {
        id: 3,
        title: "Introduction to UI/UX Design",
        img: "/images/courses/free-ui-ux.jpeg",
        price: '7500.00',
        features: [],
        link: "https://selar.co/4whe",

    },
]