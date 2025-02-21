import SectionTitle from "@components/ui/sectionTitle";
import SlideUp from "@utils/animations/slideUp";
import { priceData } from "@utils/fackData/priceData";

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
                                <SectionTitle.Name>Courses &amp; Books</SectionTitle.Name>
                                <SectionTitle.Title>Available Courses</SectionTitle.Title>
                                <SectionTitle.Description>
                                    Helping you unlock your potential to thrive in your tech career.
                                </SectionTitle.Description>
                            </SectionTitle>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {priceData.map(({ id, img, features, price, title, link }) => (
                            <Card
                                key={id}
                                id={id}
                                img={img}
                                price={price}
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
    price: number | string;
    title: string;
    features: {
        id: number;
        feature: string;
        available: boolean;
    }[];
    link: string;
}
const Card = ({ id, img, price, link, title }: PropsType) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <SlideUp delay={id} className="pricing-item">
                <div className="pricing-header">
                    <img src={img} alt="img" data-rjs={2} />
                    <h1 className={`title ${title === "Premium" ? "color-title" : ""}`}>{title}</h1>
                    <span className="price">{price}</span>
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
