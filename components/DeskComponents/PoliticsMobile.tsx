import Image from "next/image";
import React from "react";
import Article from "../Article";

const PoliticsMobile = () => {
	return (
		<div className='flex flex-col -mt-10 md:hidden bg-white py-4 h-[55vh]'>
			<span className=' flex  items-center'>
				<span className='sectionTitleD ml-4'>
					Politics
				</span>
				<span className='h-px w-[60vw] ml-4 mr-4 bg-black'></span>
			</span>
			<div className='w-[100vw] overflow-x-hidden'>
				<div className='carousel carousel-center max-w-md p-4 space-x-4 bg-neutral '>
					<div className='carousel-item w-[70vw]'>
						<Article
							imageUrl='/images/kwankwaso.jpg'
							date='2024-07-15'
							title='Governor Rabiu Kwankwaso: Pioneering People-Centric Governance in Kano'
						/>
					</div>

					<div className='carousel-item w-[70vw]'>
						<Article
							imageUrl='/images/elrufai.jpg'
							date='2022-10-10'
							title='Into the North:
							Decoding the
							Political Game with
							Mallam El-Rufai'
						/>
					</div>

					<div className='carousel-item w-[70vw]'>
						<Article
							imageUrl='/images/shettima.jpeg'
							date='2024-05-23'
							title='Navigating Leadership: A Conversation with Kashim Shettima'
						/>
					</div>

					<div className='carousel-item w-[70vw]'>
						<Article
							imageUrl='/images/matawalle.jpg'
							date='2022-10-10'
							title="Zamfara's Symphony of Transformation: Bello Matawalle&apost;s Leadership Overture"
						/>
					</div>
				</div>
			</div>
			{/* Other content */}
		</div>
	);
};

export default PoliticsMobile;
