"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ZodType, z } from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
	email: string;
};

// Extracting the form validation schema to a separate function
const getValidationSchema = (): ZodType<FormData> =>
	z.object({
		email: z.string().email(),
	});

// Extracting the form component to a separate function
const EmailForm = ({
	register,
	handleSubmit,
	errors,
	handleEmailChange,
	email,
	isLoading,
}: {
	register: any;
	handleSubmit: any;
	errors: any;
	handleEmailChange: (
		e: React.ChangeEvent<HTMLInputElement>
	) => void;
	email: string;
	isLoading: boolean;
}) => (
	<form onSubmit={handleSubmit}>
		<input
			placeholder='Email'
			{...register("email")}
			value={email}
			onChange={handleEmailChange}
			required
			type='text'
			className='flex-grow w-full mt-4 md:w-[20vw] h-12 px-4 mb-3 rounded-none transition duration-200 bg-white border border-gray-300 shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
		/>
		{errors.email && (
			<span className='text-red-600'>
				{errors.email.message}
			</span>
		)}
		{isLoading ? (
			<div className='flex mt-6 justify-center items-center'>
				<div className='btld mt-10'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		) : (
			<button
				type='submit'
				className='w-full md:w-[10vw] text-center bg-orange-500 px-2 py-2 text-black mt-2 md:mt-0'
			>
				Sign up
			</button>
		)}
	</form>
);

// Extracting the API call logic to a separate function
const sendToDBS = async (email: string) => {
	try {
		const response = await axios.post(
			"https://backendv2-smz4.onrender.com/api/reader",
			{
				email: email,
			}
		);

		return response;
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
};

const DeskFooter = () => {
	const [email, setEmail] = useState<string>("");
	const [isLoading, setIsLoading] =
		useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(getValidationSchema()),
	});

	const handleEmailChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setEmail(e.target.value);
	};

	const onSubmit = async (data: FormData) => {
		setIsLoading(true);

		try {
			await sendToDBS(email);

			setEmail("");

			toast.success("Thanks for subscribing", {
				position: "bottom-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		} catch (error) {
			toast.error(
				"Error! Random number is less than or equal to 0.5."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='bg-black border-t border-white border-opacity-50'>
			<div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<div className='md:flex md:space-x-10 md:justify-between pb-20 pt-6 flex flex-col md:flex-row'>
					<div className='md:flex flex flex-row space-x-16 md:flex-row md:space-x-20'>
						<div>
							<p className='blogTitleD font-medium tracking-wide text-white'>
								Pages
							</p>
							<ul className='mt-2 space-y-2'>
								<li>
									<a
										href='/'
										className='text-gray-500 headeMenus hover:text-yellow-400 transition-colors duration-300 '
									>
										Home
									</a>
								</li>
								<li>
									<a
										href='/about'
										className='text-gray-500 headeMenus hover:text-yellow-400 transition-colors duration-300 '
									>
										About
									</a>
								</li>
								<li>
									<a
										href='/contact'
										className='text-gray-500 headeMenus hover:text-yellow-400 transition-colors duration-300 '
									>
										Contact Us
									</a>
								</li>
								<li>
									<a
										href='/privacy'
										className='text-gray-500 headeMenus hover:text-yellow-400 transition-colors duration-300 '
									>
										Privacy Policy
									</a>
								</li>
							</ul>
						</div>
						<div>
							<p className='blogTitleD font-medium tracking-wide text-white'>
								Categories
							</p>
							<ul className='mt-2 space-y-2'>
								<li>
									<a
										href='/'
										className='text-gray-500 headeMenus hover:text-yellow-400 transition-colors duration-300 '
									>
										Politics
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 headeMenus hover:text-yellow-400 transition-colors duration-300 '
									>
										Economy
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 headeMenus hover:text-yellow-400 transition-colors duration-300 '
									>
										Security
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 headeMenus hover:text-yellow-400 transition-colors duration-300 '
									>
										History
									</a>
								</li>
								<li>
									<a
										href='/'
										className='text-gray-500 headeMenus hover:text-yellow-400 transition-colors duration-300 '
									>
										Opinions
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='md:max-w-full  md:mt-0 mt-20 '>
						<span className='blogTitleD  font-medium tracking-wide text-white'>
							Subscribe to our newsletter
						</span>
						<EmailForm
							register={register}
							handleSubmit={handleSubmit(
								onSubmit
							)}
							errors={errors}
							handleEmailChange={
								handleEmailChange
							}
							email={email}
							isLoading={isLoading}
						/>
					</div>
				</div>

				<div className='flex flex-col justify-between pt-5 pb-10 border-t mt-10 md:mt-0 border-white border-opacity-30 sm:flex-row'>
					<p className='headeMenus text-gray-500'>
						© Copyright NorthernFront Inc. 2024
						All rights reserved.
					</p>
					<div className='flex items-center mt-4 space-x-4 sm:mt-0'>
						<a
							href='/'
							className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'
						>
							<svg
								viewBox='0 0 24 24'
								fill='currentColor'
								className='h-5'
							>
								<path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
							</svg>
						</a>
						<a
							href='/'
							className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'
						>
							<svg
								viewBox='0 0 30 30'
								fill='currentColor'
								className='h-6'
							>
								<circle
									cx='15'
									cy='15'
									r='4'
								/>
								<path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
							</svg>
						</a>
						<a
							href='/'
							className='text-gray-500 transition-colors duration-300 hover:text-teal-accent-400'
						>
							<svg
								viewBox='0 0 24 24'
								fill='currentColor'
								className='h-5'
							>
								<path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<ToastContainer
				position='bottom-right'
				autoClose={3000} // Close toast automatically after 3 seconds
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default DeskFooter;
