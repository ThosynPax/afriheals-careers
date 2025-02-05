import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"
import { featuresData } from "@utils/fackData/featuresData"

const Features = () => {
    return (
        <section id="features" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>Other Services</SectionTitle.Name>
                            <SectionTitle.Title>Additional Services to Boost Your Tech Career & Skills</SectionTitle.Title>
                            <SectionTitle.Description>Enhancing skills, boosting tech careers, and unlocking new tech opportunities.</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    {featuresData.map(({ description, icon, id, title }) =>
                        <Card key={id} description={description} icon={icon} id={id} title={title} />
                    )}
                </div>
                <SectionTitle>
                     <SectionTitle.Name><a href="https://wa.link/3fphdr"> Interested in any of the above services? Click to Send us a DM ASAP</a> </SectionTitle.Name>
                </SectionTitle>
               
            </div>
        </section>

    )
}

export default Features

interface PropsType {
    id: number,
    title: string,
    description: string,
    icon: string
}
const Card = ({ id, title, description, icon }: PropsType) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id} className="service-item">
                <div className="content"><i className={icon} />
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}