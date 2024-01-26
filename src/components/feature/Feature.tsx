import './feature.css';

interface I_Feature {
    title: string;
    text: string;
}

export const WhatGPT3Component: React.FC<I_Feature> = ({ title, text }) => {
    return (
        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>

            <div className="gpt3__features-container__feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}


export const FeaturesComponent: React.FC<I_Feature> = ({ title, text }) => {
    return (
        <div className="flex gap-x-48 gpt3__features-component">
            <div>
                <div className="gpt3__features-container__feature-title">
                    <div />
                </div>
                <h1 className='text-white text-[18px] font-extrabold gpt3__feature-title w-[182px]'>{title}</h1>
            </div>
            <div className="gpt3__features-container__feature-text w-[334px] h-24 flex-shrink-0">
                <p>{text}</p>
            </div>
        </div>
    )
}