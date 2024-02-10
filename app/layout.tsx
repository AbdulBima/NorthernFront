import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNav from "@/components/navigation/DesktopNav";
import DeskFooter from "@/components/navigation/DeskFooter";
import MobileNavbar from "@/components/navigation/MobileNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NorthernFront",
	description: "Northern Politics",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='overflow-x-hidden w-[100vw]'>
				<DesktopNav />
				<MobileNavbar />
				{children}
				<DeskFooter />
			</body>
		</html>
	);
}
