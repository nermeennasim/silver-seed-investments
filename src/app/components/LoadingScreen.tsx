"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Building2, DollarSign } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

export default function LoadingScreen() {
	const [progress, setProgress] = useState(0);
	const [roi, setRoi] = useState(20);
	const [isLoading, setIsLoading] = useState(true);

	// Generate random positions once to avoid hydration mismatch
	const backgroundShapes = useMemo(() => {
		return [...Array(20)].map(() => ({
			top: Math.random() * 100,
			left: Math.random() * 100,
			duration: 3 + Math.random() * 2,
			delay: Math.random() * 2,
		}));
	}, []);

	useEffect(() => {
		// Simulate loading progress
		const progressInterval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(progressInterval);
					setTimeout(() => setIsLoading(false), 500);
					return 100;
				}
				return prev + 2;
			});
		}, 30);

		// Animate ROI increase
		const roiInterval = setInterval(() => {
			setRoi((prev) => {
				if (prev >= 37) {
					clearInterval(roiInterval);
					return 37;
				}
				return prev + 1;
			});
		}, 60);

		return () => {
			clearInterval(progressInterval);
			clearInterval(roiInterval);
		};
	}, []);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 0.5 }}
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950"
				>
				{/* Animated Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-0 left-0 w-full h-full">
						{backgroundShapes.map((shape, i) => (
							<motion.div
								key={i}
								className="absolute w-32 h-32 border border-teal-400/20 rounded-lg"
								style={{
									top: `${shape.top}%`,
									left: `${shape.left}%`,
								}}
								animate={{
									y: [0, -30, 0],
									rotate: [0, 180, 360],
									opacity: [0.1, 0.3, 0.1],
								}}
								transition={{
									duration: shape.duration,
									repeat: Infinity,
									delay: shape.delay,
								}}
							/>
						))}
					</div>
				</div>					{/* Main Loading Content */}
					<div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
						{/* Logo or Company Name */}
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="mb-8"
						>
							<div className="flex items-center gap-3 mb-4">
								<motion.div
									animate={{
										rotate: [0, 360],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "linear",
									}}
									className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-xl"
								>
									<Building2 className="w-8 h-8 text-white" />
								</motion.div>
								<h1 className="text-4xl md:text-5xl font-bold text-white">
									Silver Seed
									<span className="block text-2xl md:text-3xl font-light text-teal-300">
										Investments
									</span>
								</h1>
							</div>
						</motion.div>

						{/* ROI Growth Animation */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="mb-8"
						>
							<div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-teal-400/20 shadow-2xl">
								<div className="flex items-center justify-center gap-3 mb-4">
									<TrendingUp className="w-8 h-8 text-teal-300" />
									<span className="text-xl text-teal-200 font-medium">
										Growing Your Wealth
									</span>
								</div>

								<motion.div
									key={roi}
									initial={{ scale: 1.2, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									className="flex items-center justify-center gap-2"
								>
									<span className="text-7xl md:text-8xl font-bold text-white">
										{roi}
									</span>
									<span className="text-4xl md:text-5xl font-light text-teal-300">
										%
									</span>
								</motion.div>

								<p className="text-teal-200 mt-4 text-lg">
									Average ROI Growth
								</p>

								{/* Animated Coins */}
								<div className="flex justify-center gap-2 mt-6">
									{[0, 1, 2].map((i) => (
										<motion.div
											key={i}
											animate={{
												y: [0, -15, 0],
												rotate: [0, 360],
											}}
											transition={{
												duration: 1.5,
												repeat: Infinity,
												delay: i * 0.2,
											}}
											className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg"
										>
											<DollarSign className="w-6 h-6 text-white" />
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>

						{/* Progress Bar */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className="w-full max-w-md"
						>
							<div className="bg-white/10 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-teal-400/20">
								<motion.div
									className="h-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-full shadow-lg"
									initial={{ width: 0 }}
									animate={{ width: `${progress}%` }}
									transition={{ duration: 0.3 }}
								/>
							</div>
							<p className="text-teal-200 mt-3 text-sm">
								Loading your investment portal... {progress}%
							</p>
						</motion.div>

						{/* Tagline */}
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7 }}
							className="text-teal-300 mt-6 text-lg font-light"
						>
							Growing Wealth Together
						</motion.p>
					</div>

					{/* Decorative Elements */}
					<motion.div
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.1, 0.3],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
						}}
						className="absolute inset-0 bg-gradient-radial from-teal-400/10 via-transparent to-transparent"
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}