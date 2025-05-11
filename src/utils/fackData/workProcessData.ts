type DataType = {
    id: number
    title: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Become a Member",
        icon: "ri-shake-hands-line",
        description: "Join African tech professionals gaining access to exclusive job alerts, hands-on sessions, and a powerful network. As a member, you’ll never walk your career path alone.",
    },
    {
        id: 2,
        title: "Learn & Upskill",
        icon: "ri-global-fill",
        description: "From short courses to in-depth workshops, we help you build real-world skills that matter, guided by industry experts who understand what employers are looking for.",
    },
    {
        id: 3,
        title: "Webinars & Classes",
        icon: "ri-stack-line",
        description: "Attend live, practical sessions on everything from CV revamps to interview prep, and more. Ask questions, get feedback, and grow in real time.",
    },
]