import Image from "next/image";
import React from "react";

interface BlogPostProps {
	date: string;
	title: string;
	imageUrl: string;
	content: string;
	link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
	date,
	title,
	imageUrl,
	content,
	link,
}) => {
	return (
		<article className='flex bg-white transition hover:shadow-md shadow-sm mb-10'>
			<div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
				<time
					dateTime={date}
					className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900'
				>
					<span>
						{new Date(date).getFullYear()}
					</span>
					<span className='w-px flex-1 bg-gray-900/10'></span>
					<span>
						{new Date(date).toLocaleString(
							"en-us",
							{
								month: "short",
								day: "numeric",
							}
						)}
					</span>
				</time>
			</div>

			<div className='hidden sm:block sm:basis-56'>
				<Image
					alt=''
					src={imageUrl}
					width={90}
					height={90}
					unoptimized
					className='aspect-square h-full w-full object-cover hover:opacity-85'
				/>
			</div>

			<div className='flex flex-1 flex-col justify-between'>
				<div className='border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6'>
					<a href={link}>
						<h3 className='blogTitleD font-bold uppercase text-gray-900'>
							{title}
						</h3>
					</a>

					<p className='headeMenus mt-2 line-clamp-3 text-sm/relaxed text-gray-700'>
						{content}
					</p>
				</div>

				<div className='sm:flex sm:items-end sm:justify-end'>
					<a
						href={link}
						className='block headMenus bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400'
					>
						Read
					</a>
				</div>
			</div>
		</article>
	);
};

export default BlogPost;
