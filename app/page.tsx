import BlogSection1 from "@/components/DeskComponents/BlogSection1";
import DeskLanding from "@/components/DeskComponents/DeskLanding";
import EconomyDesk from "@/components/DeskComponents/EconomyDesk";
import HistoryDesk from "@/components/DeskComponents/HistoryDesk";

import PoliticsDesk from "@/components/DeskComponents/PoliticsDesk";
import SecurityDesk from "@/components/DeskComponents/SecurityDesk";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<DeskLanding />
			<BlogSection1 />
			<PoliticsDesk />
			<SecurityDesk />
			<EconomyDesk />
			<HistoryDesk />
		</>
	);
}
