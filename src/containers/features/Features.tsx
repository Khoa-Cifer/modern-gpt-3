import './features.css'
import { FeaturesComponent } from '../../components/feature/Feature'

export const Features = () => {
    return (
        <div className="gpt3__features section__padding mt-40" id="features">
            {/*
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p className="gradient__text">Request Early Access to Get Started</p>
            </div>
            */}
            <div className="flex justify-between gpt3__features-design">
                <div className='mb-16'>
                    <h1 className="gradient__text gpt3__features-font__type text-4xl w-[426px] mb-[34px]">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                    <p className="gradient__text gpt3__features-font__type text-base">Request Early Access to Get Started</p>
                </div>
                <div>
                    <div>
                        <FeaturesComponent title='Improving end distrusts instantly'
                            text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.' />
                    </div>
                    <div className='mt-16'>
                        <FeaturesComponent title='Become the tended active'
                            text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.' />
                    </div>
                    <div className='mt-16'>
                        <FeaturesComponent title='Message or am nothing'
                            text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' />
                    </div>
                    <div className='mt-16'>
                        <FeaturesComponent title='Really boy law county'
                            text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.' />
                    </div>
                </div>
            </div>
        </div>
    )
}