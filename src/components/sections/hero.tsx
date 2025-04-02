import SlideUp from "@utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3>Trusted by 5,000+ African tech professionals</h3>
                            <h2>Stuck in your tech career? Our community opens doors</h2>
                            <p>Grow with a community of top tech talent. Access hidden job opportunities, <br /> expert insights, and career-changing connections.</p>
                            <div className="hero-btns">
                               {/*  <Link to="pricing" smooth={true}  className="theme-btn"></Link> */}
                                <a href="https://forms.gle/dHjj1o8JNVKj9N3B9" className="theme-btn differenct-color">Join Our Community</a>
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