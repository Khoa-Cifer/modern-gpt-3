import { WhatGPT3Component } from '../../components/feature/Feature'
import './whatgpt3.css'

export const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-features'>
                    <WhatGPT3Component title='What is GPT-3'
                        text='We so opinion friends me message as delight. 
                    Whole front do of plate heard oh ought. 
                    His defective nor convinced residence own. 
                    Connection has put impossible own apartments boisterous. 
                    At jointure ladyship an insisted so humanity he. 
                    Friendly bachelor entrance to on by.' />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
                <p className='gradient__text'>Explore the library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <WhatGPT3Component title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.' />
                <WhatGPT3Component title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
                <WhatGPT3Component title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.' />
            </div>
        </div>
    )
}