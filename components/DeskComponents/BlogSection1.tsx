import React from "react";
import Image from "next/image";

const BlogSection1: React.FC = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Diversification Triumph: Northern Nigeria Shifts Gears Celebrating Unity in Northern Nigeria",
            category: "Leadership",
            date: "28 Dec 2025",
            description: "Leaders across party lines come together to prioritize unity and cooperation. A powerful symbol of progress for our beloved Northern region.",
            imageUrl: "/images/elrufai.jpg",
            link: "/blog"
        },
        {
            id: 2,
            title: "Investment Spotlight: Northern Nigeria Emerges as a Frontrunner for Investors",
            category: "Leadership",
            date: "28 Dec 2025",
            description: "Leaders across party lines come together to prioritize unity and cooperation. A powerful symbol of progress for our beloved Northern region.",
            imageUrl: "/images/ec2.webp",
            link: "/blog"
        },
        {
            id: 3,
            title: "Economic Breakthrough: Northern Nigeria Sets the Stage for Unprecedented Growth",
            category: "Leadership",
            date: "28 Dec 2025",
            description: "Leaders across party lines come together to prioritize unity and cooperation. A powerful symbol of progress for our beloved Northern region.",
            imageUrl: "/images/n4.jpg",
            link: "/blog"
        },
        {
            id: 4,
            title: "Palaces and Provinces: Navigating the Historical Labyrinth of Northern Nigeria",
            category: "Leadership",
            date: "28 Dec 2025",
            description: "Leaders across party lines come together to prioritize unity and cooperation. A powerful symbol of progress for our beloved Northern region.",
            imageUrl: "/images/n7.jpg",
            link: "/blog"
        },
        {
            id: 5,
            title: "Legacy of Empires: Northern Nigeria's Rich Historical Heritage Revealed",
            category: "History",
            date: "28 Dec 2025",
            description: "Leaders across party lines come together to prioritize unity and cooperation. A powerful symbol of progress for our beloved Northern region.",
            imageUrl: "/images/n9.jpg",
            link: "/blog"
        },
        {
            id: 6,
            title: "Celebrating Unity in Northern Nigeria",
            category: "Leadership",
            date: "28 Dec 2025",
            description: "Leaders across party lines come together to prioritize unity and cooperation. A powerful symbol of progress for our beloved Northern region.",
            imageUrl: "/images/n1.jpg",
            link: "/blog"
        }
    ];

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20 lg:pb-5">
            <div className="flex -mt-10 items-center">
                <span className="sectionTitleD">Latest</span>
                <span className="h-px w-[80vw] ml-10 bg-black"></span>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mt-10">
                {blogPosts.slice(0, 3).map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mt-0 md:mt-10">
                {blogPosts.slice(3, 6).map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    description: string;
    imageUrl: string;
    link: string;
}

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <div className="w-full hover:opacity-80 bg-cover bg-center h-60" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a href={post.link} className="headeMenus transition-colors duration-200 text-orange-300 hover:text-deep-purple-accent-700" aria-label="Category" title={post.category}>
                        {post.category}
                    </a>
                    <span className="text-gray-600"> — {post.date}</span>
                </p>
                <a href={post.link} aria-label="Category" title={post.title} className="blogTitleM md:blogTitleD text-sm inline-block mb-3 md:text-2xl hover:opacity-80 md:hover:text-yellow-400 font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                    {post.title}
                </a>
                <p className="headeMenus hidden md:flex mb-2 text-gray-700">{post.description}</p>
                <a href={post.link} aria-label="" className="hidden md:inline-flex hover:text-yellow-400 items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                    Read -
                </a>
            </div>
        </div>
    );
};

export default BlogSection1;
