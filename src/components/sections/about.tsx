import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section className="funder-says-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="founder-say-part text-center">
                            <h3>At AfriHeals Careers, we bridge the gap between tech talent and opportunity.
                                <span> We curate Africa's most valuable career resources, from exclusive job openings to insider industry knowledge, </span>
                                    giving you the unfair advantage in today's competitive tech market</h3>
                            <div className="founder-name-part">
                                <img src="/images/about/founder.png" alt="founder" title="founder" />
                                <h2>Thosyn Pax</h2>
                                <p>Founder of Afriheals Careers</p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About