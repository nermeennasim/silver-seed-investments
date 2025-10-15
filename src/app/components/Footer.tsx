// components/Footer.tsx
"use client";

import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { ExternalLink, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
	const { theme } = useTheme();

	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ label: "Home", href: "#hero" },
		{ label: "Why Us", href: "#why-us" },
		{ label: "Services", href: "#services" },
		{ label: "Results", href: "#results" },
		{ label: "Contact", href: "#contact" },
	];

	const contactInfo = [
		{
			icon: Phone,
			label: "Phone",
			value: "+1-437-984-1806",
			href: "tel:+14379841806",
		},
		{
			icon: Mail,
			label: "Email",
			value: "administration@silverseedinv.com",
			href: "mailto:administration@silverseedinv.com",
		},
		{
			icon: MapPin,
			label: "Location",
			value: "Mississauga, Ontario, Canada",
			href: null,
		},
	];

	const scrollToSection = (href: string) => {
		const elementId = href.replace("#", "");
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer
			className="py-16 border-t"
			style={{
				backgroundColor: theme.card,
				borderColor: theme.background,
			}}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					{/* Company Info */}
					<div className="lg:col-span-2">
						<div className="flex items-center space-x-3 mb-6">
							<div
								className="p-2 rounded-lg flex items-center justify-center border-2"
								style={{ borderColor: theme.primary }}>
								{/* Logo with fallback */}
								<img
									src="/logo_3d.png"
									alt="Silver Seed Investment Logo"
									className="h-14 w-full object-contain"
									// style={{
									// 	filter: "brightness(0) invert(1)",
									// 	maxWidth: "100%",
									// 	height: "auto",
									// }}
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.style.display = "none";
										const parent = target.parentElement;
										if (parent && !parent.querySelector(".fallback-icon")) {
											const icon = document.createElement("div");
											icon.className = "fallback-icon";
											icon.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="${theme.background}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12h4"/><path d="M6 8h4"/><path d="M6 16h4"/><path d="M14 12h4"/><path d="M14 16h4"/><path d="M14 8h4"/></svg>`;
											parent.appendChild(icon);
										}
									}}
								/>
							</div>
							<span
								className="font-bold text-xl"
								style={{ color: theme.foreground }}>
								Silver Seed Investment
							</span>
						</div>

						<p
							className="text-base mb-4 max-w-md"
							style={{ color: theme.mutedForeground }}>
							Building wealth through strategic real estate investments.
							Professional property management and investment services with
							18-22% annual returns.
						</p>

						<div className="flex flex-wrap gap-4">
							<div
								className="px-4 py-2 rounded-lg border"
								style={{
									backgroundColor: theme.background,
									borderColor: theme.border,
								}}>
								<span
									className="text-sm font-medium"
									style={{ color: theme.primary }}>
									Minimum Investment: $1,000
								</span>
							</div>
							<div
								className="px-4 py-2 rounded-lg border"
								style={{
									backgroundColor: theme.background,
									borderColor: theme.border,
								}}>
								<span
									className="text-sm font-medium"
									style={{ color: theme.primary }}>
									Expected Returns: 18-22%
								</span>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3
							className="font-semibold text-lg mb-4"
							style={{ color: theme.foreground }}>
							Quick Links
						</h3>
						<ul className="space-y-3">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<button
										onClick={() => scrollToSection(link.href)}
										className="transition-colors hover:underline"
										style={{ color: theme.mutedForeground }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = theme.primary)
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = theme.mutedForeground)
										}>
										{link.label}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3
							className="font-semibold text-lg mb-4"
							style={{ color: theme.foreground }}>
							Contact Info
						</h3>
						<ul className="space-y-4">
							{contactInfo.map((contact, index) => {
								const IconComponent = contact.icon;
								const content = (
									<div className="flex items-center space-x-3">
										<div
											className="p-2 rounded-lg"
											style={{ backgroundColor: theme.primary }}>
											<IconComponent
												className="h-4 w-4"
												style={{ color: theme.background }}
											/>
										</div>
										<div>
											<div
												className="text-sm font-medium"
												style={{ color: theme.foreground }}>
												{contact.label}
											</div>
											<div
												className="text-sm"
												style={{ color: theme.mutedForeground }}>
												{contact.value}
											</div>
										</div>
									</div>
								);

								return (
									<li key={index}>
										{contact.href ? (
											<a
												href={contact.href}
												className="transition-colors"
												style={{ color: theme.mutedForeground }}
												onMouseEnter={(e) =>
													(e.currentTarget.style.color = theme.primary)
												}
												onMouseLeave={(e) =>
													(e.currentTarget.style.color = theme.mutedForeground)
												}>
												{content}
											</a>
										) : (
											<div>{content}</div>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className="pt-8 border-t" style={{ borderColor: theme.border }}>
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						{/* Copyright */}
						<div
							className="text-sm text-center md:text-left"
							style={{ color: theme.mutedForeground }}>
							<p>
								© {currentYear} Silver Seed Investment. All rights reserved.
							</p>
							<p className="mt-1">
								Licensed investment management firm | Professional real estate
								services
							</p>
						</div>

						{/* Powered By */}
						<div
							className="text-sm text-center md:text-right"
							style={{ color: theme.mutedForeground }}>
							<p>
								Powered by{" "}
								<a
									href="https://www.bluesproutagency.com"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center space-x-1 transition-colors hover:underline"
									style={{ color: theme.primary }}
									onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
									onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
									<span>Blue Sprout Agency</span>
									<ExternalLink className="h-3 w-3" />
								</a>
							</p>
						</div>
					</div>
				</div>

				{/* Legal Disclaimer */}
				<div
					className="mt-8 pt-6 border-t text-xs text-center"
					style={{
						borderColor: theme.border,
						color: theme.mutedForeground,
					}}>
					<p>
						Investment involves risk. Past performance does not guarantee future
						results. Please consult with a financial advisor before making
						investment decisions.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
