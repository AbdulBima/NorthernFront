import Image from "next/image";
import React from "react";

interface ArticleProps {
	imageUrl: string;
	date: string;
	title: string;
}

const Article: React.FC<ArticleProps> = ({
	imageUrl,
	date,
	title,
}) => {
	return (
		<article className='overflow-hidden '>
			<Image
				alt=''
				src={imageUrl}
				className='h-56 w-full object-cover'
				height={56}
				width={96}
				unoptimized
			/>

			<div className='bg-white '>
				<a href='/blog'>
					<h3 className='blogTitleM font-bold mt-0.5   leading-5 text-lg text-gray-900'>
						{title}
					</h3>
				</a>

				<time
					dateTime={date}
					className='block mt-4 font-semibold text-xs text-gray-500'
				>
					{date}
				</time>
			</div>
		</article>
	);
};

export default Article;
