import React from "react";
import SecurityBlog from "../SecurityBlog";

const HistoryDesk = () => {
	return (
		<div className='px-4 py-16 mx-auto w-[100vw] md:px-24 lg:px-20 lg:pt-28 lg:pb-40 bg-black'>
			<span className=' flex -mt-10 items-center'>
				<span className='sectionTitleD text-white'>
					History
				</span>
				<span className='h-px w-[80vw] ml-10 bg-white'></span>
			</span>

			<div className='grid mt-10 gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'>
				<SecurityBlog
					imageUrl='/images/tafawa1.webp'
					date='02 Apr 2024'
					title='"In the Sands of Time: Tracing the Historical Footprints of Northern Nigeria'
					author='Sani Khalid'
				/>

				<SecurityBlog
					imageUrl='/images/n7.jpg'
					date='15 Jul 2024'
					title='From Ancient Kingdoms to Modern Realms: A Historical Odyssey of Northern Nigeria'
					author='Abdul Abdul'
				/>

				<SecurityBlog
					imageUrl='/images/n8.jpg'
					date='09 Mar 2024'
					title='Chronicles of the Sahel: Exploring the Historical Tapestry of Northern Nigeria'
					author='Bello Edati'
				/>

				<SecurityBlog
					imageUrl='/images/n6.jpg'
					date='18 Dec 2024'
					title='Beyond the Horizon: A Journey Through Centuries of Northern Nigerian History'
					author='Musa Adam'
				/>
			</div>
		</div>
	);
};

export default HistoryDesk;
