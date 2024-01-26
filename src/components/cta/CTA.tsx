import './cta.css'

export const CTA = () => {
    return (
        <div className="gradient-cta section__margin gpt3__cta">
            <div className='flex p-7 h-full items-center justify-between  gpt3__cta-content'>
                <div>
                    <p className='gpt3__CTA-text__font text-xs font-medium'>Request Early Access to Get Started</p>
                    <h1 className='gpt3__CTA-text__font font-extrabold'>Register today & start exploring the endless possiblities.</h1>
                </div>
                <button className='gpt3__CTA-text__font text-lg bg-black text-white px-11 py-3 rounded-[40px]' type="button">Get Started</button>
            </div>
        </div>
    )
}