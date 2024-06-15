import React from "react";
import Image from "next/image";
import BlogPost from "../BlogPost";
import PoliticsMobile from "./PoliticsMobile";

const PoliticsDesk: React.FC = () => {
    const featuredArticle = {
        imageUrl: '/images/elrufai.jpg',
        category: 'Politics',
        title: 'Into the North: Decoding the Political Game with Mallam El-Rufai',
        author: 'Abdul Abdul',
        authorImageUrl: '/images/f1.jpg',
        link: '/blog',
    };

    const articles = [
        {
            date: '2024-08-05',
            title: 'Navigating Leadership: A Conversation with Kashim Shettima',
            imageUrl: '/images/shettima.jpeg',
            content: "Growing up in Maiduguri, I never imagined I'd find myself in the political arena. But life has its twists. My journey into politics started with a deep-seated desire to contribute to the development of my community. It's one thing to witness change; it's another..",
            link: '#',
        },
        {
            date: '2024-06-10',
            title: 'Governor Rabiu Kwankwaso: Pioneering People-Centric Governance in Kano',
            imageUrl: '/images/kwankwaso.jpg',
            content: "From early political aspirations to the helm of governance in Kano, Rabiu Kwankwaso's narrative is one of passion and purpose.",
            link: '#',
        },
        {
            date: '2024-07-17',
            title: "Zamfara's Symphony of Transformation: Bello Matawalle's Leadership Overture",
            imageUrl: '/images/matawalle.jpg',
            content: "In the serene echoes of Zamfara, we follow the harmonious notes of Matawalle's political journey, a tale that began with a genuine desire to serve the people.",
            link: '#',
        },
    ];

    return (
        <>
            <section className='hidden md:flex bg-white'>
                <div className='container px-10 py-5 mx-auto m-10'>
                    <Header title="Politics" />
                    <div className='lg:flex lg:-mx-6 mt-10'>
                        <FeaturedArticle article={featuredArticle} />
                        <div className='w-[60vw] lg:mt-0 lg:px-6'>
                            {articles.map((article, index) => (
                                <BlogPost
                                    key={index}
                                    date={article.date}
                                    title={article.title}
                                    imageUrl={article.imageUrl}
                                    content={article.content}
                                    link={article.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className='flex md:hidden'>
                <PoliticsMobile />
            </div>
        </>
    );
};

const Header: React.FC<{ title: string }> = ({ title }) => (
    <span className='flex items-center'>
        <span className='sectionTitleD'>{title}</span>
        <span className='h-px w-[80vw] ml-10 bg-black'></span>
    </span>
);

const FeaturedArticle: React.FC<{ article: any }> = ({ article }) => (
    <div className='w-[40vw] lg:px-6'>
        <a href={article.link}>
            <Image
                className='object-cover object-center w-full h-80 xl:h-[28rem] transition hover:shadow-xl hover:opacity-80'
                src={article.imageUrl}
                alt=''
                width={50}
                height={80}
                unoptimized
            />
        </a>
        <div>
            <a href={article.link}>
                <p className='headMenus mt-6 text-sm text-yellow-500 uppercase'>{article.category}</p>
            </a>
            <a href={article.link}>
                <h1 className='blogTitleD hover:opacity-90 transition max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800'>
                    {article.title}
                </h1>
            </a>
            <div className='flex items-center mt-6'>
                <a href={article.link}>
                    <Image
                        className='object-cover object-center w-10 h-10 rounded-full'
                        src={article.authorImageUrl}
                        alt=''
                        width={10}
                        height={10}
                        unoptimized
                    />
                </a>
                <div className='mx-4'>
                    <a href={article.link}>
                        <h1 className='headMenus text-sm text-gray-700'>by - {article.author}</h1>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default PoliticsDesk;
