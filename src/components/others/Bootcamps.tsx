import SectionTitle from "@components/ui/sectionTitle";

const Bootcamps = () => {
    return (
        <section id="pricing" className="pricing-area">
            <br />
            <br />
            <br />
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="logo" style={{ textAlign: 'center' }}>
                                <a href="#">
                                    <img src="/images/logos/logo.png" width="10%" height="10%" alt="Logo" title="Logo" />
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

                    <SectionTitle.Description>
                        <SectionTitle.Title>Choose from our top courses:</SectionTitle.Title>
                        <ul>
                            <li>💻 Web Development</li>
                            <li>📊 Data Analytics</li>
                            <li>📈 Product Management</li>
                        </ul>
                    </SectionTitle.Description>

                    <SectionTitle.Description>
                        <SectionTitle.Title>Here’s why our Bootcamp works:</SectionTitle.Title>
                        <ul>
                            <li>✅ Learn from experienced instructors</li>
                            <li>✅ Work on real-world projects</li>
                            <li>✅ Get the support you need to land your first tech role</li>
                            <li>✅ Virtual Internship Opportunities</li>
                        </ul>
                    </SectionTitle.Description>

                    <SectionTitle.Description>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src="/images/bootcamps/1.jpeg" alt="Product Manager" style={{ width: '100%' }} />
                            </div>
                            <div className="col-md-4">
                                <img src="/images/bootcamps/2.jpeg" alt="Data Analytics" style={{ width: '100%' }} />
                            </div>
                            <div className="col-md-4">
                                <img src="/images/bootcamps/3.jpeg" alt="Web Development" style={{ width: '100%' }} />
                            </div>
                        </div>
                    </SectionTitle.Description>

                    {/* Price Section with Early Bird Pricing and Deadlines */}
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
                                <p><strong>Regular Price:</strong> ₦220,000                                </p>
                                <p><strong>Early Bird Price:</strong> ₦170,000 (Deadline: Jan 24, 2025)</p>
                            </div>
                        </div>
                    </SectionTitle.Description>

                    <SectionTitle> Class Starts: March 7th, 2025</SectionTitle>

                    <SectionTitle.Description>
                        <SectionTitle.Title>Frequently Asked Questions (FAQ):</SectionTitle.Title>
                        <ul>
                            <li><strong>Q: How long is the Bootcamp?</strong> <br />A: The Bootcamp is a 3-month program.</li>
                            <li><strong>Q: Do I need prior tech experience?</strong> <br />A: No, our Bootcamp is beginner-friendly and designed for individuals with no prior experience.</li>
                            <li><strong>Q: Can I get a job after completing the Bootcamp?</strong> <br />A: Yes, we provide job placement assistance and virtual internship opportunities to help you land your first role.</li>
                        </ul>
                    </SectionTitle.Description>

                    <SectionTitle.Description>
                        <SectionTitle.Title>Register Now &amp; Secure Your Spot</SectionTitle.Title>
                        <p>Ready to take the next step? Pay to the account details provided, and click I have paid button to share your proof of payment with us.</p>
                        <p><strong>Account Name:</strong> Afribreath- Afriheals Car-lco <br />
                           <strong>Account Number:</strong> 9627497057 <br />
                           <strong>Bank:</strong> Providus Bank
                        </p>
                        <a href="https://wa.me/2347016619097" className="btn btn-primary" style={{ 
                            backgroundColor: '#000', 
                            color: 'white', 
                            padding: '12px 24px', 
                            borderRadius: '5px', 
                            textDecoration: 'none', 
                            fontWeight: 'bold',
                            display: 'inline-block',
                            textAlign: 'center',
                            transition: 'background-color 0.3s ease'
                        }}>
                            I have paid
                        </a>

                    </SectionTitle.Description>


                    <SectionTitle> Class Starts: March 7th, 2025</SectionTitle>
                </div>
            </div>
        </section>
    );
};

export default Bootcamps;
