import SlideUp from "@utils/animations/slideUp"

const Booking = () => {
    return (
        <section id="book" className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="call-to-action-part text-center">
                            <h2>500+ tech professionals attended our last event - don't miss out!</h2>
                            <p>Network with employers and unlock hidden job opportunities.
                            </p>
                            <div className="hero-btns">
                                <a href="https://lu.ma/user/usr-42H4h2IZIzSI5xb" className="theme-btn">Available Events</a>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Booking