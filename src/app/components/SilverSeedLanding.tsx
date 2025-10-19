"use client";
// Updated: Added expandable property analysis section

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowRight,
	CheckCircle2,
	Phone,
	Mail,
	MessageCircle,
	Star,
	Users,
	Calendar,
	X,
	ChevronDown,
	ChevronUp,
	Play,
	Image as ImageIcon,
	HelpCircle,
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
	const [showCalendar, setShowCalendar] = useState<boolean>(false);
	const [expandedProperty, setExpandedProperty] = useState<string | null>(null);
	const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
	const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
	const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = (): void => {
			const sections = [
				"hero",
				"about",
				"gallery",
				"how-we-work",
				"services",
				"roi-case-studies",
				"team",
				"testimonials",
				"why-invest",
				"track-record",
				"faq",
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

				{/* Animated Teal overlay for better text readability */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="absolute inset-0"
					style={{
						background: `linear-gradient(135deg, rgba(3, 167, 145, 0.85), rgba(3, 167, 145, 0.75))`,
						backdropFilter: "blur(1px)",
					}}
				/>

				{/* Floating animated elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					{[...Array(6)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-32 h-32 border-2 border-white/10 rounded-lg"
							initial={{ opacity: 0 }}
							animate={{
								y: [0, -30, 0],
								x: [0, 20, 0],
								rotate: [0, 180, 360],
								opacity: [0.1, 0.3, 0.1],
							}}
							transition={{
								duration: 5 + i,
								repeat: Infinity,
								delay: i * 0.7,
							}}
							style={{
								top: `${10 + i * 15}%`,
								left: `${5 + i * 15}%`,
							}}
						/>
					))}
				</div>

				{/* Content */}
				<div className="max-w-7xl mx-auto text-center relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<motion.h1
							className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}>
							{siteData.hero.title}
						</motion.h1>

						<motion.p
							className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-lg"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.6 }}>
							{siteData.hero.subtitle}
						</motion.p>

						<motion.p
							className="text-lg mb-12 max-w-2xl mx-auto text-white/95 drop-shadow-lg"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.8 }}>
							{siteData.hero.description}
						</motion.p>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
							{siteData.hero.highlights.map((highlight, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
									whileHover={{ scale: 1.05, y: -5 }}
									className="rounded-xl p-4 border-2 backdrop-blur-md shadow-lg"
									style={{
										backgroundColor: "rgba(26, 31, 58, 0.85)",
										borderColor: theme.primary,
									}}>
									<motion.div
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}>
										<CheckCircle2
											className="h-6 w-6 mb-2 mx-auto"
											style={{ color: theme.primary }}
										/>
									</motion.div>
									<p className="text-sm font-medium text-white">{highlight}</p>
								</motion.div>
							))}
						</div>

						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1.5 }}>
							<motion.button
								onClick={() => scrollToSection("services")}
								className="px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-2xl"
								style={{ backgroundColor: theme.primary, color: "#ffffff" }}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.98 }}
								onMouseEnter={(e) => {
									e.currentTarget.style.boxShadow = `0 10px 30px ${theme.primary}60`;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.boxShadow =
										"0 8px 20px rgba(0,0,0,0.3)";
								}}>
								{siteData.hero.cta.primary.text}
								<ArrowRight className="inline-block ml-2 h-5 w-5" />
							</motion.button>

							<motion.button
								onClick={() => scrollToSection("contact")}
								className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all backdrop-blur-md shadow-2xl"
								style={{
									borderColor: theme.primary,
									color: "#ffffff",
									backgroundColor: "rgba(26, 31, 58, 0.6)",
								}}
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.98 }}
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
							</motion.button>
						</motion.div>
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
							<Image
								src="/about_us_section_bg.jpg"
								alt="Silver Seed Investment - About Us"
								width={600}
								height={400}
								className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
								priority
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
								&ldquo;
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

			{/* Property Gallery Section */}
			<section
				id="gallery"
				className="py-20 px-4"
				style={{ backgroundColor: theme.background }}>
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Property Gallery
						</h2>
						<p className="text-xl max-w-3xl mx-auto" style={{ color: theme.mutedForeground }}>
							Explore our portfolio of investment properties and renovation projects
						</p>
					</motion.div>

					{/* Gallery Grid - Responsive: 1 col mobile, 2 cols sm, 3 cols md, 4 cols lg */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{[
							{ type: 'video', src: 'https://res.cloudinary.com/dxlhnxle0/video/upload/v1760849236/video_renovation_phyg11.mp4', alt: 'Renovation Project', label: 'Renovation Project' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760849229/01_teocxc.png', alt: 'Property Investment 1' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760849232/02_vvlxb2.png', alt: 'Property Investment 2' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760849230/03_sh9l54.png', alt: 'Property Investment 3' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760849232/04_pvmqjq.png', alt: 'Property Investment 4' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760849233/05_cxkzd3.png', alt: 'Property Investment 5' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760849233/06_wgmiwy.png', alt: 'Property Investment 6' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760849229/07_jr599c.png', alt: 'Property Investment 7' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760849230/08_vw5oye.png', alt: 'Property Investment 8' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760850664/niagra_falls_usa_dxgbeg.jpg', alt: 'Niagara Falls USA Property', label: 'Niagara Falls, USA' },
							{ type: 'image', src: 'https://res.cloudinary.com/dxlhnxle0/image/upload/v1760850664/niagra_falls_usa2_rebkbr.jpg', alt: 'Niagara Falls USA Property 2', label: 'Niagara Falls, USA' },
						].map((media, index) => (
							<motion.div
								key={index}
								{...fadeInUp}
								className="relative group rounded-2xl overflow-hidden cursor-pointer aspect-square hover:scale-105 transition-transform"
								style={{
									backgroundColor: theme.card,
									border: `2px solid ${theme.border}`,
								}}
								onClick={() => {
									setSelectedMedia(media.src);
									if (media.type === 'video') setIsVideoPlaying(true);
								}}>
								{media.type === 'video' ? (
									<>
										<video
											className="w-full h-full object-cover"
											muted
											loop
											playsInline>
											<source src={media.src} type="video/mp4" />
										</video>
										<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
											<Play className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform" fill="white" />
										</div>
									</>
								) : (
									<>
										<Image
											src={media.src}
											alt={media.alt}
											width={400}
											height={400}
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
									</>
								)}
								{media.label && (
									<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
										<p className="text-white font-semibold text-sm">{media.label}</p>
									</div>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Media Lightbox Modal */}
			<AnimatePresence>
				{selectedMedia && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
						onClick={() => {
							setSelectedMedia(null);
							setIsVideoPlaying(false);
						}}>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="relative max-w-5xl w-full"
							onClick={(e) => e.stopPropagation()}>
							{/* Close Button */}
							<button
								onClick={() => {
									setSelectedMedia(null);
									setIsVideoPlaying(false);
								}}
								className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
								style={{
									backgroundColor: "#EF4444",
									color: "#ffffff",
								}}
								aria-label="Close media">
								<X className="w-6 h-6" strokeWidth={3} />
							</button>

							{/* Media Content */}
							<div className="rounded-2xl overflow-hidden shadow-2xl">
								{selectedMedia.includes('.mp4') ? (
									<video
										className="w-full h-auto max-h-[80vh]"
										controls
										autoPlay={isVideoPlaying}
										playsInline>
										<source src={selectedMedia} type="video/mp4" />
									</video>
								) : (
									<Image
										src={selectedMedia}
										alt="Property Detail"
										width={1200}
										height={800}
										className="w-full h-auto max-h-[80vh] object-contain"
									/>
								)}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

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

					<div className="relative max-w-5xl mx-auto">
						{/* Vertical connecting line for desktop */}
						<div
							className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2"
							style={{
								background: `linear-gradient(to bottom, ${theme.primary}40, ${theme.accent}60)`,
							}}
						/>

						{siteData.howWeWork.steps.map((step, index) => {
							const Icon = step.icon;
							const isEven = index % 2 === 0;

							return (
								<motion.div
									key={step.id}
									initial={{ opacity: 0, x: isEven ? -50 : 50 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="relative mb-12 md:mb-16 last:mb-0">
									{/* Step Number Circle - centered on line for desktop */}
									<div
										className={`hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 w-20 h-20 rounded-full items-center justify-center font-bold text-3xl shadow-lg z-10 border-4`}
										style={{
											backgroundColor: theme.primary,
											color: "#ffffff",
											borderColor: theme.background,
										}}>
										{step.id}
									</div>

									{/* Content Card */}
									<div
										className={`md:w-[calc(50%-60px)] ${
											isEven ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
										}`}>
										<div
											className="rounded-2xl p-6 md:p-8 border-2 shadow-lg relative"
											style={{
												backgroundColor: theme.card,
												borderColor: theme.border,
											}}>
											{/* Mobile step number (shown only on mobile) */}
											<div
												className="md:hidden w-16 h-16 rounded-xl flex items-center justify-center font-bold text-2xl mb-4 mx-auto"
												style={{
													backgroundColor: theme.primary,
													color: "#ffffff",
												}}>
												{step.id}
											</div>

											{/* Arrow pointing to center line (desktop only) */}
											<div
												className={`hidden md:block absolute top-8 ${
													isEven ? "right-0 translate-x-full" : "left-0 -translate-x-full"
												} w-12 h-0.5`}
												style={{ backgroundColor: theme.primary }}
											/>

											{/* Icon and Title */}
											<div className="flex items-start gap-4 mb-4">
												<div
													className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
													style={{
														backgroundColor: `${theme.accent}30`,
													}}>
													<Icon
														className="h-7 w-7"
														style={{ color: theme.primary }}
													/>
												</div>
												<div className="flex-1">
													<h3 className="text-2xl font-bold mb-2">
														{step.title}
													</h3>
													<p className="text-lg opacity-90">{step.description}</p>
												</div>
											</div>

											{/* Details List */}
											<ul className="grid md:grid-cols-2 gap-3 mt-6">
												{step.details.map((detail, i) => (
													<li key={i} className="flex items-start gap-2">
														<CheckCircle2
															className="h-5 w-5 flex-shrink-0 mt-0.5"
															style={{ color: theme.accent }}
														/>
														<span className="text-sm md:text-base">{detail}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</motion.div>
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
			<section
				id="roi-case-studies"
				className="py-20 px-4 relative overflow-hidden"
				style={{
					backgroundImage:
						"url('https://static.tildacdn.com/tild3932-3030-4463-b130-353836336366/2.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}>
				{/* Green Overlay */}
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(135deg, ${theme.primary}E8, ${theme.accent}E8)`,
					}}
				/>

				{/* Content */}
				<div className="max-w-7xl mx-auto relative z-10">
					<motion.div
						className="text-center mb-16"
						{...fadeInUp}
						style={{ color: "#ffffff" }}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.roiCaseStudies.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto opacity-95">
							{siteData.roiCaseStudies.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-8 mb-16">
						{siteData.roiCaseStudies.caseStudies.map((study) => {
							const Icon = study.icon;
							return (
								<motion.div
									key={study.id}
									{...fadeInUp}
									className="rounded-2xl p-8 border-2 backdrop-blur-sm hover:scale-105 transition-transform"
									style={{
										backgroundColor: "rgba(255, 255, 255, 0.95)",
										borderColor: theme.primary,
										boxShadow: `0 8px 30px rgba(0,0,0,0.3)`,
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
								</motion.div>
							);
						})}
					</div>

					{/* Detailed Property Analysis - Expandable */}
					<div className="mb-16">
						<motion.div
							{...fadeInUp}
							className="rounded-2xl overflow-hidden backdrop-blur-sm"
							style={{
								backgroundColor: "rgba(255, 255, 255, 0.95)",
								border: `2px solid ${theme.primary}`,
								boxShadow: `0 8px 30px rgba(0,0,0,0.3)`,
							}}>
							{/* Header - Clickable */}
							<button
								onClick={() => setExpandedProperty(expandedProperty === 'willow' ? null : 'willow')}
								className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-opacity-50 transition-all"
								style={{
									backgroundColor: theme.primary + "10",
								}}>
								<div className="text-left">
									<h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: theme.primary }}>
										Detailed Investment Analysis
									</h3>
									<p className="text-lg" style={{ color: theme.foreground }}>
										1338 Willow Ave - 4 Bed, 2 Bath, 2 Unit Building
									</p>
									<p className="text-sm mt-1" style={{ color: theme.mutedForeground }}>
										Niagara Falls, NY 14301, USA
									</p>
								</div>
								<div className="flex-shrink-0 ml-4">
									{expandedProperty === 'willow' ? (
										<ChevronUp className="w-8 h-8" style={{ color: theme.primary }} />
									) : (
										<ChevronDown className="w-8 h-8" style={{ color: theme.primary }} />
									)}
								</div>
							</button>

							{/* Expandable Content */}
							<AnimatePresence>
								{expandedProperty === 'willow' && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden">
										<div className="p-6 md:p-8 space-y-8">
											{/* Property Details Section */}
											<div>
												<h4 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ color: theme.primary, borderColor: theme.primary }}>
													Property Details
												</h4>
												<div className="grid md:grid-cols-2 gap-4">
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Property Address</span>
														<span className="font-semibold text-right" style={{ color: theme.foreground }}>1338 Willow Ave, Niagara Falls, NY</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Property Type</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>2 Unit Building / 4bd 2br</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Bedrooms</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>4</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Bathrooms</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>2</span>
													</div>
												</div>
											</div>

											{/* Financial Overview Section */}
											<div>
												<h4 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ color: theme.primary, borderColor: theme.primary }}>
													Financial Overview
												</h4>
												<div className="grid md:grid-cols-2 gap-4">
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>List Price</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$105,000</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Market Price</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$105,000</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Expected Purchase Price</span>
														<span className="font-semibold text-green-600">$95,000</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Closing Costs</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$1,500</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Cap Expenditure Est.</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$16,000</span>
													</div>
													<div className="flex justify-between py-2 border-b font-bold" style={{ borderColor: theme.primary }}>
														<span style={{ color: theme.primary }}>Total Acquisition Cost</span>
														<span style={{ color: theme.primary }}>$112,500</span>
													</div>
													<div className="flex justify-between py-2 border-b md:col-span-2" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Max Monthly Rent</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$29,400 <span className="text-sm" style={{ color: theme.mutedForeground }}>(per year)</span></span>
													</div>
												</div>
											</div>

											{/* Investment Returns Section */}
											<div>
												<h4 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ color: theme.primary, borderColor: theme.primary }}>
													Investment Returns
												</h4>
												<div className="grid md:grid-cols-2 gap-4">
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Investor Return (sub SSI)</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$25,725 <span className="text-sm" style={{ color: theme.mutedForeground }}>(annual)</span></span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Investor Rent % (sub SSI)</span>
														<span className="font-semibold text-green-600">23%</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Est. Capital Gain (3yr)</span>
														<span className="font-semibold text-green-600">20%</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Potential RoI (3yr sub SSI)</span>
														<span className="font-semibold text-green-600">29%</span>
													</div>
													<div className="flex justify-between py-2 border-b font-bold text-lg" style={{ borderColor: theme.primary }}>
														<span style={{ color: theme.primary }}>3yr RoI (est. sub SSI)</span>
														<span className="text-green-600">73%</span>
													</div>
													<div className="flex justify-between py-2 border-b font-bold text-lg" style={{ borderColor: theme.primary }}>
														<span style={{ color: theme.primary }}>Total Annual Return</span>
														<span className="text-green-600">24%</span>
													</div>
												</div>
											</div>

											{/* Recurring Expenses Section */}
											<div>
												<h4 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ color: theme.primary, borderColor: theme.primary }}>
													Recurring Expenses
												</h4>
												<div className="grid md:grid-cols-2 gap-4">
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Annual Property Tax</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$804</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Brokerage Estimate</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$1,300</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Maintenance Est.</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$500</span>
													</div>
													<div className="flex justify-between py-2 border-b" style={{ borderColor: theme.border }}>
														<span style={{ color: theme.mutedForeground }}>Annual EBIT (sub SSI)</span>
														<span className="font-semibold" style={{ color: theme.foreground }}>$23,121</span>
													</div>
													<div className="flex justify-between py-2 border-b font-bold" style={{ borderColor: theme.primary }}>
														<span style={{ color: theme.primary }}>After Tax Income (sub SSI)</span>
														<span style={{ color: theme.primary }}>$20,809</span>
													</div>
													<div className="flex justify-between py-2 border-b font-bold" style={{ borderColor: theme.primary }}>
														<span style={{ color: theme.primary }}>Annual RoI (sub SSI)</span>
														<span className="text-green-600 text-xl">18%</span>
													</div>
												</div>
											</div>

											{/* Summary Highlights */}
											<div className="rounded-xl p-6" style={{ backgroundColor: theme.primary + "10" }}>
												<h4 className="text-lg font-bold mb-3" style={{ color: theme.primary }}>
													Investment Highlights
												</h4>
												<div className="grid md:grid-cols-3 gap-4">
													<div className="text-center p-4 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
														<div className="text-3xl font-bold text-green-600">24%</div>
														<div className="text-sm mt-1" style={{ color: theme.mutedForeground }}>Annual Return</div>
													</div>
													<div className="text-center p-4 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
														<div className="text-3xl font-bold text-green-600">73%</div>
														<div className="text-sm mt-1" style={{ color: theme.mutedForeground }}>3-Year ROI</div>
													</div>
													<div className="text-center p-4 rounded-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
														<div className="text-3xl font-bold" style={{ color: theme.primary }}>$25,725</div>
														<div className="text-sm mt-1" style={{ color: theme.mutedForeground }}>Annual Income</div>
													</div>
												</div>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					</div>

					{/* ROI Trend Chart - Recharts Implementation */}
					<div
						className="rounded-2xl p-6 md:p-12 backdrop-blur-sm"
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.95)",
							border: `2px solid ${theme.primary}60`,
							boxShadow: `0 8px 30px rgba(0,0,0,0.3)`,
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
										formatter={(value: number) => [`${value}%`, "ROI"]}
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
									<Image
										src={review.image}
										alt={review.name}
										width={64}
										height={64}
										className="w-16 h-16 rounded-full object-cover"
										style={{
											border: `3px solid ${theme.primary}`,
											boxShadow: `0 4px 12px ${theme.primary}30`,
										}}
									/>
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
				className="py-20 px-4 relative overflow-hidden"
				style={{
					backgroundImage: "url('https://blog.homesmart.com/hubfs/Imported_Blog_Media/handshake-1.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}>
				{/* Green Teal Overlay */}
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(135deg, rgba(3, 167, 145, 0.88), rgba(3, 167, 145, 0.82))`,
						backdropFilter: "blur(1px)",
					}}
				/>

				{/* Content */}
				<div className="max-w-7xl mx-auto relative z-10">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-xl">
							{siteData.whyInvest.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto text-white drop-shadow-lg">
							{siteData.whyInvest.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{siteData.whyInvest.advantages.map((advantage) => {
							const Icon = advantage.icon;
							return (
								<motion.div
									key={advantage.id}
									{...fadeInUp}
									className="rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all"
									style={{
										backgroundColor: "rgba(255, 255, 255, 0.95)",
										border: `2px solid ${theme.primary}`,
										boxShadow: `0 8px 30px rgba(0,0,0,0.3)`,
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
								</motion.div>
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
											className="rounded-2xl overflow-hidden hover:scale-105 transition-all relative"
											style={{
												border: `2px solid ${theme.border}`,
												boxShadow: `0 4px 20px rgba(0,0,0,0.15)`,
											}}>
											{/* Background Image */}
											<div
												className="absolute inset-0"
												style={{
													backgroundImage: `url('${strategy.backgroundImage}')`,
													backgroundSize: "cover",
													backgroundPosition: "center",
												}}
											/>

											{/* Overlay */}
											<div
												className="absolute inset-0"
												style={{
													background: `linear-gradient(135deg, rgba(3, 167, 145, 0.92), rgba(3, 167, 145, 0.88))`,
												}}
											/>

											{/* Content */}
											<div className="relative z-10 p-6">
												<Icon
													className="h-12 w-12 mb-4"
													style={{ color: "#ffffff" }}
												/>
												<h4 className="text-xl font-bold mb-3 text-white">
													{strategy.title}
												</h4>
												<p className="mb-4 text-sm text-white/95">
													{strategy.description}
												</p>

												<ul className="space-y-2 mb-4">
													{strategy.benefits.map((benefit, i) => (
														<li key={i} className="flex items-start text-sm text-white">
															<span className="mr-2">✓</span>
															<span>{benefit}</span>
														</li>
													))}
												</ul>

												<div
													className="text-xs italic p-3 rounded-lg font-semibold backdrop-blur-sm"
													style={{
														backgroundColor: "rgba(255, 255, 255, 0.25)",
														color: "#ffffff",
													}}>
													<strong>Example:</strong> {strategy.example}
												</div>
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

			{/* FAQ Section */}
			<section
				id="faq"
				className="py-20 px-4 relative overflow-hidden"
				style={{
					backgroundImage: "url('/faq-bg.jpeg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed",
				}}>
				{/* Metallic Overlay with Theme Color */}
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(135deg, ${theme.primary}F0, ${theme.accent}E8, ${theme.primary}F0)`,
						backdropFilter: "blur(2px)",
					}}
				/>

				{/* Metallic Shine Effect */}
				<div
					className="absolute inset-0 opacity-20"
					style={{
						background: `
							linear-gradient(
								135deg,
								transparent 0%,
								rgba(255, 255, 255, 0.4) 25%,
								transparent 50%,
								rgba(255, 255, 255, 0.3) 75%,
								transparent 100%
							)
						`,
						backgroundSize: "200% 200%",
						animation: "shimmer 8s ease-in-out infinite",
					}}
				/>

				<style jsx>{`
					@keyframes shimmer {
						0%, 100% { background-position: 0% 0%; }
						50% { background-position: 100% 100%; }
					}
				`}</style>

				<div className="max-w-5xl mx-auto relative z-10">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<div className="flex items-center justify-center gap-3 mb-4">
							<div
								className="p-3 rounded-full shadow-lg"
								style={{
									backgroundColor: "rgba(255, 255, 255, 0.95)",
									boxShadow: `0 0 30px ${theme.primary}80`,
								}}>
								<HelpCircle
									className="h-12 w-12"
									style={{ color: theme.primary }}
								/>
							</div>
							<h2
								className="text-4xl md:text-5xl font-bold drop-shadow-lg"
								style={{
									color: "#ffffff",
									textShadow: `2px 2px 4px rgba(0,0,0,0.3), 0 0 20px ${theme.primary}60`,
								}}>
								{siteData.faq.title}
							</h2>
						</div>
						<p
							className="text-xl max-w-3xl mx-auto font-medium drop-shadow-md"
							style={{
								color: "#ffffff",
								textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
							}}>
							{siteData.faq.subtitle}
						</p>
					</motion.div>

					{/* FAQ Categories */}
					<div className="space-y-8">
						{siteData.faq.categories.map((category, catIndex) => (
							<motion.div
								key={category.category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: catIndex * 0.1 }}>
								{/* Category Title */}
								<h3
									className="text-2xl font-bold mb-6 pb-3 border-b-2 drop-shadow-md"
									style={{
										borderColor: "rgba(255, 255, 255, 0.6)",
										color: "#ffffff",
										textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
									}}>
									{category.category}
								</h3>

								{/* Questions in Category */}
								<div className="space-y-4">
									{category.questions.map((faq, index) => {
										const faqId = `${category.category}-${index}`;
										const isExpanded = expandedFAQ === faqId;

										return (
											<motion.div
												key={faqId}
												className="rounded-xl border-2 overflow-hidden transition-all shadow-lg hover:shadow-2xl"
												style={{
													backgroundColor: "rgba(255, 255, 255, 0.95)",
													borderColor: isExpanded ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
													backdropFilter: "blur(10px)",
													boxShadow: isExpanded
														? `0 8px 32px ${theme.primary}60, inset 0 0 20px rgba(255,255,255,0.5)`
														: "0 4px 16px rgba(0,0,0,0.2)",
												}}>
												{/* Question Button */}
												<button
													onClick={() =>
														setExpandedFAQ(isExpanded ? null : faqId)
													}
													className="w-full p-6 flex items-center justify-between gap-4 text-left hover:opacity-80 transition-opacity">
													<span
														className="text-lg font-semibold flex-1"
														style={{ color: theme.primary }}>
														{faq.question}
													</span>
													{isExpanded ? (
														<ChevronUp
															className="h-6 w-6 flex-shrink-0"
															style={{ color: theme.primary }}
														/>
													) : (
														<ChevronDown
															className="h-6 w-6 flex-shrink-0"
															style={{ color: theme.primary }}
														/>
													)}
												</button>

												{/* Answer */}
												<AnimatePresence>
													{isExpanded && (
														<motion.div
															initial={{ height: 0, opacity: 0 }}
															animate={{ height: "auto", opacity: 1 }}
															exit={{ height: 0, opacity: 0 }}
															transition={{ duration: 0.3 }}
															className="overflow-hidden">
															<div
																className="px-6 pb-6 pt-2 border-t"
																style={{
																	borderColor: `${theme.primary}30`,
																	backgroundColor: "rgba(255, 255, 255, 0.5)",
																}}>
																<p
																	className="text-base leading-relaxed"
																	style={{ color: theme.foreground }}>
																	{faq.answer}
																</p>
															</div>
														</motion.div>
													)}
												</AnimatePresence>
											</motion.div>
										);
									})}
								</div>
							</motion.div>
						))}
					</div>

					{/* Still Have Questions CTA */}
					<motion.div
						{...fadeInUp}
						className="mt-16 text-center rounded-2xl p-8 md:p-12 shadow-2xl"
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.95)",
							border: "2px solid rgba(255, 255, 255, 0.6)",
							backdropFilter: "blur(10px)",
							boxShadow: `0 8px 32px ${theme.primary}60, inset 0 0 20px rgba(255,255,255,0.5)`,
						}}>
						<h3
							className="text-2xl md:text-3xl font-bold mb-4"
							style={{ color: theme.primary }}>
							Still Have Questions?
						</h3>
						<p
							className="text-lg mb-6 max-w-2xl mx-auto"
							style={{ color: theme.foreground }}>
							Our team is here to help! Schedule a free consultation to discuss
							your investment goals and get personalized answers.
						</p>
						<button
							onClick={() => setShowCalendar(true)}
							className="px-8 py-4 rounded-xl font-bold text-lg text-white hover:scale-105 transition-all shadow-lg hover:shadow-2xl"
							style={{
								backgroundColor: theme.primary,
								boxShadow: `0 4px 20px ${theme.primary}60`,
							}}>
							Schedule Free Consultation
						</button>
					</motion.div>
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
								href="tel:+1-365-292-6333"
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
								<div className="text-lg font-bold">+1-365-292-6333</div>
							</a>

							{/* WhatsApp */}
							<a
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
								<div className="text-lg font-bold">+1-365-292-6333</div>
							</a>

							{/* Email */}
							<a
								href="mailto:info@silverseedinv.com"
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
									info@silverseedinv.com
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

							<button
								onClick={() => setShowCalendar(true)}
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
								Book Your FREE Consultation Today
								<ArrowRight className="h-6 w-6" />
							</button>

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

		{/* Calendar Modal - Embedded in Page */}
		<AnimatePresence>
			{showCalendar && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
					onClick={() => setShowCalendar(false)}>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
						style={{ backgroundColor: theme.background }}
						onClick={(e) => e.stopPropagation()}>
						{/* Close Button */}
						<button
							onClick={() => setShowCalendar(false)}
							className="absolute top-4 right-4 z-[10000] w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:rotate-90 shadow-lg"
							style={{
								backgroundColor: "#EF4444",
								color: "#ffffff",
							}}
							aria-label="Close calendar">
							<X className="w-6 h-6" strokeWidth={3} />
						</button>						{/* Calendar Header */}
						<div
							className="p-6 border-b"
							style={{
								backgroundColor: theme.primary,
								borderColor: theme.border,
							}}>
							<h3 className="text-2xl font-bold text-white text-center">
								Schedule Your Free Consultation
							</h3>
							<p className="text-white/90 text-center mt-2">
								Book a 30-minute call with our investment experts
							</p>
						</div>

						{/* Google Calendar Iframe */}
						<div className="w-full" style={{ height: "600px" }}>
							<iframe
								src="https://calendar.app.google/B1bjFky7pVrc1zTJ8"
								className="w-full h-full border-0"
								title="Book a consultation with Silver Seed Investments"
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	</div>
);
};

export default SilverSeedLanding;
