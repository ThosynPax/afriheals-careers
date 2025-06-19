import SectionTitle from "@components/ui/sectionTitle"

const Story = () => {
    return (
        <section id="story" className="story-area pt-40 pb-20"><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <SectionTitle>
                            <SectionTitle.Name className="text-lg font-semibold text-indigo-600 mb-2">
                                Turning 'what ifs' into working products
                            </SectionTitle.Name>
                            <SectionTitle.Title className="text-4xl font-bold text-gray-900 mb-6">
                                Hi, I'm Thosyn Pax, UX Engineer, Technical Product Designer, and Startup Product Architect.
                            </SectionTitle.Title>
                        </SectionTitle>
                    </div>

                    <div className="rounded-xl p-8 mb-12">
                        <SectionTitle.Description className="our-story space-y-6 text-gray-700 leading-relaxed">
                            <p className="italic text-lg">
                                <em>This isn't your typical agency story.</em>
                            </p>

                            <p>
                                There's no large team or faceless process here, just deep expertise, focused execution,
                                and a track record of helping founders go from idea to product with clarity and speed.
                            </p>
                            
                            <p>
                                After years of working on startups and digital products, I noticed a pattern: 
                                Founders often get stuck at the starting line, full of vision, but lacking the support, 
                                direction, or product strategy to get moving.
                            </p>

                            <p>
                                So, I created <span className="font-bold text-indigo-600">The Pax Company</span>, where I combine UX engineering, product design,
                                and lean technology to help you build smarter MVPs, validated PoCs, 
                                and growth-ready websites, fast, focused, and AI-enhanced.
                            </p>
                        </SectionTitle.Description>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="rounded-xl p-8">
                            <SectionTitle.Title className="text-2xl font-bold text-gray-900 mb-4">
                                This Isn't Just a Service, It's What I Do
                            </SectionTitle.Title>
                            <div className="space-y-4 text-gray-700">
                                <p>You're already experiencing my process.</p>
                                <p>My personal site, thosynpax.com, is where you can learn more about me beyond The Pax Company.
                                    It's a simple space that gives you a fuller picture of who I am, what I do, and how 
                                    I approach product, design, and technology.</p>
                            </div>
                        </div>

                        <div className="rounded-xl p-8">
                            <SectionTitle.Title className="text-2xl font-bold text-gray-900 mb-4">
                                Why It Works
                            </SectionTitle.Title>
                            <ul className="space-y-3 text-gray-700 list-disc pl-5">
                                <li>Build validated MVPs that go beyond mockups</li>
                                <li>Launch Proofs of Concept you can test, demo, or pitch</li>
                                <li>Create performance-optimized websites with great UX and SEO</li>
                                <li>Use AI and automation where it adds real value, not just hype</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-xl p-8"><br /><br /><br />
                        <SectionTitle.Title className="text-2xl font-bold text-gray-900 mb-4">
                            What I Help You Do
                        </SectionTitle.Title>
                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            <li>You work directly with me, no handoffs, no lost context</li>
                            <li>I combine strategy, UX, design, and development in one streamlined flow</li>
                            <li>I implement the right technology where necessary (e.g. AI, Blockchain, etc,) but never at the cost of quality</li>
                            <li>Every project is personal, because this isn't just a job, it's my passion</li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="text-center rounded-xl p-8">
                        <SectionTitle>
                            <p className="text-gray-700 mb-6 text-lg">
                                Whether you're building a SaaS platform, pitching investors, or just trying to get an idea off the ground, I help you move faster, build smarter, and launch with confidence.
                            </p>

                            <p className="text-gray-900 font-medium mb-8 text-lg">
                                👉 Let's turn your next "what if" into a working product.
                            </p>

                            <div className="hero-btns">
                                <a href="https://lu.ma/user/usr-42H4h2IZIzSI5xb" className="theme-btn bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                                    Compare Pricing
                                </a>
                            </div>
                        </SectionTitle>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story;