import SectionTitle from "@components/ui/sectionTitle"
import { faqData } from "@utils/fackData/faqData"

const Faqs = () => {
    return (
        <section id="faqs" className="any-questions-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>FAQs</SectionTitle.Name>
                            <SectionTitle.Title>Got questions?</SectionTitle.Title>
                            <SectionTitle.Description> We’ve got answers! Here you’ll find common queries about our one-on-one mentoring. If you don’t see your question, feel free to reach out to us directly.</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="book-call-intro text-center"><img src="/images/about/founder.png" alt="founder" title="founder" />
                            <h2>Book your 30mins call today</h2>
                            <a href="https://coachli.co/afriheals/session/1-on-1-mentoring?id=702" className="theme-btn">Schedule now<i className="ri-video-chat-line" /></a>
                            <p>Prefer to email? <a href="mailto:calls@afrihealscareers.com">calls@afrihealscareers.com</a></p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {
                                faqData.map(({ ans, id, question }) => {
                                    return (
                                        <div key={id} className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={`${id}`}>{question}</button>
                                            </h2>
                                            <div id={`${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>{ans}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Faqs