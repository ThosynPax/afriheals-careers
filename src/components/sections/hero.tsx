import SlideUp from "@utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3>One-on-One Mentoring</h3>
                            <h2>Learn What You Want, When You Want It!</h2>
                            <p>Do you want one-on-one practical classes that fit your goals and schedule? 
                                <br /> We offer custom classes made just for you.</p>
                            <div className="hero-btns">
                               {/*  <Link to="pricing" smooth={true}  className="theme-btn"></Link> */}
                                <a href="https://coachli.co/afriheals/session/1-on-1-mentoring?id=702" className="theme-btn differenct-color">Book a 30min call</a>
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