import React from "react";
import Image from "next/image";

const DeskLanding = () => {
	return (
		<>
			{" "}
			<div className='hidden md:flex'>
				<div className="relative h-[100vh] w-full bg-[url('/images/n9.jpg')] bg-cover bg-left md:bg-center bg-no-repeat">
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent  '></div>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-600 opacity-20 to-transparent'></div>

					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-black to-transparent'></div>

					<div className=' flex flex-col z-10 absolute h-[40vh] w-[90vw] items-start bottom-32 left-16'>
						<div>
							<span className='headeMenus text-white absolute top-0  opacity-90'>
								Leadership
							</span>
						</div>

						<div className='mt-2 opacity-90'>
							<a href='/blog'>
								<h2 className='mainHeaderD text-white mt-10 text-4xl text-left pr-80 mr-20 hover:text-yellow-300'>
									Northern Nigeria Charts
									a New Course: Political
									Cooperation and Social
									Progress Transforming
									the Region
								</h2>{" "}
							</a>
						</div>
						<span className='absolute bottom-8 flex -mt-10 items-center'>
							<span className='h-px w-[90vw]  bg-white'></span>
							{/* <span className='pl-6'>
								Lorem, ipsum dolor
							</span> */}
						</span>
						<button className='readMore -bottom-28'>
							{" "}
							Read Post
						</button>
					</div>
				</div>
			</div>
			<div className=' flex md:hidden'>
				<div className="relative  h-[80vh] w-full bg-[url('/images/n9.jpg')] bg-cover bg-left md:bg-center bg-no-repeat">
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent  '></div>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-yellow-600 opacity-20 to-transparent'></div>

					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b opacity-90 from-black to-transparent'></div>

					<div>
						<span className='left-4 headeMenus  absolute top-72 text-yellow-500  opacity-90'>
							Leadership
						</span>
					</div>

					<div className=' left-4 absolute bottom-40 mt-2 '>
						<a href='/blog'>
							<h2 className='mobileLandingTitle text-2xl font-bold text-white mt-10 pr-6  text-left  hover:text-yellow-100'>
								Northern Nigeria Charts a
								New Course: Political
								Cooperation and Social
								Progress Transforming the
								Region
							</h2>{" "}
						</a>
					</div>
					<span className='left-4 absolute bottom-28 flex -mt-10 items-center'>
						<span className='h-px w-[85vw]  bg-white'></span>
						{/* <span className='pl-6'>
								Lorem, ipsum dolor
							</span> */}
					</span>
					<button className='left-4 absolute readMore bottom-10'>
						{" "}
						Read Post
					</button>
				</div>
			</div>
		</>
	);
};

export default DeskLanding;
