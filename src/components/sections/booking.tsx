import SlideUp from "@utils/animations/slideUp"

const Booking = () => {
    return (
        <section id="book" className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="call-to-action-part text-center">
                            <h2>Achieve Your Career Goals with One-on-One Mentoring</h2>
                            <p>Get personalized guidance to overcome challenges, build the right skills, and move closer to your dream career. Start with a call to discuss your needs, get a tailored plan, and begin your journey to success.
                            </p>
                            <div className="hero-btns">
                                <a href="https://cal.com/thosyn-pax/45min" className="theme-btn">Book a free call</a>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Booking