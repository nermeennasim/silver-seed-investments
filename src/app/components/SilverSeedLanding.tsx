"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import {
	ArrowRight,
	CheckCircle2,
	Phone,
	Mail,
	MapPin,
	MessageCircle,
	Star,
	Building,
	Users,
} from "lucide-react";
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

			{/* Hero Section */}
			<section id="hero" className="pt-32 pb-20 px-4">
				<div className="max-w-7xl mx-auto text-center">
					<motion.div {...fadeInUp}>
						<div className="flex justify-center mb-8">
							<div
								className="p-6 rounded-3xl shadow-2xl"
								style={{
									background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
								}}>
								<Building className="h-20 w-20" style={{ color: "#ffffff" }} />
							</div>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold mb-6">
							{siteData.hero.title}
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							{siteData.hero.subtitle}
						</p>
						<p className="text-lg mb-12 max-w-2xl mx-auto">
							{siteData.hero.description}
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
							{siteData.hero.highlights.map((highlight, index) => (
								<div
									key={index}
									className="rounded-xl p-4 border-2"
									style={{
										backgroundColor: theme.card,
										borderColor: theme.primary,
									}}>
									<CheckCircle2
										className="h-6 w-6 mb-2 mx-auto"
										style={{ color: theme.primary }}
									/>
									<p className="text-sm font-medium">{highlight}</p>
								</div>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button
								onClick={() => scrollToSection("services")}
								className="px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
								style={{ backgroundColor: theme.primary, color: "#ffffff" }}>
								{siteData.hero.cta.primary.text}
								<ArrowRight className="inline-block ml-2 h-5 w-5" />
							</button>
							<button
								onClick={() => scrollToSection("contact")}
								className="px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all hover:scale-105"
								style={{ borderColor: theme.primary, color: theme.primary }}>
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
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.about.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							{siteData.about.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-12 mb-16">
						<div>
							<h3 className="text-2xl font-bold mb-4">Our Mission</h3>
							<p className="text-lg mb-6">{siteData.about.mission}</p>
							<p className="text-lg">{siteData.about.philosophy}</p>
						</div>

						<div
							className="rounded-2xl p-8"
							style={{
								backgroundColor: theme.card,
								borderLeft: `4px solid ${theme.primary}`,
							}}>
							<blockquote className="text-2xl font-semibold italic mb-4">
								"{siteData.about.quote.text}"
							</blockquote>
							<p>— {siteData.about.quote.author}</p>
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{siteData.about.uniqueValue.map((value) => {
							const Icon = value.icon;
							return (
								<div
									key={value.title}
									className="rounded-2xl p-6 text-center"
									style={{
										backgroundColor: theme.card,
										border: `1px solid ${theme.border}`,
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
								</div>
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
						{siteData.howWeWork.steps.map((step, index) => {
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
				className="py-20 px-4"
				style={{ backgroundColor: theme.muted }}>
				<div className="max-w-7xl mx-auto">
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
								<div
									key={service.id}
									className="rounded-2xl p-6 hover:shadow-xl transition-all"
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
								</div>
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

					{/* ROI Trend Chart */}
					<div
						className="rounded-2xl p-8"
						style={{
							backgroundColor: theme.card,
							border: `1px solid ${theme.border}`,
						}}>
						<h3 className="text-2xl font-bold mb-8 text-center">
							{siteData.roiCaseStudies.roiTrend.title}
						</h3>

						<div className="flex items-end justify-between gap-4 h-64">
							{siteData.roiCaseStudies.roiTrend.data.map((item) => (
								<div
									key={item.year}
									className="flex-1 flex flex-col items-center justify-end">
									<div
										className="text-2xl font-bold mb-2"
										style={{ color: theme.primary }}>
										{item.roi}%
									</div>
									<div
										className="w-full rounded-t-lg"
										style={{
											height: `${(item.roi / 40) * 100}%`,
											background: `linear-gradient(to top, ${theme.primary}, ${theme.accent})`,
										}}
									/>
									<div className="text-sm font-semibold mt-3">{item.year}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Investment Mistakes Section */}
			<section id="investment-mistakes" className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.roiCaseStudies.investmentMistakes.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							{siteData.roiCaseStudies.investmentMistakes.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-8">
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
				</div>
			</section>

			{/* Investment Opportunities Section */}
			<section
				id="investment-opportunities"
				className="py-20 px-4"
				style={{ backgroundColor: theme.muted }}>
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.roiCaseStudies.opportunities.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							{siteData.roiCaseStudies.opportunities.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{siteData.roiCaseStudies.opportunities.strategies.map(
							(strategy) => {
								const Icon = strategy.icon;
								return (
									<div
										key={strategy.id}
										className="rounded-2xl p-6"
										style={{
											backgroundColor: theme.card,
											border: `1px solid ${theme.border}`,
										}}>
										<Icon
											className="h-12 w-12 mb-4"
											style={{ color: theme.primary }}
										/>
										<h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
										<p
											className="mb-4"
											style={{ color: theme.mutedForeground }}>
											{strategy.description}
										</p>

										<ul className="space-y-2 mb-4">
											{strategy.benefits.map((benefit, i) => (
												<li key={i} className="flex items-start text-sm">
													<span
														className="mr-2"
														style={{ color: theme.primary }}>
														•
													</span>
													<span>{benefit}</span>
												</li>
											))}
										</ul>

										<div
											className="text-sm italic p-3 rounded-lg"
											style={{
												backgroundColor: theme.primary + "10",
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
			</section>

			{/* Common Misconceptions Section */}
			<section id="common-misconceptions" className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.roiCaseStudies.commonMisconceptions.title}
						</h2>
						<p className="text-xl mb-8">
							{siteData.roiCaseStudies.commonMisconceptions.subtitle}
						</p>
						<p className="text-lg max-w-3xl mx-auto mb-12">
							{siteData.roiCaseStudies.commonMisconceptions.introduction}
						</p>
					</motion.div>

					{/* Perceived Options */}
					<div className="grid md:grid-cols-3 gap-8 mb-16">
						{siteData.roiCaseStudies.commonMisconceptions.perceivedOptions.map(
							(option) => {
								const Icon = option.icon;
								return (
									<div
										key={option.id}
										className="rounded-2xl p-6"
										style={{
											backgroundColor: theme.card,
											border: `1px solid ${theme.border}`,
										}}>
										<div
											className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
											style={{
												backgroundColor: theme.mutedForeground + "20",
												color: theme.mutedForeground,
											}}>
											{option.label}
										</div>
										<Icon
											className="h-12 w-12 mb-4"
											style={{ color: theme.mutedForeground }}
										/>
										<h3 className="text-xl font-bold mb-3">{option.title}</h3>
										<p
											className="mb-4"
											style={{ color: theme.mutedForeground }}>
											{option.description}
										</p>

										<ul className="space-y-2">
											{option.drawbacks.map((drawback, i) => (
												<li
													key={i}
													className="flex items-start text-sm"
													style={{ color: theme.destructive }}>
													<span className="mr-2">✗</span>
													<span>{drawback}</span>
												</li>
											))}
										</ul>
									</div>
								);
							}
						)}
					</div>

					{/* The Reality - SSI Advantage */}
					<div
						className="rounded-3xl p-12 text-center"
						style={{
							background: `linear-gradient(135deg, ${theme.primary}20, ${theme.accent}20)`,
							border: `2px solid ${theme.primary}`,
						}}>
						<h3 className="text-3xl font-bold mb-4">
							{siteData.roiCaseStudies.commonMisconceptions.reality.title}
						</h3>
						<h4
							className="text-2xl font-semibold mb-4"
							style={{ color: theme.primary }}>
							{siteData.roiCaseStudies.commonMisconceptions.reality.subtitle}
						</h4>
						<p className="text-lg mb-12 max-w-3xl mx-auto">
							{siteData.roiCaseStudies.commonMisconceptions.reality.description}
						</p>

						<div className="grid md:grid-cols-4 gap-8 mb-12">
							{siteData.roiCaseStudies.commonMisconceptions.reality.benefits.map(
								(benefit) => {
									const Icon = benefit.icon;
									return (
										<div key={benefit.title}>
											<Icon
												className="h-12 w-12 mx-auto mb-4"
												style={{ color: theme.primary }}
											/>
											<h4 className="font-bold mb-2">{benefit.title}</h4>
											<p
												className="text-sm"
												style={{ color: theme.mutedForeground }}>
												{benefit.description}
											</p>
										</div>
									);
								}
							)}
						</div>

						<div className="text-center">
							<p className="text-2xl font-semibold mb-6">
								{siteData.roiCaseStudies.commonMisconceptions.reality.cta.text}
							</p>
							<button
								onClick={() =>
									scrollToSection(
										siteData.roiCaseStudies.commonMisconceptions.reality.cta
											.action
									)
								}
								className="px-8 py-4 rounded-full text-lg font-bold transition-all"
								style={{
									backgroundColor: theme.primary,
									color: theme.primaryForeground,
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "scale(1.05)";
									e.currentTarget.style.boxShadow = `0 8px 20px ${theme.primary}40`;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "scale(1)";
									e.currentTarget.style.boxShadow = "none";
								}}>
								{
									siteData.roiCaseStudies.commonMisconceptions.reality.cta
										.buttonText
								}
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section
				id="team"
				className="py-20 px-4"
				style={{ backgroundColor: theme.muted }}>
				<div className="max-w-7xl mx-auto">
					<motion.div className="text-center mb-16" {...fadeInUp}>
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							{siteData.team.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto">
							{siteData.team.subtitle}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{siteData.team.members.map((member) => (
							<div
								key={member.id}
								className="rounded-2xl p-6 text-center hover:shadow-xl transition-all"
								style={{
									backgroundColor: theme.card,
									border: `1px solid ${theme.border}`,
								}}>
								<div
									className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
									style={{
										background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
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
							</div>
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
							<div
								key={review.id}
								className="rounded-2xl p-8"
								style={{
									backgroundColor: theme.card,
									border: `1px solid ${theme.border}`,
								}}>
								<div className="flex gap-1 mb-4">
									{[...Array(review.rating)].map((_, i) => (
										<Star
											key={i}
											className="h-5 w-5 fill-current"
											style={{ color: theme.warning }}
										/>
									))}
								</div>
								<blockquote className="text-lg italic mb-6">
									"{review.quote}"
								</blockquote>

								<div className="flex items-center gap-4 mb-4">
									<div
										className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
										style={{
											backgroundColor: theme.primary,
											color: "#ffffff",
										}}>
										{review.name.charAt(0)}
									</div>
									<div>
										<div className="font-bold">{review.name}</div>
										<div className="text-sm">{review.location}</div>
									</div>
								</div>

								<div
									className="flex justify-between text-sm pt-4 border-t"
									style={{ borderColor: theme.border }}>
									<span>{review.investment}</span>
									<span
										className="font-semibold"
										style={{ color: theme.primary }}>
										{review.roi}
									</span>
								</div>
							</div>
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

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

					{/* Comparison Table */}
					<div
						className="rounded-2xl p-8"
						style={{
							backgroundColor: theme.card,
							border: `1px solid ${theme.border}`,
						}}>
						<h3 className="text-2xl font-bold mb-8 text-center">
							{siteData.whyInvest.comparisonTable.title}
						</h3>

						<div className="grid md:grid-cols-3 gap-6">
							{siteData.whyInvest.comparisonTable.columns.map((column) => (
								<div
									key={column.type}
									className="rounded-xl p-6 border-2"
									style={{
										borderColor:
											column.status === "✅" ? theme.primary : theme.border,
										backgroundColor:
											column.status === "✅"
												? theme.primary + "10"
												: "transparent",
									}}>
									<div className="text-center mb-4">
										<div className="text-4xl mb-2">{column.status}</div>
										<h4 className="text-xl font-bold">{column.type}</h4>
									</div>

									{column.pros.length > 0 && (
										<div className="mb-4">
											<div
												className="text-sm font-semibold mb-2"
												style={{ color: theme.accent }}>
												✓ Pros:
											</div>
											<ul className="space-y-1">
												{column.pros.map((pro, i) => (
													<li key={i} className="text-sm">
														• {pro}
													</li>
												))}
											</ul>
										</div>
									)}

									{column.cons.length > 0 && (
										<div>
											<div
												className="text-sm font-semibold mb-2"
												style={{ color: theme.destructive }}>
												✗ Cons:
											</div>
											<ul className="space-y-1">
												{column.cons.map((con, i) => (
													<li key={i} className="text-sm">
														• {con}
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							))}
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

					{/* Timeline */}
					<div className="space-y-6">
						{siteData.trackRecord.timeline.map((item) => {
							const Icon = item.icon;
							return (
								<div
									key={item.year}
									className="rounded-2xl p-6 flex items-start gap-6"
									style={{
										backgroundColor: theme.card,
										border: `1px solid ${theme.border}`,
									}}>
									<div
										className="flex-shrink-0 w-20 h-20 rounded-xl flex flex-col items-center justify-center font-bold"
										style={{
											backgroundColor: theme.primary,
											color: "#ffffff",
										}}>
										<div className="text-2xl">{item.year}</div>
									</div>

									<div className="flex-1">
										<div className="flex items-start gap-3 mb-2">
											<Icon
												className="h-6 w-6 flex-shrink-0"
												style={{ color: theme.primary }}
											/>
											<h3 className="text-xl font-bold">
												{item.milestone}
												{item.roi && (
													<span style={{ color: theme.primary }}>
														{" "}
														- {item.roi}% ROI
													</span>
												)}
											</h3>
										</div>
										<p>{item.description}</p>
										{item.clients && (
											<div
												className="mt-2 text-sm font-semibold"
												style={{ color: theme.primary }}>
												{item.clients} Clients
											</div>
										)}
									</div>
								</div>
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
							{siteData.contact.title}
						</h2>
						<p className="text-xl max-w-3xl mx-auto mb-4">
							{siteData.contact.subtitle}
						</p>
						<p className="text-lg max-w-2xl mx-auto">
							{siteData.contact.ctaMessage}
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Methods */}
						<div>
							<h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

							<div className="space-y-4">
								{siteData.contact.methods
									.filter((method) => method.primary)
									.map((method) => {
										const IconComponent =
											method.type === "phone"
												? Phone
												: method.type === "whatsapp"
												? MessageCircle
												: method.type === "email"
												? Mail
												: MapPin;

										return (
											<a
												key={method.type}
												href={method.link}
												target={
													method.type === "whatsapp" ? "_blank" : undefined
												}
												rel="noopener noreferrer"
												className="flex items-center gap-4 p-4 rounded-xl hover:scale-105 transition-all"
												style={{
													backgroundColor: theme.card,
													border: `1px solid ${theme.border}`,
												}}>
												<div
													className="p-3 rounded-lg"
													style={{ backgroundColor: theme.primary + "20" }}>
													<IconComponent
														className="h-6 w-6"
														style={{ color: theme.primary }}
													/>
												</div>
												<div>
													<div className="text-sm font-semibold">
														{method.label}
													</div>
													<div className="font-semibold">{method.value}</div>
												</div>
											</a>
										);
									})}
							</div>

							<div className="mt-8">
								<h4 className="text-lg font-bold mb-4">Visit Us</h4>
								{siteData.contact.methods
									.filter((method) => method.type === "address")
									.map((method) => (
										<a
											key={method.type}
											href={method.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-start gap-4 p-4 rounded-xl hover:scale-105 transition-all"
											style={{
												backgroundColor: theme.card,
												border: `1px solid ${theme.border}`,
											}}>
											<MapPin
												className="h-6 w-6 flex-shrink-0"
												style={{ color: theme.primary }}
											/>
											<div>
												<div className="text-sm font-semibold mb-1">
													Office Location
												</div>
												<div>{method.value}</div>
											</div>
										</a>
									))}
							</div>
						</div>

						{/* Contact Form */}
						<div
							className="rounded-2xl p-8"
							style={{
								backgroundColor: theme.card,
								border: `1px solid ${theme.border}`,
							}}>
							<h3 className="text-2xl font-bold mb-6">
								{siteData.contact.form.title}
							</h3>

							<form className="space-y-4">
								{siteData.contact.form.fields.map((field) => (
									<div key={field.name}>
										<label className="block text-sm font-semibold mb-2">
											{field.label}
											{field.required && (
												<span style={{ color: theme.destructive }}> *</span>
											)}
										</label>
										{field.type === "textarea" ? (
											<textarea
												name={field.name}
												required={field.required}
												rows={4}
												className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
												style={{
													backgroundColor: theme.background,
													borderColor: theme.border,
													color: theme.foreground,
												}}
											/>
										) : field.type === "select" ? (
											<select
												name={field.name}
												required={field.required}
												className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
												style={{
													backgroundColor: theme.background,
													borderColor: theme.border,
													color: theme.foreground,
												}}>
												<option value="">Select amount</option>
												{field.options?.map((option) => (
													<option key={option} value={option}>
														{option}
													</option>
												))}
											</select>
										) : (
											<input
												type={field.type}
												name={field.name}
												required={field.required}
												className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none"
												style={{
													backgroundColor: theme.background,
													borderColor: theme.border,
													color: theme.foreground,
												}}
											/>
										)}
									</div>
								))}

								<button
									type="submit"
									className="w-full px-6 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
									style={{ backgroundColor: theme.primary, color: "#ffffff" }}>
									{siteData.contact.form.submitText}
									<ArrowRight className="inline-block ml-2 h-5 w-5" />
								</button>

								<p className="text-sm text-center">
									We'll respond within 24 hours
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default SilverSeedLanding;
