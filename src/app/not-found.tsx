// src/app/not-found.tsx
"use client";

import React from "react";
import { useTheme } from "./contexts/ThemeContext";
import { Home, ArrowLeft, Search, Building2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound: React.FC = () => {
	const { theme } = useTheme();

	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<div
			className="min-h-screen flex items-center justify-center px-4"
			style={{ backgroundColor: theme.background }}>
			<div className="max-w-2xl mx-auto text-center">
				<motion.div {...fadeInUp}>
					{/* 404 Number with gradient */}
					<div className="mb-8">
						<h1
							className="text-9xl font-bold mb-4"
							style={{
								background: theme.gradients.primary,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}>
							404
						</h1>
					</div>

					{/* Icon */}
					<div className="flex justify-center mb-6">
						<div
							className="p-6 rounded-full border-4"
							style={{
								borderColor: theme.primary,
								backgroundColor: `${theme.primary}15`,
							}}>
							<Building2
								className="h-16 w-16"
								style={{ color: theme.primary }}
							/>
						</div>
					</div>

					{/* Title */}
					<h2
						className="text-4xl font-bold mb-4"
						style={{ color: theme.foreground }}>
						Page Not Found
					</h2>

					{/* Description */}
					<p
						className="text-xl mb-8 max-w-md mx-auto"
						style={{ color: theme.mutedForeground }}>
						Oops! The property you&apos;re looking for seems to have moved.
						Let&apos;s help you find your way back to solid investment ground.
					</p>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link href="/">
							<button
								className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg"
								style={{
									backgroundColor: theme.primary,
									color: theme.primaryForeground,
								}}>
								<Home className="h-5 w-5" />
								Back to Home
							</button>
						</Link>

						<button
							onClick={() => window.history.back()}
							className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 hover:scale-105"
							style={{
								borderColor: theme.primary,
								color: theme.primary,
								backgroundColor: "transparent",
							}}>
							<ArrowLeft className="h-5 w-5" />
							Go Back
						</button>
					</div>

					{/* Helpful Links */}
					<div className="mt-12">
						<p
							className="text-sm mb-4 font-semibold"
							style={{ color: theme.mutedForeground }}>
							Quick Links:
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Link
								href="/#about"
								className="text-sm hover:underline transition-colors"
								style={{ color: theme.primary }}>
								About Us
							</Link>
							<Link
								href="/#services"
								className="text-sm hover:underline transition-colors"
								style={{ color: theme.primary }}>
								Services
							</Link>
							<Link
								href="/#roi-case-studies"
								className="text-sm hover:underline transition-colors"
								style={{ color: theme.primary }}>
								ROI Case Studies
							</Link>
							<Link
								href="/#contact"
								className="text-sm hover:underline transition-colors"
								style={{ color: theme.primary }}>
								Contact
							</Link>
						</div>
					</div>

					{/* Search Suggestion */}
					<div
						className="mt-12 p-6 rounded-xl border-2"
						style={{
							backgroundColor: theme.card,
							borderColor: theme.border,
						}}>
						<div className="flex items-center justify-center gap-2 mb-2">
							<Search className="h-5 w-5" style={{ color: theme.primary }} />
							<h3
								className="font-semibold text-lg"
								style={{ color: theme.foreground }}>
								Need Help?
							</h3>
						</div>
						<p className="text-sm" style={{ color: theme.mutedForeground }}>
							If you believe this is an error or need assistance, please{" "}
							<Link
								href="/#contact"
								className="font-semibold hover:underline"
								style={{ color: theme.primary }}>
								contact our team
							</Link>
							. We&apos;re here to help you navigate your investment journey.
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default NotFound;
