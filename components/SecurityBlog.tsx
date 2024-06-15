import Image from "next/image";
import React from "react";

interface SecurityBlogProps {
	imageUrl: string;
	date: string;
	title: string;
	author: string;
}

const SecurityBlog: React.FC<SecurityBlogProps> = ({
	imageUrl,
	date,
	title,
	author,
}) => {
	return (
		<div className='overflow-hidden transition-shadow duration-300 bg-black'>
			<a href='/' aria-label='Article'>
				<Image
					src={imageUrl}
					className='object-cover w-full h-64 overflow-hidden hover:scale-110 hover:opacity-90 transition'
					alt=''
					width={80}
					height={64}
					unoptimized
				/>
			</a>
			<div className='py-5'>
				<p className='mb-2 text-xs font-semibold text-orange-500 uppercase'>
					{date}
				</p>
				<a
					href='/'
					aria-label='Article'
					className='inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700'
				>
					<p className='blogTitleD text-2xl font-bold leading-5 hover:text-yellow-500'>
						{title}
					</p>
				</a>

				<a href='/' aria-label='Author'>
					{" "}
					<p className='mb-2 text-xs font-semibold mt-6 text-white opacity-80 hover:text-yellow-300'>
						By - {author}
					</p>{" "}
				</a>
			</div>
		</div>
	);
};

export default SecurityBlog;
