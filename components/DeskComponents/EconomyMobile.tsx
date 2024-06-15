import React from "react";
import Article from "../Article";

const EconomyMobile: React.FC = () => {
    return (
        <div className='flex flex-col mt-12 md:hidden bg-white py-4 h-[55vh]'>
            <Header title="Economy" />
            <Carousel>
                <ArticleItem
                    imageUrl='/images/kwankwaso.jpg'
                    date='2024-07-15'
                    title='Governor Rabiu Kwankwaso: Pioneering People-Centric Governance in Kano'
                />
                <ArticleItem
                    imageUrl='/images/elrufai.jpg'
                    date='2022-10-10'
                    title='Into the North: Decoding the Political Game with Mallam El-Rufai'
                />
                <ArticleItem
                    imageUrl='/images/shettima.jpeg'
                    date='2024-05-23'
                    title='Navigating Leadership: A Conversation with Kashim Shettima'
                />
                <ArticleItem
                    imageUrl='/images/matawalle.jpg'
                    date='2022-10-10'
                    title="Zamfara's Symphony of Transformation: Bello Matawalle's Leadership Overture"
                />
            </Carousel>
        </div>
    );
};

const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className='flex items-center'>
            <span className='sectionTitleD ml-4'>{title}</span>
            <span className='h-px w-[60vw] ml-4 mr-4 bg-black'></span>
        </div>
    );
};

const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='w-[100vw] overflow-x-hidden'>
            <div className='carousel carousel-center max-w-md p-4 space-x-4 bg-neutral'>
                {children}
            </div>
        </div>
    );
};

const ArticleItem: React.FC<{ imageUrl: string, date: string, title: string }> = ({ imageUrl, date, title }) => {
    return (
        <div className='carousel-item w-[70vw]'>
            <Article imageUrl={imageUrl} date={date} title={title} />
        </div>
    );
};

export default EconomyMobile;
