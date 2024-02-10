import Image from "next/image";
import React from "react";
import BlogPost from "../BlogPost";
import PoliticsMobile from "./PoliticsMobile";

const PoliticsDesk = () => {
	return (
		<>
			<section className='hidden md:flex bg-white'>
				<div className='container px-10 py-5 mx-auto m-10'>
					<span className=' flex  items-center'>
						<span className='sectionTitleD '>
							Politics
						</span>
						<span className='h-px w-[80vw] ml-10 bg-black'></span>
					</span>
					<div className='lg:flex lg:-mx-6 mt-10'>
						<div className='w-[40vw] lg:px-6'>
							<a href='/blog'>
								<Image
									className='object-cover object-center w-full h-80 xl:h-[28rem] transition hover:shadow-xl hover:opacity-80'
									src='/images/elrufai.jpg'
									alt=''
									width={50}
									height={80}
									unoptimized
								/>{" "}
							</a>
							<div>
								<a href='/blog'>
									<p className='headMenus mt-6 text-sm text-yellow-500 uppercase'>
										Politics
									</p>
								</a>

								<a href='/blog'>
									<h1 className='blogTitleD hover:opacity-90 transition max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800'>
										Into the North:
										Decoding the
										Political Game with
										Mallam El-Rufai
									</h1>
								</a>

								<div className='flex items-center mt-6'>
									<a href='/blog'>
										<Image
											className='object-cover object-center w-10 h-10 rounded-full'
											src='/images/f1.jpg'
											alt=''
											width={10}
											height={10}
											unoptimized
										/>
									</a>

									<div className='mx-4'>
										<a href='/blog'>
											<h1 className='headMenus text-sm text-gray-700'>
												by - Abdul
												Abdul
											</h1>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='w-[60vw] lg:mt-0 lg:px-6'>
							<BlogPost
								date='2024-08-05'
								title='Navigating Leadership: A Conversation with Kashim Shettima'
								imageUrl='/images/shettima.jpeg'
								content="Growing up in Maiduguri, I never imagined I'd find myself in the political arena. But life has its twists. My journey into politics started with a deep-seated desire to contribute to the development of my community. It's one thing to witness change; it's another.."
								link='#'
							/>

							<BlogPost
								date='2024-06-10'
								title='Governor Rabiu Kwankwaso: Pioneering People-Centric Governance in Kano'
								imageUrl='/images/kwankwaso.jpg'
								content="From early political aspirations to the helm of governance in Kano, Rabiu Kwankwaso's narrative is one of passion and purpose."
								link='#'
							/>

							<BlogPost
								date='2024-07-17'
								title="Zamfara's Symphony of Transformation: Bello Matawalle&apost;s Leadership Overture"
								imageUrl='/images/matawalle.jpg'
								content="In the serene echoes of Zamfara, we follow the harmonious notes of Matawalle's political journey, a tale that began with a genuine desire to serve the people. "
								link='#'
							/>
						</div>
					</div>
				</div>
			</section>

			<div className='flex md:hidden '>
				<PoliticsMobile />
			</div>
		</>
	);
};

export default PoliticsDesk;
