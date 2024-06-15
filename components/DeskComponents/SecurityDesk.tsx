import React from "react";
import SecurityBlog from "../SecurityBlog";

const SecurityDesk = () => {
	return (
		<div className='px-4 py-16 mx-auto w-[100vw] md:px-24 lg:px-20 lg:pt-28 lg:pb-20 bg-black'>
			<span className=' hidden md:flex -mt-10 items-center'>
				<span className='sectionTitleD text-white'>
					Security
				</span>
				<span className='h-px w-[85vw] ml-10 bg-white'></span>
			</span>

			<span className=' flex md:hidden items-center'>
				<span className='sectionTitleD  text-white'>
					Security
				</span>
				<span className='h-px w-[60vw] ml-4 mr-4 bg-white'></span>
			</span>

			<div className='grid mt-10 gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'>
				<SecurityBlog
					imageUrl='/images/security1.webp'
					date='15 Jul 2024'
					title='Beyond Headlines: Understanding the Complexities of Insecurity in the Region'
					author='Abdul Abdul'
				/>

				<SecurityBlog
					imageUrl='/images/security2.jpeg'
					date='09 Mar 2024'
					title='Innovative Solutions: Tech and Community Initiatives Combatting Insecurity'
					author='Bello Edati'
				/>

				<SecurityBlog
					imageUrl='/images/security3.png'
					date='18 Dec 2024'
					title='A Closer Look: The Economic Impacts of Insecurity on Northern Nigeria'
					author='Musa Adam'
				/>

				<SecurityBlog
					imageUrl='/images/security4.jpg'
					date='02 Apr 2024'
					title='Navigating Insecurity Through Collaborative Efforts'
					author='Sani Khalid'
				/>
			</div>
		</div>
	);
};

export default SecurityDesk;
