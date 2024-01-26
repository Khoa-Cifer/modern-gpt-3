interface I_Article {
    image: string;
    date: string;
    text: string;
}

export const Article: React.FC<I_Article> = ({ image, date, text }) => {
    return (
        <div className="bg-[var(--color-bg)] gpt3__article m-5 cursor-pointer w-full h-full">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="px-5 py-3 flex flex-col">
                <div className="">
                    <p className="text-white text-xs font-bold line pb-3">{date}</p>
                    <h1 className="text-white text-xl">{text}</h1>
                </div>
                <p className="text-white text-xs font-bold line my-5 justify-end">Read full Article</p>
            </div>

        </div>
    )
}