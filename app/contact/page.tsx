import React from "react";

const Contact = () => {
	return (
		<>
			<div className="hidden md:flex w-[100vw] h-[50vh] bg-[url('/images/security4.jpg')] ">
				<div className='absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent  '></div>

				<div className='absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b  from-black to-transparent'></div>
			</div>
			<div
				id='contact-us'
				className='overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:pt-0 lg:pb-40'
			>
				<div className='relative mx-auto md:mt-20 max-w-xl'>
					<div className='text-center'>
						<h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
							Contact Us
						</h2>
						<p className='blogPageTitle mt-4 text-lg leading-6 text-gray-500'>
							Please use the form below to
							contact us. Thank you!
						</p>
					</div>
					<div className='mt-12'>
						<form className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
							<div className='sm:col-span-2'>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700'
								>
									Name
								</label>
								<div className='mt-1'>
									<input
										name='name'
										type='text'
										id='name'
										autoComplete='organization'
										required
										className='border-gray-700 block w-full border rounded-none py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-gray-700'
								>
									Email
								</label>
								<div className='mt-1'>
									<input
										name='email'
										id='email'
										required
										type='email'
										autoComplete='email'
										className='border-gray-700 block w-full rounded-none border py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700'
								>
									Message
								</label>
								<div className='mt-1'>
									<textarea
										required
										name='message'
										id='message'
										rows={4}
										className='border-gray-700 block w-full border rounded-none py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500'
									></textarea>
								</div>
							</div>
							<div className='flex justify-end sm:col-span-2'>
								<button
									type='submit'
									className='inline-flex items-center px-4 py-2 bg-yellow-500 text-white font-medium focus:outline-none focus-visible:ring focus-visible:ring-sky-500 shadow-sm transition-colors duration-75 hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 disabled:cursor-not-allowed'
								>
									<span>
										Send Message
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
