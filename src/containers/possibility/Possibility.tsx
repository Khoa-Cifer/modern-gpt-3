import './possibility.css'
import possibility from '../../assets/possibility.png'


export const Possibility = () => {
    return (
        <div className=" section__margin w-[1440px] text-base gpt3__possibility" id='possibility'>
            <img className='w-1/2' src={possibility} alt="possibility" />
            <div className='flex flex-col justify-end mb-8 gpt3__possibility-font__type'>
                <p className='text-[#71E5FF] font-medium text-base'>Request Early Access to Get Started</p>
                <h1 className='gradient__text mt-[10px] w-[500px] text-4xl font-extrabold'>The possibilities are beyond your imagination</h1>
                <p className='text-[var(--color-text)] mt-[23px] w-[479px] '>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing.
                    Indulgence way everything joy alteration boisterous the attachment.
                    Party we years to order allow asked of.</p>
                <p className='text-[var(--color-subtext)] mt-[31px]'>Request Early Access to Get Started</p>
            </div>
        </div>
    )
}