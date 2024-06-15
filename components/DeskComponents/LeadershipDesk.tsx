import React from "react";
import Image from "next/image";

const LeadershipDesk: React.FC = () => {
    const articles = [
        {
            imageUrl: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            date: '13 Jul 2020',
            title: 'Diving to the deep',
            author: 'Abdul',
        },
        {
            imageUrl: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            date: '13 Jul 2020',
            title: 'Diving to the deep',
            author: 'Abdul',
        },
        {
            imageUrl: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            date: '13 Jul 2020',
            title: 'Diving to the deep',
            author: 'Abdul',
        },
        {
            imageUrl: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            date: '13 Jul 2020',
            title: 'Diving to the deep',
            author: 'Abdul',
        },
    ];

    return (
        <div className='px-4 py-16 mx-auto w-full md:px-24 lg:px-20 lg:py-20 bg-black'>
            <Header title="History" />
            <div className='grid mt-10 gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'>
                {articles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        imageUrl={article.imageUrl}
                        date={article.date}
                        title={article.title}
                        author={article.author}
                    />
                ))}
            </div>
        </div>
    );
};

const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className='flex -mt-10 items-center'>
            <span className='sectionTitleD text-white'>{title}</span>
            <span className='h-px w-[80vw] ml-10 bg-white'></span>
        </div>
    );
};

const ArticleCard: React.FC<{
    imageUrl: string;
    date: string;
    title: string;
    author: string;
}> = ({ imageUrl, date, title, author }) => {
    return (
        <div className='overflow-hidden transition-shadow duration-300 bg-black'>
            <a href='/blog' aria-label='Article'>
                <Image
                    src={imageUrl}
                    className='object-cover w-full h-64'
                    alt=''
                    height={256}
                    width={256}
                />
            </a>
            <div className='py-5'>
                <p className='mb-2 text-xs font-semibold text-orange-500 uppercase'>
                    {date}
                </p>
                <a
                    href='/blog'
                    aria-label='Article'
                    className='inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700'
                >
                    <p className='blogTitleD text-2xl font-bold leading-5'>
                        {title}
                    </p>
                </a>
                <p className='mb-2 text-xs font-semibold mt-6 text-white opacity-80'>
                    By - {author}
                </p>
            </div>
        </div>
    );
};

export default LeadershipDesk;
