import SectionTitle from "@components/ui/sectionTitle";
import SlideUp from "@utils/animations/slideUp";
import { schoolData } from "@utils/fackData/schoolData";

const Schools = () => {
    return (
        <section id="pricing" className="pricing-area">
            <br />
            <br />
            <br />
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SectionTitle>
                                <SectionTitle.Name>Join a Class</SectionTitle.Name>
                                <SectionTitle.Title>Learn Online or In-Person</SectionTitle.Title>
                                <SectionTitle.Description>
                                Take part in live classes with expert instructors. Ask questions, practice what you learn, and grow your skills in real time.
                                </SectionTitle.Description>
                            </SectionTitle>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {schoolData.map(({ id, img, description, features, title, link }) => (
                            <Card
                                key={id}
                                id={id}
                                img={img}
                                description={description}
                                title={title}
                                link={link}
                                features={features}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schools;

interface PropsType {
    id: number;
    img: string;
    description: string;
    title: string;
    features: {
        id: number;
        feature: string;
        available: boolean;
    }[];
    link: string;
}
const Card = ({ id, img, description, link, title }: PropsType) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4"> {/* 4 per row on large screens */}
            <SlideUp delay={id} className="pricing-item">
                <div className="pricing-header">
                    <img src={img} alt="img" data-rjs={2} />
                    <h1 className={`title ${title === "Premium" ? "color-title" : ""}`}>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="pricing-details">
                    <a href={link} className="theme-btn">
                        Enroll Now
                    </a>
                </div>
            </SlideUp>
        </div>
    );
};

