import SectionTitle from "@components/ui/sectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "../../assets/css/Bootcamp.css";

const Bootcamps = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Better UX for mobile
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section id="pricing" className="pricing-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-12">
                            <div className="logo text-center">
                                <a href="#">
                                    <img 
                                        src="/images/logos/logo.png" 
                                        alt="Logo" 
                                        title="Logo" 
                                        className="logo-img"
                                    />
                                </a>
                            </div>

                            <SectionTitle>
                                <SectionTitle.Name>TechRise &amp; 2025 Bootcamp</SectionTitle.Name>
                                <SectionTitle.Title>Learn Skills That Employers Want</SectionTitle.Title>
                                <SectionTitle.Description>
                                    The new year is the perfect time to take that bold step into tech. Our Bootcamp guides you from where you are to where you want to be.
                                </SectionTitle.Description>
                            </SectionTitle>
                        </div>
                    </div>

                {/* 
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="video-container">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Video Title"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                */}

                    <SectionTitle.Description>
                        <SectionTitle.Title>Choose from our top courses:</SectionTitle.Title>
                        <ul>
                            <li>💻 Web Development</li>
                            <li>📊 Data Analytics</li>
                            <li>📈 Product Management</li>
                        </ul>
                    </SectionTitle.Description>

                    <SectionTitle.Description>
                        <Slider {...sliderSettings}>
                            <div className="slider-item">
                                <img 
                                    src="/images/bootcamps/1.jpeg" 
                                    alt="Product Manager" 
                                    className="responsive-img"
                                />
                            </div>
                            <div className="slider-item">
                                <img 
                                    src="/images/bootcamps/2.jpeg" 
                                    alt="Data Analytics" 
                                    className="responsive-img"
                                />
                            </div>
                            <div className="slider-item">
                                <img 
                                    src="/images/bootcamps/3.jpeg" 
                                    alt="Web Development" 
                                    className="responsive-img"
                                />
                            </div>
                        </Slider>
                    </SectionTitle.Description>

                    <br />
                    <br />

                    <SectionTitle.Description>
                        <SectionTitle.Title>Pricing & Deadlines:</SectionTitle.Title>
                        <div className="pricing-section">
                            <div className="pricing-card">
                                <h4>💻 Web Development</h4>
                                <p><strong>Regular Price:</strong> ₦250,000</p>
                                <p><strong>Early Bird Price:</strong> ₦200,000 (Deadline: Jan 24, 2025)</p>
                            </div>
                            <div className="pricing-card">
                                <h4>📊 Data Analytics</h4>
                                <p><strong>Regular Price:</strong> ₦150,000</p>
                                <p><strong>Early Bird Price:</strong> ₦100,000 (Deadline: Jan 24, 2025)</p>
                            </div>
                            <div className="pricing-card">
                                <h4>📈 Product Management</h4>
                                <p><strong>Regular Price:</strong> ₦220,000</p>
                                <p><strong>Early Bird Price:</strong> ₦170,000 (Deadline: Jan 24, 2025)</p>
                            </div>
                        </div>
                    </SectionTitle.Description>

                    <SectionTitle.Description>
                        <a 
                            href="https://wa.me/2347016619097" 
                            className="btn btn-primary"
                        >
                            I have paid
                        </a>
                    </SectionTitle.Description>
                </div>
            </div>
        </section>
    );
};

export default Bootcamps;
