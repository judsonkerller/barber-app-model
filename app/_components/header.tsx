import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
	return (
		<Card>
			<CardContent className="p-5 items-center justify-between flex flex-row">
				<Image
					src="/logo.png"
					alt="Barber App Model"
					width={120}
					height={10}
				/>
				<Button variant="outline" size="icon" className="h-8 w-8">
					<MenuIcon size={18} />
				</Button>
			</CardContent>
		</Card>
	);
};

export default Header;
