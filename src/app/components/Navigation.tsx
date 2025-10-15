// components/Navigation.tsx
"use client";

import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Menu, X } from "lucide-react";

interface NavigationProps {
	activeSection: string;
	scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
	activeSection,
	scrollToSection,
}) => {
	const { theme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const navItems = [
		{ id: "hero", label: "Home" },
		{ id: "about", label: "About" },
		{ id: "how-we-work", label: "How We Work" },
		{ id: "services", label: "Services" },
		{ id: "roi-case-studies", label: "ROI & Results" },
		{ id: "team", label: "Team" },
		{ id: "testimonials", label: "Testimonials" },
		{ id: "why-invest", label: "Why SSI" },
		{ id: "track-record", label: "Track Record" },
		{ id: "contact", label: "Contact" },
	];

	const handleScrollToSection = (sectionId: string): void => {
		scrollToSection(sectionId);
		setIsMenuOpen(false);
	};

	return (
		<nav
			className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 rounded-b-xl shadow-b-lg"
			style={{
				backgroundColor: `${theme.background}CC`, // 80% opacity
				borderBottom: `1px solid ${theme.border}`,
			}}>
			<div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
				<div className="flex justify-between items-start h-20">
					{/* Logo Section */}
					<div className="flex items-center space-x-3">
						<div
							className="p-2 rounded-lg flex items-start justify-center"
							style={{ border: `1px solid ${theme.border}` }}>
							{/* Try to load logo, fallback to Building icon */}
							<img
								src="/logo_3d.png"
								alt="Silver Seed Investment Logo"
								className="h-14 w-full object-contain"
								//	style={{
								// 	filter: "brightness(0) invert(1)", // Makes logo white if it's dark
								// 	maxWidth: "100%",
								// 	height: "auto",
								// }}
								onError={(e) => {
									// If logo fails to load, show Building icon instead
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
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => handleScrollToSection(item.id)}
								className="transition-colors border-b-2 py-2"
								style={{
									color:
										activeSection === item.id
											? theme.primary
											: theme.foreground,
									borderColor:
										activeSection === item.id ? theme.primary : "transparent",
								}}
								onMouseEnter={(e) => {
									if (activeSection !== item.id) {
										e.currentTarget.style.color = theme.primary;
									}
								}}
								onMouseLeave={(e) => {
									if (activeSection !== item.id) {
										e.currentTarget.style.color = theme.foreground;
									}
								}}>
								{item.label}
							</button>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="transition-colors p-2 rounded-lg"
							style={{
								color: theme.foreground,
								backgroundColor: isMenuOpen ? theme.card : "transparent",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.color = theme.primary;
								e.currentTarget.style.backgroundColor = theme.card;
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.color = theme.foreground;
								e.currentTarget.style.backgroundColor = isMenuOpen
									? theme.card
									: "transparent";
							}}>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Dropdown */}
				{isMenuOpen && (
					<div
						className="md:hidden rounded-lg mt-2 p-4 border shadow-lg"
						style={{
							backgroundColor: theme.card,
							borderColor: theme.border,
						}}>
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => handleScrollToSection(item.id)}
								className="block w-full text-left py-3 px-2 rounded transition-colors"
								style={{
									color:
										activeSection === item.id
											? theme.primary
											: theme.foreground,
									backgroundColor:
										activeSection === item.id
											? theme.background
											: "transparent",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.color = theme.primary;
									e.currentTarget.style.backgroundColor = theme.background;
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.color =
										activeSection === item.id
											? theme.primary
											: theme.foreground;
									e.currentTarget.style.backgroundColor =
										activeSection === item.id
											? theme.background
											: "transparent";
								}}>
								{item.label}
							</button>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
