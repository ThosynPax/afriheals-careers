import SlideUp from "@utils/animations/slideUp"

const Booking = () => {
    return (
        <section id="book" className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="call-to-action-part text-center">
                            <h2>Need something custom?</h2>
                            <p>If you only need part of a plan, want something more tailored, or you're not sure where to start, we’re happy to build a custom solution that fits your goals, budget, and timeline.</p>
                            <div className="hero-btns">
                                <a href="https://cal.com/thosyn-pax-eh9hc6/45min" className="theme-btn">Book a call</a>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Booking