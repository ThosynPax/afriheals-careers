import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section className="funder-says-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="founder-say-part text-center">
                            <h3>At AfriHeals Careers, we are dedicated to empowering individuals through personalized one-on-one mentoring.
                                <span> Our goal is to equip you with essential tech skills to excel in today’s fast-paced world. </span>
                                 Together, we’ll unlock your
                                  full potential and help you achieve your career goals. Let’s get started!</h3>
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