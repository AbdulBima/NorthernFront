import React from "react";
import Image from "next/image";

const LeadershipDesk = () => {
	return (
		<div className='px-4 py-16 mx-auto w-[100vw] md:px-24 lg:px-20 lg:py-20 bg-black'>
			<span className=' flex -mt-10 items-center'>
				<span className='sectionTitleD text-white'>
					History
				</span>
				<span className='h-px w-[80vw] ml-10 bg-white'></span>
			</span>

			<div className='grid mt-10 gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full'>
				<div className='overflow-hidden transition-shadow duration-300 bg-black '>
					<a href='/blog' aria-label='Article'>
						<Image
							src='https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
							className='object-cover w-full h-64 '
							alt=''
							height={64}
							width={64}
						/>
					</a>
					<div className='py-5'>
						<p className='mb-2 text-xs font-semibold text-orange-500 uppercase'>
							13 Jul 2020
						</p>
						<a
							href='/blog'
							aria-label='Article'
							className='inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700'
						>
							<p className=' blogTitleD text-2xl font-bold leading-5'>
								Diving to the deep
							</p>
						</a>

						<p className='mb-2 text-xs font-semibold mt-6  text-white  opacity-80'>
							By - Abdul
						</p>
					</div>
				</div>

				<div className='overflow-hidden transition-shadow duration-300 bg-black '>
					<a href='/blog' aria-label='Article'>
						<Image
							src='https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
							className='object-cover w-full h-64 '
							alt=''
							width={64}
							height={64}
						/>
					</a>
					<div className='py-5'>
						<p className='mb-2 text-xs font-semibold text-orange-500 uppercase'>
							13 Jul 2020
						</p>
						<a
							href='/blog'
							aria-label='Article'
							className='inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700'
						>
							<p className=' blogTitleD text-2xl font-bold leading-5'>
								Diving to the deep
							</p>
						</a>
						<p className='mb-2 text-xs font-semibold mt-6  text-white  opacity-80'>
							By - Abdul
						</p>
					</div>
				</div>

				<div className='overflow-hidden transition-shadow duration-300 bg-black '>
					<a href='/blog' aria-label='Article'>
						<Image
							src='https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
							className='object-cover w-full h-64 '
							alt=''
							height={64}
							width={64}
						/>
					</a>
					<div className='py-5'>
						<p className='mb-2 text-xs font-semibold text-orange-500 uppercase'>
							13 Jul 2020
						</p>
						<a
							href='/blog'
							aria-label='Article'
							className='inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700'
						>
							<p className=' blogTitleD text-2xl font-bold leading-5'>
								Diving to the deep
							</p>
						</a>
						<p className='mb-2 text-xs font-semibold mt-6  text-white  opacity-80'>
							By - Abdul
						</p>
					</div>
				</div>

				<div className='overflow-hidden transition-shadow duration-300 bg-black '>
					<a href='/blog' aria-label='Article'>
						<Image
							src='https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
							className='object-cover w-full h-64 '
							alt=''
							width={64}
							height={64}
						/>
					</a>
					<div className='py-5'>
						<p className='mb-2 text-xs font-semibold text-orange-500 uppercase'>
							13 Jul 2020
						</p>
						<a
							href='/blog'
							aria-label='Article'
							className='inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700'
						>
							<p className=' blogTitleD text-2xl font-bold leading-5'>
								Diving to the deep
							</p>
						</a>
						<p className='mb-2 text-xs font-semibold mt-6  text-white  opacity-80'>
							By - Abdul
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeadershipDesk;
