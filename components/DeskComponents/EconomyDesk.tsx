import React from "react";
import Image from "next/image";
import BlogPost from "../BlogPost";
import EconomyMobile from "./EconomyMobile";

const EconomyDesk: React.FC = () => {
    return (
        <>
            <DesktopView />
            <MobileView />
        </>
    );
};

const DesktopView: React.FC = () => {
    return (
        <section className='hidden md:flex bg-white'>
            <div className='container px-10 py-5 mx-auto m-10'>
                <Header title="Economy" />
                <div className='lg:flex lg:-mx-6 mt-10'>
                    <MainArticle />
                    <AdditionalArticles />
                </div>
            </div>
        </section>
    );
};

const MobileView: React.FC = () => {
    return (
        <div className='flex md:hidden'>
            <EconomyMobile />
        </div>
    );
};

const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className='flex items-center'>
            <span className='sectionTitleD'>{title}</span>
            <span className='h-px w-[80vw] ml-10 bg-black'></span>
        </div>
    );
};

const MainArticle: React.FC = () => {
    return (
        <div className='w-[40vw] lg:px-6'>
            <a href='/blog'>
                <Image
                    className='object-cover object-center w-full h-80 xl:h-[28rem] transition hover:shadow-xl hover:opacity-80'
                    src='/images/ec1.jpg'
                    alt='Agricultural Triumphs'
                    width={50}
                    height={80}
                    unoptimized
                />
            </a>
            <div>
                <a href='/blog'>
                    <p className='headMenus mt-6 text-sm text-yellow-500 uppercase'>Politics</p>
                </a>
                <a href='/blog'>
                    <h1 className='blogTitleD hover:opacity-90 transition max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800'>
                        Agricultural Triumphs: Northern Nigeria&apos;s Fields Yield Record Harvests
                    </h1>
                </a>
                <AuthorInfo name="Abdul Abdul" imageUrl='/images/f1.jpg' />
            </div>
        </div>
    );
};

const AdditionalArticles: React.FC = () => {
    return (
        <div className='w-[60vw] lg:mt-0 lg:px-6'>
            <BlogPost
                date='2024-08-05'
                title="Tech Frontier: Northern Nigeria's Startups Redefining Economic Progress"
                imageUrl='/images/n4.jpg'
                content="In the dynamic world of technology, Northern Nigeria's startup scene is taking center stage, redefining economic progress."
                link='#'
            />
            <BlogPost
                date='2024-06-10'
                title='Economic Breakthrough: Northern Nigeria Sets the Stage for Unprecedented Growth'
                imageUrl='/images/ec4.jpg'
                content='Northern Nigeria is on the brink of a remarkable economic breakthrough. The stage is set, and the region is gearing up for an era of unparalleled growth.'
                link='#'
            />
            <BlogPost
                date='2024-07-17'
                title="Northern Nigeria's Economic Odyssey: Pioneering Growth Beyond Boundaries"
                imageUrl='/images/ec5.webp'
                content="Beyond the visible transactions, Northern Nigeria's commerce serves as a catalyst for entrepreneurship and innovation."
                link='#'
            />
        </div>
    );
};

const AuthorInfo: React.FC<{ name: string, imageUrl: string }> = ({ name, imageUrl }) => {
    return (
        <div className='flex items-center mt-6'>
            <a href='/blog'>
                <Image
                    className='object-cover object-center w-10 h-10 rounded-full'
                    src={imageUrl}
                    alt={name}
                    width={10}
                    height={10}
                    unoptimized
                />
            </a>
            <div className='mx-4'>
                <a href='/blog'>
                    <h1 className='headMenus text-sm text-gray-700'>by - {name}</h1>
                </a>
            </div>
        </div>
    );
};

export default EconomyDesk;
