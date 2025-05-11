import SectionTitle from "@components/ui/sectionTitle"
import { workProcessData } from "../../utils/fackData/workProcessData"
import SlideUp from "@utils/animations/slideUp"

const WorkingProcess = () => {
    return (
        <section id="how" className="working-process-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>What We Offer</SectionTitle.Name>
                            <SectionTitle.Title>Unlock Your Tech Career Journey</SectionTitle.Title>
                            <SectionTitle.Description>We are your partner for long-term career growth. Whether you're just starting out or looking to level up,
                                <br /> we’ve built tools and programs to support every step of your tech journey.</SectionTitle.Description>
                         
                        </SectionTitle>
                    </div>
                </div>
                <div className="row work-process-list">
                    {
                        workProcessData.map(({ description, id, title, icon }, index) =>
                            <Card key={id} description={description} id={id} title={title} icon={icon} index={index} />
                        )
                    }
                </div>
            </div>
        </section>

    )
}

export default WorkingProcess

type PropsType = {
    id: number,
    title: string,
    description: string,
    index: number,
    icon: string
}
const Card = ({ id, title, description, index, icon }: PropsType) => {
    return (
        <SlideUp delay={id} className="col-xl-4 col-lg-4">
            <div className="working-process-one__single text-center">
                {
                    index !== 0 &&
                    <div className="working-process-one__shape4">
                       
                    </div>
                }

                <div className="icon-box"><i className={icon} />
                    <div className="overlay-list"><span>0{id}</span></div>
                </div>
                <div className="content-box">
                    <div className="title-box">
                        <h3><a href="#">{title}</a></h3>
                    </div>
                    <div className="text-box">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </SlideUp>
    )
}