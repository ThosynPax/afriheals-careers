import SectionTitle from "@components/ui/sectionTitle"

const Story = () => {
    return (
        <section id="pricing" className="pricing-area"><br /><br /><br /><br /><br /><br />
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SectionTitle>
                                <SectionTitle.Name>Where Purpose Meets Opportunity</SectionTitle.Name>
                                <SectionTitle.Title>Our Story: Building Africa’s Tech Career Bridge</SectionTitle.Title>
                                <SectionTitle.Description className="our-story">
                                    <p>
                                    Afriheals Careers didn’t start as a business, it started as a burden.  
                                    A burden to help fellow Africans in tech stop feeling lost and alone.
                                    </p>

                                    <p>It began with one-on-one mentoring calls, bootcamps and free trainings and webinars, not planned, just needed. </p>
                                    
                                    <p>People learning tech but unsure of the next step. 
                                    Talented individuals with no clear direction, no network, and no support to move forward.</p>

                                    <p>From those honest conversations, a community was born.</p>

                                    <p>Today, Afriheals Careers is a growing support system for African tech talents, offering hands-on training, expert-led webinars, 
                                    exclusive job alerts, and practical guidance to help people not just get into tech, but grow in it.</p>

                                    <p>We’re not here to flood people with content. We’re here to offer clarity. Real help. 
                                    And a space where Africans in tech can learn, connect, and take bold steps in their careers, together.</p>

                                    <p>We’re not chasing numbers, we’re building real stories. And the mission stays the same:  
                                    To make tech careers more accessible, more connected, and more purposeful for Africans.</p>
                                </SectionTitle.Description>

                            </SectionTitle>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="terms-container">
                       
                            
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>

     )
 }

export default Story;
