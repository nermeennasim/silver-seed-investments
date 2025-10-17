"use client";

import { useState, useEffect } from "react";
import SilverSeedLanding from "./components/SilverSeedLanding";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Show loading screen for at least 3 seconds
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{isLoading && <LoadingScreen />}
			<SilverSeedLanding />
		</>
	);
}
