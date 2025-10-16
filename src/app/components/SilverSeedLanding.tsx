"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import {
	ArrowRight,
	CheckCircle2,
	Phone,
	Mail,
	MessageCircle,
	Star,
	Users,
	Calendar,
} from "lucide-react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Cell,
	LabelList,
} from "recharts";
import siteData from "@/data/seedData";
import Navigation from "./Navigation";
import Footer from "./Footer";

const SilverSeedLanding: React.FC = () => {
	const { theme } = useTheme();
	const [activeSection, setActiveSection] = useState<string>("hero");
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = (): void => {
			const sections = [
				"hero",
				"about",
				"how-we-work",
				"services",
				"roi-case-studies",
				"team",
				"testimonials",
				"why-invest",
				"track-record",
				"contact",
			];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string): void => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	if (!mounted) return null;

	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.5 },
	};

	return (
		<div
			className="min-h-screen"
			style={{ backgroundColor: theme.background, color: theme.foreground }}>
			<Navigation
				activeSection={activeSection}
				scrollToSection={scrollToSection}
			/>

			{/* Hero Section with Carousel */}
			<section
				id="hero"
				className="relative pt-32 pb-20 px-4 min-h-screen flex items-center overflow-hidden">
				{/* Background Carousel - 3 Images */}
				<div className="absolute inset-0">
					{/* Image 1 - Cityscape */}
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"url(https://kd-sip.ru/upload/iblock/597/5975d6da8f123f533aec0e17e27d2982.jpg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							animation: "fadeInOut 30s ease-in-out infinite",
						}}
					/>
					{/* Image 2 - Modern Building Interior */}
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/195028675.jpg?k=19059db510b8e9cd9bcd7219b1cb96645e28445fb5379d0a937549231c7a86dd&o=&hp=1)",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							animation: "fadeInOut 30s ease-in-out infinite 10s",
						}}
					/>
					{/* Image 3 - Luxury Property */}
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"url(https://i.pinimg.com/originals/01/e8/00/01e800a02b3d28ba18e59e21b1c6c082.jpg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							animation: "fadeInOut 30s ease-in-out infinite 20s",
						}}
					/>
				</div>

				{/* Teal overlay for better text readability */}
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(135deg, rgba(3, 167, 145, 0.85), rgba(3, 167, 145, 0.75))`,
						backdropFilter: "blur(1px)",
					}}
				/>

				{/* Content */}
				<div className="max-w-7xl mx-auto text-center relative z-10">
					<motion.div {...fadeInUp}>
						<h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
							{siteData.hero.title}
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-lg">
							{siteData.hero.subtitle}
						</p>
						<p className="text-lg mb-12 max-w-2xl mx-auto text-white/95 drop-shadow-lg">
							{siteData.hero.description}
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
							{siteData.hero.highlights.map((highlight, index) => (
								<div
									key={index}
									className="rounded-xl p-4 border-2 backdrop-blur-md shadow-lg"
									style={{
										backgroundColor: "rgba(26, 31, 58, 0.85)",
										borderColor: theme.primary,
									}}>
									<CheckCircle2
										className="h-6 w-6 mb-2 mx-auto"
										style={{ color: theme.primary }}
									/>
									<p className="text-sm font-medium text-white">{highlight}</p>
								</div>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button
								onClick={() => scrollToSection("services")}
								className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-2xl"
								style={{ backgroundColor: theme.primary, color: "#ffffff" }}
								onMouseEnter={(e) => {
									e.currentTarget.style.boxShadow = `0 10px 30px ${theme.primary}60`;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.boxShadow =
										"0 8px 20px rgba(0,0,0,0.3)";
								}}>
								{siteData.hero.cta.primary.text}
								<ArrowRight className="inline-block ml-2 h-5 w-5" />
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all hover:scale-105 backdrop-blur-md shadow-2xl"
								style={{
									borderColor: theme.primary,
									color: "#ffffff",
									backgroundColor: "rgba(26, 31, 58, 0.6)",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor =
										"rgba(26, 31, 58, 0.9)";
									e.currentTarget.style.borderColor = theme.accent;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor =
										"rgba(26, 31, 58, 0.6)";
									e.currentTarget.style.borderColor = theme.primary;
								}}>
								{siteData.hero.cta.secondary.text}
							</button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* About SSI Section */}
			<section
				id="about"
				className="py-20 px-4"
				style={{ backgroundColor: theme.muted }}>
				<div className="max-w-7xl mx-auto">
					{/* Title and Image Row */}
					<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
						{/* Left: About Us Title */}
						<motion.div {...fadeInUp}>
							<h2 className="text-5xl md:text-6xl font-bold mb-6">
								{siteData.about.title}
							</h2>
							<p className="text-xl leading-relaxed">
								{siteData.about.subtitle}
							</p>
						</motion.div>

						{/* Right: Rounded Image */}
						<motion.div
							{...fadeInUp}
							className="rounded-3xl overflow-hidden h-[350px] md:h-[400px]"
							style={{
								boxShadow: `0 10px 40px ${theme.primary}40`,
							}}>
							<img
								src="/about_us_section_bg.jpg"
								alt="Silver Seed Investment - About Us"
								className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
							/>
						</motion.div>
					</div>

					{/* Quotation Section */}
					<motion.div
						{...fadeInUp}
						className="rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden"
						style={{
							backgroundColor: theme.card,
							border: `2px solid ${theme.primary}20`,
						}}>
						<div
							className="absolute top-0 left-0 w-2 h-full"
							style={{ backgroundColor: theme.primary }}
						/>
						<div className="max-w-4xl mx-auto text-center">
							<div
								className="text-7xl md:text-8xl mb-6 leading-none"
								style={{ color: theme.primary, opacity: 0.2 }}>
								"
							</div>
							<blockquote className="text-2xl md:text-3xl font-semibold italic mb-8 leading-relaxed">
								{siteData.about.quote.text}
							</blockquote>
							<p
								className="text-xl font-bold tracking-wide"
								style={{ color: theme.primary }}>
								— {siteData.about.quote.author}
							</p>
						</div>
					</motion.div>

					{/* Description Section */}
					<div className="mb-16">
						<div className="grid md:grid-cols-2 gap-12">
							<motion.div {...fadeInUp}>
								<h3 className="text-3xl font-bold mb-6">Our Mission</h3>
								<p className="text-lg leading-relaxed">
									{siteData.about.mission}
								</p>
							</motion.div>
							<motion.div {...fadeInUp}>
								<h3 className="text-3xl font-bold mb-6">Our Philosophy</h3>
								<p className="text-lg leading-relaxed">
									{siteData.about.philosophy}
								</p>
							</motion.div>
						</div>
					</div>

					{/* Unique Value Cards */}
					<div className="grid md:grid-cols-3 gap-8">
						{siteData.about.uniqueValue.map((value) => {
							const Icon = value.icon;
							return (
								<motion.div
									key={value.title}
									{...fadeInUp}
									className="rounded-2xl p-6 text-center hover:scale-105 transition-all"
									style={{
										backgroundColor: theme.card,
										border: `2px solid ${theme.border}`,
									}}>
									<div
										className="inline-flex p-4 rounded-xl mb-4"
										style={{ backgroundColor: theme.primary + "20" }}>
										<Icon
											className="h-8 w-8"
											style={{ color: theme.primary }}
										/>
									</div>
									<h4 className="text-xl font-bold mb-3">{value.title}</h4>
									<p>{value.description}</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* How We Work Section */}
			<section id="how-we-work" className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.howWeWork.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							{siteData.howWeWork.subtitle}
						</p>
					</motion.div>

					<div className="space-y-8">
						{siteData.howWeWork.steps.map((step) => {
							const Icon = step.icon;
							return (
								<div
									key={step.id}
									className="rounded-2xl p-8 border-2"
									style={{
										backgroundColor: theme.card,
										borderColor: theme.border,
									}}>
									<div className="flex flex-col md:flex-row gap-6">
										<div className="flex-shrink-0">
											<div
												className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-2xl"
												style={{
													backgroundColor: theme.primary,
													color: "#ffffff",
												}}>
												{step.id}
											</div>
										</div>

										<div className="flex-1">
											<div className="flex items-start gap-4 mb-4">
												<Icon
													className="h-8 w-8 flex-shrink-0"
													style={{ color: theme.primary }}
												/>
												<div>
													<h3 className="text-2xl font-bold mb-2">
														{step.title}
													</h3>
													<p className="text-lg">{step.description}</p>
												</div>
											</div>

											<ul className="grid md:grid-cols-2 gap-3 ml-12">
												{step.details.map((detail, i) => (
													<li key={i} className="flex items-start gap-2">
														<CheckCircle2
															className="h-5 w-5 flex-shrink-0 mt-0.5"
															style={{ color: theme.accent }}
														/>
														<span>{detail}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				id="services"
				className="py-20 px-4 relative overflow-hidden"
				style={{
					backgroundImage:
						"url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1MqVJW.img?w=940&h=705&m=4&q=68')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}>
				{/* Light Green Overlay */}
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(135deg, ${theme.accent}F5, #E9F5BEEF)`,
					}}
				/>

				{/* Content */}
				<div className="max-w-7xl mx-auto relative z-10">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.services.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto mb-2">
							{siteData.services.subtitle}
						</p>
						<p className="text-lg max-w-2xl mx-auto">
							{siteData.services.description}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{siteData.services.offerings.map((service) => {
							const Icon = service.icon;
							return (
								<motion.div
									key={service.id}
									{...fadeInUp}
									className="rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all backdrop-blur-sm"
									style={{
										backgroundColor: "rgba(255, 255, 255, 0.95)",
										border: `2px solid ${theme.primary}30`,
										boxShadow: `0 4px 20px rgba(0,0,0,0.15)`,
									}}>
									<div
										className="inline-flex p-4 rounded-xl mb-4"
										style={{
											backgroundColor: theme.primary + "20",
											boxShadow: `0 4px 12px ${theme.primary}30`,
										}}>
										<Icon
											className="h-8 w-8"
											style={{ color: theme.primary }}
										/>
									</div>
									<h3 className="text-xl font-bold mb-3">{service.title}</h3>
									<p className="mb-4">{service.description}</p>

									<ul className="space-y-2 mb-4">
										{service.benefits.map((benefit, i) => (
											<li key={i} className="flex items-start gap-2 text-sm">
												<CheckCircle2
													className="h-4 w-4 flex-shrink-0 mt-0.5"
													style={{ color: theme.accent }}
												/>
												<span>{benefit}</span>
											</li>
										))}
									</ul>

									<div
										className="rounded-lg p-3 text-center font-semibold"
										style={{
											backgroundColor: theme.primary + "15",
											color: theme.primary,
										}}>
										{service.highlight}
									</div>
									<p className="text-sm mt-3 italic">{service.savings}</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* ROI Case Studies Section */}
			<section id="roi-case-studies" className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.roiCaseStudies.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							{siteData.roiCaseStudies.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-8 mb-16">
						{siteData.roiCaseStudies.caseStudies.map((study) => {
							const Icon = study.icon;
							return (
								<div
									key={study.id}
									className="rounded-2xl p-8 border-2"
									style={{
										backgroundColor: theme.card,
										borderColor: theme.primary,
									}}>
									<div className="flex items-start justify-between mb-4">
										<div>
											<div
												className="inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-3"
												style={{
													backgroundColor: theme.primary + "20",
													color: theme.primary,
												}}>
												{study.type}
											</div>
											<h3 className="text-2xl font-bold mb-2">{study.title}</h3>
										</div>
										<Icon
											className="h-12 w-12 flex-shrink-0"
											style={{ color: theme.primary }}
										/>
									</div>
									<p className="mb-6">{study.description}</p>

									<div className="grid grid-cols-2 gap-4 mb-6">
										{study.metrics.map((metric, i) => (
											<div key={i}>
												<div className="text-sm mb-1">{metric.label}</div>
												<div
													className="text-2xl font-bold"
													style={{ color: theme.primary }}>
													{metric.value}
												</div>
											</div>
										))}
									</div>
								</div>
							);
						})}
					</div>

					{/* ROI Trend Chart - Recharts Implementation */}
					<div
						className="rounded-2xl p-6 md:p-12"
						style={{
							backgroundColor: theme.card,
							border: `2px solid ${theme.border}`,
						}}>
						<div className="text-center mb-8 md:mb-12">
							<h3 className="text-2xl md:text-3xl font-bold mb-3">
								{siteData.roiCaseStudies.roiTrend.title}
							</h3>
							<p
								className="text-base md:text-lg"
								style={{ color: theme.mutedForeground }}>
								Consistent growth from 20% to 37% ROI
							</p>
						</div>

						{/* Recharts Bar Chart */}
						<div className="w-full h-[300px] md:h-[400px]">
							<ResponsiveContainer width="100%" height="100%">
								<BarChart
									data={siteData.roiCaseStudies.roiTrend.data}
									margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
									<CartesianGrid
										strokeDasharray="3 3"
										stroke={theme.border}
										opacity={0.3}
									/>
									<XAxis
										dataKey="year"
										tick={{ fill: theme.foreground, fontSize: 14 }}
										tickLine={{ stroke: theme.border }}
										axisLine={{ stroke: theme.border }}
									/>
									<YAxis
										domain={[0, 40]}
										ticks={[0, 10, 20, 30, 40]}
										tick={{ fill: theme.mutedForeground, fontSize: 12 }}
										tickLine={{ stroke: theme.border }}
										axisLine={{ stroke: theme.border }}
										label={{
											value: "ROI (%)",
											angle: -90,
											position: "insideLeft",
											style: {
												fill: theme.mutedForeground,
												fontSize: 14,
												fontWeight: 600,
											},
										}}
									/>
									<Tooltip
										contentStyle={{
											backgroundColor: theme.card,
											border: `2px solid ${theme.primary}`,
											borderRadius: "12px",
											boxShadow: `0 4px 20px ${theme.primary}40`,
										}}
										labelStyle={{ color: theme.foreground, fontWeight: 600 }}
										itemStyle={{ color: theme.primary, fontWeight: 700 }}
										formatter={(value: any) => [`${value}%`, "ROI"]}
									/>
									<Bar
										dataKey="roi"
										fill={theme.primary}
										radius={[12, 12, 0, 0]}
										animationDuration={1000}>
										{siteData.roiCaseStudies.roiTrend.data.map(
											(entry, index) => (
												<Cell
													key={`cell-${index}`}
													fill={`url(#gradient-${index})`}
												/>
											)
										)}
										<LabelList
											dataKey="roi"
											position="top"
											formatter={(value: any) => `${value}%`}
											style={{
												fill: theme.primary,
												fontWeight: 700,
												fontSize: 16,
											}}
										/>
									</Bar>
									<defs>
										{siteData.roiCaseStudies.roiTrend.data.map((_, index) => (
											<linearGradient
												key={`gradient-${index}`}
												id={`gradient-${index}`}
												x1="0"
												y1="0"
												x2="0"
												y2="1">
												<stop
													offset="0%"
													stopColor={theme.accent}
													stopOpacity={1}
												/>
												<stop
													offset="100%"
													stopColor={theme.primary}
													stopOpacity={1}
												/>
											</linearGradient>
										))}
									</defs>
								</BarChart>
							</ResponsiveContainer>
						</div>

						{/* Summary Stats */}
						<div
							className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t"
							style={{ borderColor: theme.border }}>
							<div className="text-center p-4 md:p-0">
								<div
									className="text-xs md:text-sm mb-1"
									style={{ color: theme.mutedForeground }}>
									Starting ROI
								</div>
								<div
									className="text-xl md:text-2xl font-bold"
									style={{ color: theme.accent }}>
									20%
								</div>
							</div>
							<div className="text-center p-4 md:p-0">
								<div
									className="text-xs md:text-sm mb-1"
									style={{ color: theme.mutedForeground }}>
									Total Growth
								</div>
								<div
									className="text-xl md:text-2xl font-bold"
									style={{ color: theme.primary }}>
									+17%
								</div>
							</div>
							<div className="text-center p-4 md:p-0">
								<div
									className="text-xs md:text-sm mb-1"
									style={{ color: theme.mutedForeground }}>
									Current ROI
								</div>
								<div
									className="text-xl md:text-2xl font-bold"
									style={{ color: theme.primary }}>
									37%
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTIONS REMOVED: Investment Mistakes & Investment Opportunities - Now merged into "The SSI Advantage" section below */}

			{/* SECTION REMOVED: Common Misconceptions - Duplicate content with Investment Mistakes */}

			{/* Team Section */}
			<section
				id="team"
				className="py-20 px-4 relative overflow-hidden"
				style={{
					backgroundImage:
						"url('https://www.sutisoft.com/blog/wp-content/uploads/2015/04/iStock_000019688253_Medium-e1347908824981.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}>
				{/* Dark Green/Teal Overlay */}
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(135deg, ${theme.primary}F0, #00594DED)`,
					}}
				/>

				{/* Content */}
				<div className="max-w-7xl mx-auto relative z-10">
					<motion.div
						className="text-center mb-16"
						{...fadeInUp}
						style={{ color: "#ffffff" }}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.team.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto opacity-95">
							{siteData.team.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{siteData.team.members.map((member) => (
							<motion.div
								key={member.id}
								{...fadeInUp}
								className="rounded-2xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all backdrop-blur-sm"
								style={{
									backgroundColor: "rgba(255, 255, 255, 0.95)",
									border: `2px solid ${theme.accent}40`,
									boxShadow: `0 4px 20px rgba(0,0,0,0.3)`,
								}}>
								<div
									className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
									style={{
										background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
										boxShadow: `0 6px 20px ${theme.primary}60`,
									}}>
									<Users className="h-12 w-12" style={{ color: "#ffffff" }} />
								</div>
								<h3 className="text-xl font-bold mb-1">{member.name}</h3>
								<p
									className="text-sm font-semibold mb-2"
									style={{ color: theme.primary }}>
									{member.title}
								</p>
								<p className="text-sm mb-3">{member.experience}</p>
								<p className="text-sm">{member.bio}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.testimonials.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							{siteData.testimonials.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8">
						{siteData.testimonials.reviews.map((review) => (
							<motion.div
								key={review.id}
								{...fadeInUp}
								className="rounded-2xl p-8 hover:shadow-2xl transition-all"
								style={{
									backgroundColor: theme.card,
									border: `1px solid ${theme.border}`,
								}}>
								{/* Star Rating */}
								<div className="flex gap-1 mb-4">
									{[...Array(review.rating)].map((_, i) => (
										<Star
											key={i}
											className="h-5 w-5 fill-current"
											style={{ color: theme.primary }}
										/>
									))}
								</div>

								{/* Quote */}
								<blockquote className="text-lg italic mb-6 leading-relaxed">
									&ldquo;{review.quote}&rdquo;
								</blockquote>

								{/* Client Info with Image */}
								<div className="flex items-center gap-4 mb-4">
									<img
										src={review.image}
										alt={review.name}
										className="w-16 h-16 rounded-full object-cover"
										style={{
											border: `3px solid ${theme.primary}`,
											boxShadow: `0 4px 12px ${theme.primary}30`,
										}}
										onError={(e) => {
											// Fallback to initial if image fails to load
											e.currentTarget.style.display = "none";
											e.currentTarget.nextElementSibling?.classList.remove(
												"hidden"
											);
										}}
									/>
									<div
										className="w-16 h-16 rounded-full hidden items-center justify-center font-bold text-xl"
										style={{
											backgroundColor: theme.primary,
											color: "#ffffff",
											border: `3px solid ${theme.primary}`,
										}}>
										{review.name.charAt(0)}
									</div>
									<div className="flex-1">
										<div className="font-bold text-lg">{review.name}</div>
										<div
											className="text-sm font-medium"
											style={{ color: theme.primary }}>
											{review.role}
										</div>
										<div className="text-sm opacity-75">{review.location}</div>
									</div>
								</div>

								{/* Investment Details */}
								<div
									className="flex justify-between text-sm pt-4 border-t"
									style={{ borderColor: theme.border }}>
									<span className="opacity-75">{review.investment}</span>
									<span className="font-bold" style={{ color: theme.primary }}>
										{review.roi}
									</span>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Why Invest Section */}
			<section
				id="why-invest"
				className="py-20 px-4"
				style={{ backgroundColor: theme.muted }}>
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.whyInvest.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							{siteData.whyInvest.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{siteData.whyInvest.advantages.map((advantage) => {
							const Icon = advantage.icon;
							return (
								<div
									key={advantage.id}
									className="rounded-2xl p-6"
									style={{
										backgroundColor: theme.card,
										border: `2px solid ${theme.primary}`,
									}}>
									<div
										className="inline-flex p-4 rounded-xl mb-4"
										style={{ backgroundColor: theme.primary + "20" }}>
										<Icon
											className="h-8 w-8"
											style={{ color: theme.primary }}
										/>
									</div>
									<h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
									<p>{advantage.description}</p>
								</div>
							);
						})}
					</div>

					{/* REMOVED: Comparison Table - Now in "SSI Advantage" section for better positioning */}
				</div>
			</section>

			{/* The SSI Advantage: Your Investment Options Compared */}
			<section id="ssi-advantage" className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							The SSI Advantage: Your Investment Options Compared
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							Smart, hands-on investment that grows with you
						</p>
					</motion.div>

					{/* Comparison: DIY vs REIT vs SSI */}
					<div className="grid md:grid-cols-3 gap-8 mb-20">
						{siteData.roiCaseStudies.investmentMistakes.options.map(
							(option) => {
								const Icon = option.icon;
								return (
									<div
										key={option.id}
										className="rounded-2xl p-8 text-center"
										style={{
											backgroundColor: option.isRecommended
												? theme.primary + "10"
												: theme.card,
											border: `2px solid ${
												option.isRecommended ? theme.primary : theme.border
											}`,
										}}>
										<Icon
											className="h-16 w-16 mx-auto mb-4"
											style={{
												color: option.isRecommended
													? theme.primary
													: theme.mutedForeground,
											}}
										/>
										<h3 className="text-2xl font-bold mb-4">{option.title}</h3>

										{option.problems && (
											<ul className="space-y-2 text-left">
												{option.problems.map((problem, i) => (
													<li
														key={i}
														className="flex items-start"
														style={{ color: theme.destructive }}>
														<span className="mr-2">✗</span>
														<span>{problem}</span>
													</li>
												))}
											</ul>
										)}

										{option.benefits && (
											<ul className="space-y-2 text-left">
												{option.benefits.map((benefit, i) => (
													<li
														key={i}
														className="flex items-start"
														style={{ color: theme.primary }}>
														<span className="mr-2">✓</span>
														<span>{benefit}</span>
													</li>
												))}
											</ul>
										)}

										{option.isRecommended && (
											<div
												className="mt-6 px-4 py-2 rounded-full font-semibold"
												style={{
													backgroundColor: theme.primary,
													color: theme.primaryForeground,
												}}>
												Recommended Choice
											</div>
										)}
									</div>
								);
							}
						)}
					</div>

					{/* Strategic Investment Opportunities */}
					<div
						className="rounded-3xl p-8 md:p-12 mb-12"
						style={{
							background: `linear-gradient(135deg, ${theme.primary}15, ${theme.accent}15)`,
							border: `2px solid ${theme.primary}40`,
						}}>
						<div className="text-center mb-12">
							<h3 className="text-3xl md:text-4xl font-bold mb-4">
								What We Look For: Strategic Opportunities
							</h3>
							<p
								className="text-lg max-w-3xl mx-auto"
								style={{ color: theme.mutedForeground }}>
								Our investment approach focuses on properties with maximum
								growth and cash flow potential
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{siteData.roiCaseStudies.opportunities.strategies.map(
								(strategy) => {
									const Icon = strategy.icon;
									return (
										<div
											key={strategy.id}
											className="rounded-2xl p-6 hover:scale-105 transition-all"
											style={{
												backgroundColor: theme.card,
												border: `2px solid ${theme.border}`,
											}}>
											<Icon
												className="h-12 w-12 mb-4"
												style={{ color: theme.primary }}
											/>
											<h4 className="text-xl font-bold mb-3">
												{strategy.title}
											</h4>
											<p
												className="mb-4 text-sm"
												style={{ color: theme.mutedForeground }}>
												{strategy.description}
											</p>

											<ul className="space-y-2 mb-4">
												{strategy.benefits.map((benefit, i) => (
													<li key={i} className="flex items-start text-sm">
														<span
															className="mr-2"
															style={{ color: theme.primary }}>
															✓
														</span>
														<span>{benefit}</span>
													</li>
												))}
											</ul>

											<div
												className="text-xs italic p-3 rounded-lg font-semibold"
												style={{
													backgroundColor: theme.primary + "20",
													color: theme.primary,
												}}>
												<strong>Example:</strong> {strategy.example}
											</div>
										</div>
									);
								}
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Track Record Section */}
			<section id="track-record" className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.trackRecord.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							{siteData.trackRecord.subtitle}
						</p>
					</motion.div>

					{/* Stats */}
					<div className="grid md:grid-cols-4 gap-6 mb-16">
						<div
							className="rounded-2xl p-6 text-center"
							style={{
								backgroundColor: theme.card,
								border: `1px solid ${theme.border}`,
							}}>
							<div
								className="text-4xl font-bold mb-2"
								style={{ color: theme.primary }}>
								{siteData.trackRecord.stats.averageROIGrowth.from}% →{" "}
								{siteData.trackRecord.stats.averageROIGrowth.to}%
							</div>
							<div>Average ROI Growth</div>
						</div>
						<div
							className="rounded-2xl p-6 text-center"
							style={{
								backgroundColor: theme.card,
								border: `1px solid ${theme.border}`,
							}}>
							<div
								className="text-4xl font-bold mb-2"
								style={{ color: theme.primary }}>
								{siteData.trackRecord.stats.managedAssets}
							</div>
							<div>Managed Assets</div>
						</div>
						<div
							className="rounded-2xl p-6 text-center"
							style={{
								backgroundColor: theme.card,
								border: `1px solid ${theme.border}`,
							}}>
							<div
								className="text-4xl font-bold mb-2"
								style={{ color: theme.primary }}>
								{siteData.trackRecord.stats.clientsServed}
							</div>
							<div>Clients Served</div>
						</div>
						<div
							className="rounded-2xl p-6 text-center"
							style={{
								backgroundColor: theme.card,
								border: `1px solid ${theme.border}`,
							}}>
							<div
								className="text-4xl font-bold mb-2"
								style={{ color: theme.primary }}>
								{siteData.trackRecord.stats.yearsActive}+
							</div>
							<div>Years Active</div>
						</div>
					</div>

					{/* Interactive Timeline */}
					<div className="relative max-w-5xl mx-auto">
						{/* Vertical connecting line */}
						<div
							className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 top-0"
							style={{
								background: `linear-gradient(to bottom, ${theme.primary}, ${theme.accent})`,
							}}
						/>

						{/* Timeline items with alternating layout */}
						{siteData.trackRecord.timeline.map((item, index) => {
							const Icon = item.icon;
							const isLeft = index % 2 === 0;

							return (
								<motion.div
									key={item.year}
									initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className={`relative flex items-center mb-16 ${
										isLeft ? "flex-row" : "flex-row-reverse"
									}`}>
									{/* Content Card */}
									<div className="w-5/12">
										<div
											className="rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
											style={{
												backgroundColor: theme.card,
												border: `2px solid ${theme.border}`,
												boxShadow: `0 4px 20px ${theme.primary}20`,
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.borderColor = theme.primary;
												e.currentTarget.style.boxShadow = `0 8px 30px ${theme.primary}40`;
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.borderColor = theme.border;
												e.currentTarget.style.boxShadow = `0 4px 20px ${theme.primary}20`;
											}}>
											<div className="flex items-start gap-3 mb-3">
												<Icon
													className="h-7 w-7 flex-shrink-0 group-hover:scale-110 transition-transform"
													style={{ color: theme.primary }}
												/>
												<h3 className="text-xl font-bold leading-tight">
													{item.milestone}
													{item.roi && (
														<span
															className="block text-2xl mt-1"
															style={{ color: theme.primary }}>
															{item.roi}% ROI
														</span>
													)}
												</h3>
											</div>
											<p
												className="text-sm leading-relaxed"
												style={{ color: theme.mutedForeground }}>
												{item.description}
											</p>
											{item.clients && (
												<div
													className="mt-3 inline-block px-3 py-1 rounded-full text-sm font-semibold"
													style={{
														backgroundColor: theme.primary + "20",
														color: theme.primary,
													}}>
													{item.clients} Clients
												</div>
											)}
										</div>
									</div>

									{/* Center Year Badge */}
									<div className="absolute left-1/2 transform -translate-x-1/2 z-10">
										<motion.div
											initial={{ scale: 0 }}
											whileInView={{ scale: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
											className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg"
											style={{
												backgroundColor: theme.background,
												border: `4px solid ${theme.primary}`,
												color: theme.primary,
											}}>
											{item.year}
										</motion.div>
									</div>

									{/* Spacer for opposite side */}
									<div className="w-5/12" />
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 px-4"
				style={{ backgroundColor: theme.muted }}>
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Get In Touch
						</h2>
						<p className="text-xl max-w-3xl mx-auto mb-4">
							Ready to start your real estate investment journey?
						</p>
						<p className="text-lg max-w-2xl mx-auto">
							Contact us today to discuss your investment goals and discover how
							we can help you build wealth through real estate.
						</p>
					</motion.div>

					<div className="max-w-4xl mx-auto">
						{/* Contact Methods Grid */}
						<div className="grid md:grid-cols-3 gap-6 mb-12">
							{/* Phone */}
							<a
								href="tel:+14379841806"
								className="flex flex-col items-center text-center p-8 rounded-2xl hover:scale-105 transition-all group"
								style={{
									backgroundColor: theme.card,
									border: `2px solid ${theme.border}`,
								}}>
								<div
									className="p-4 rounded-full mb-4 group-hover:scale-110 transition-all"
									style={{
										backgroundColor: theme.primary + "20",
										border: `2px solid ${theme.primary}`,
									}}>
									<Phone className="h-8 w-8" style={{ color: theme.primary }} />
								</div>
								<div
									className="text-sm font-semibold mb-2"
									style={{ color: theme.mutedForeground }}>
									Call Us
								</div>
								<div className="text-lg font-bold">+1-437-984-1806</div>
							</a>

							{/* WhatsApp */}
							<a
								href="https://wa.me/966596237616"
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center text-center p-8 rounded-2xl hover:scale-105 transition-all group"
								style={{
									backgroundColor: theme.card,
									border: `2px solid ${theme.border}`,
								}}>
								<div
									className="p-4 rounded-full mb-4 group-hover:scale-110 transition-all"
									style={{
										backgroundColor: theme.accent + "20",
										border: `2px solid ${theme.accent}`,
									}}>
									<MessageCircle
										className="h-8 w-8"
										style={{ color: theme.accent }}
									/>
								</div>
								<div
									className="text-sm font-semibold mb-2"
									style={{ color: theme.mutedForeground }}>
									WhatsApp
								</div>
								<div className="text-lg font-bold">+966-596-237-616</div>
							</a>

							{/* Email */}
							<a
								href="mailto:admin@silverseedinv.com"
								className="flex flex-col items-center text-center p-8 rounded-2xl hover:scale-105 transition-all group"
								style={{
									backgroundColor: theme.card,
									border: `2px solid ${theme.border}`,
								}}>
								<div
									className="p-4 rounded-full mb-4 group-hover:scale-110 transition-all"
									style={{
										backgroundColor: theme.accent + "20",
										border: `2px solid ${theme.accent}`,
									}}>
									<Mail className="h-8 w-8" style={{ color: theme.accent }} />
								</div>
								<div
									className="text-sm font-semibold mb-2"
									style={{ color: theme.mutedForeground }}>
									Email Us
								</div>
								<div className="text-lg font-bold break-all">
									admin@silverseedinv.com
								</div>
							</a>
						</div>

						{/* Schedule a Call CTA */}
						<div
							className="rounded-2xl p-12 text-center"
							style={{
								background: `linear-gradient(135deg, ${theme.primary}20, ${theme.accent}20)`,
								border: `2px solid ${theme.primary}`,
							}}>
							<div
								className="inline-flex p-4 rounded-full mb-6"
								style={{ backgroundColor: theme.primary }}>
								<Calendar className="h-12 w-12" style={{ color: "#ffffff" }} />
							</div>

							<h3 className="text-3xl font-bold mb-4">
								Schedule a Free Consultation
							</h3>
							<p
								className="text-lg mb-8 max-w-2xl mx-auto"
								style={{ color: theme.mutedForeground }}>
								Book a 30-minute call with our investment experts to discuss
								your goals and explore opportunities.
							</p>

							<a
								href="https://calendly.com/silverseedinvestments"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-2xl"
								style={{ backgroundColor: theme.primary, color: "#ffffff" }}
								onMouseEnter={(e) => {
									e.currentTarget.style.boxShadow = `0 15px 40px ${theme.primary}60`;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.boxShadow =
										"0 8px 20px rgba(0,0,0,0.3)";
								}}>
								<Calendar className="h-6 w-6" />
								Book Your Call Now
								<ArrowRight className="h-6 w-6" />
							</a>

							<p
								className="text-sm mt-6"
								style={{ color: theme.mutedForeground }}>
								Available Monday - Friday, 9 AM - 6 PM EST
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default SilverSeedLanding;
