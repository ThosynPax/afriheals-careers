import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section className="funder-says-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="founder-say-part text-center">
                            <h3>Backed by <span>10+ years</span> of combined experience, 
                                <span> we turn big ideas into real, working products from websites and apps to MVPs, </span>
                                    built with strategy, speed, and the smart use of AI</h3>
                            <div className="founder-name-part">
                                <img src="/images/about/founder.png" alt="founder" title="founder" />
                                <h2>Thosyn Pax</h2>
                                <p>Startup Product Architect @ the Pax Company</p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About