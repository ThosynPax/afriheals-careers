import SlideUp from "@utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area"><br /><br /><br />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3>Turning 'what ifs' to working productds</h3>
                            <h2>Big ideas? <br />We make them click.</h2>
                            <p>We don't just design screens. We help you launch smarter MVPs, validated PoCs, <br /> and conversion-driven websites, powered by strategy, not just automation.</p>
                            <div className="hero-btns">
                                <a target="_blank" href="https://cal.com/thosyn-pax-eh9hc6/45min"  className="theme-btn">Start a Project </a>
                                <a href="/story" className="theme-btn differenct-color">Our Story</a>
                            </div>
                            <div className="dot-shape"><img src="/images/shapes/shape1.png" alt="Shape" /></div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero