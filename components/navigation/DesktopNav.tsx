"use client"

import React, { useState } from "react";

const DesktopNav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItemsLeft = [
		{ label: "Economy", href: "/" },
		{ label: "Elections", href: "/" },
		{ label: "Opinions", href: "/" },
		
	];

	const menuItemsRight = [
		
		{ label: "Religion", href: "/" },
		{ label: "Regionals", href: "/" },
		{ label: "Security", href: "/" },
	];


	return (
		<div className='hidden md:flex absolute inset-x-0 z-40 bg-transparent'>
			<div className='px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<div className='relative flex items-center justify-between lg:justify-center lg:space-x-16'>
					<ul className='flex items-center space-x-8 lg:flex'>
						{menuItemsLeft.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									aria-label={item.label}
									title={item.label}
									className='headeMenus hover:text-orange-300 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
					<a
						href='/'
						aria-label='Company'
						title='Company'
						className='inline-flex items-center'
					>
						<span className='logo text-3xl font-bold tracking-wide text-gray-100 '>
							NorthernFront
						</span>
					</a>
					<ul className='flex items-center  space-x-8 lg:flex'>
						{menuItemsRight.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									aria-label={item.label}
									title={item.label}
									className='headeMenus hover:text-orange-300 font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400'
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
					
				</div>
			</div>
		</div>
	);
};

export default DesktopNav;
