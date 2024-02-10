import React from "react";

interface BlogCardProps {
	category: string;
	date: string;
	title: string;
	description: string;
	link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
	category,
	date,
	title,
	description,
	link,
}) => {
	return (
		<div className='overflow-hidden mt-6 transition-shadow duration-300 bg-white rounded shadow-sm'>
			<div className="w-full bg-cover bg-center h-60 bg-[url('/images/n1.jpg')]"></div>
			<div className='p-5 border border-t-0'>
				<p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
					<a
						href={link}
						className='headeMenus transition-colors duration-200 text-orange-300 hover:text-deep-purple-accent-700'
						aria-label='Category'
						title={category}
					>
						{category}
					</a>
					<span className='text-gray-600'>
						— {date}
					</span>
				</p>
				<a
					href={link}
					aria-label='Category'
					title={title}
					className='blogTitleD inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700'
				>
					{title}
				</a>
				<p className='headeMenus mb-2 text-gray-700'>
					{description}
				</p>
				<a
					href={link}
					aria-label=''
					className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
				>
					Read
				</a>
			</div>
		</div>
	);
};

export default BlogCard;
