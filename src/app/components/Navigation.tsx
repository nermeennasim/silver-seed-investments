// components/Navigation.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavigationProps {
	activeSection: string;
	scrollToSection: (sectionId: string) => void;
}

interface NavItem {
	id?: string;
	label: string;
	subItems?: { id: string; label: string }[];
}

const Navigation: React.FC<NavigationProps> = ({
	activeSection,
	scrollToSection,
}) => {
	const { theme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const navItems: NavItem[] = [
		{ id: "hero", label: "Home" },
		{
			label: "About",
			subItems: [
				{ id: "about", label: "About Us" },
				{ id: "how-we-work", label: "How We Work" },
				{ id: "team", label: "Our Team" },
			],
		},
		{
			label: "Services",
			subItems: [
				{ id: "services", label: "What We Offer" },
				{ id: "roi-case-studies", label: "ROI & Results" },
			],
		},
		{
			label: "Why Choose Us",
			subItems: [
				{ id: "why-invest", label: "Why SSI" },
				{ id: "ssi-advantage", label: "SSI Advantage" },
				{ id: "track-record", label: "Track Record" },
				{ id: "testimonials", label: "Testimonials" },
			],
		},
		{ id: "contact", label: "Contact" },
	];

	const handleScrollToSection = (sectionId: string): void => {
		scrollToSection(sectionId);
		setIsMenuOpen(false);
		setOpenDropdown(null);
	};

	const isItemActive = (item: NavItem): boolean => {
		if (item.id) return activeSection === item.id;
		if (item.subItems) {
			return item.subItems.some((subItem) => activeSection === subItem.id);
		}
		return false;
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
						<Image
							src="/logo_3d.png"
							alt="Silver Seed Investment Logo"
							width={56}
							height={56}
							className="h-14 w-14 object-contain"
							priority
							style={{ width: 'auto', height: '56px' }}
						/>
					</div>
				</div>					{/* Desktop Navigation */}
					<div className="hidden lg:flex space-x-8 items-center py-4">
						{navItems.map((item, index) => (
							<div key={index} className="relative group">
								{item.id ? (
									// Simple navigation item
									<button
										onClick={() => item.id && handleScrollToSection(item.id)}
										className="transition-colors border-b-2 py-2 px-3 whitespace-nowrap font-medium"
										style={{
											color: isItemActive(item)
												? theme.primary
												: theme.foreground,
											borderColor: isItemActive(item)
												? theme.primary
												: "transparent",
										}}
										onMouseEnter={(e) => {
											if (!isItemActive(item)) {
												e.currentTarget.style.color = theme.primary;
											}
										}}
										onMouseLeave={(e) => {
											if (!isItemActive(item)) {
												e.currentTarget.style.color = theme.foreground;
											}
										}}>
										{item.label}
									</button>
								) : (
									// Dropdown navigation item
									<>
										<button
											className="transition-colors border-b-2 py-2 px-3 flex items-center gap-1 whitespace-nowrap font-medium"
											style={{
												color: isItemActive(item)
													? theme.primary
													: theme.foreground,
												borderColor: isItemActive(item)
													? theme.primary
													: "transparent",
											}}
											onMouseEnter={(e) => {
												if (!isItemActive(item)) {
													e.currentTarget.style.color = theme.primary;
												}
											}}
											onMouseLeave={(e) => {
												if (!isItemActive(item)) {
													e.currentTarget.style.color = theme.foreground;
												}
											}}>
											{item.label}
											<ChevronDown className="h-4 w-4" />
										</button>

										{/* Dropdown Menu */}
										<div
											className="absolute top-full left-0 mt-2 w-52 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100"
											style={{
												backgroundColor: theme.card,
												border: `2px solid ${theme.border}`,
											}}>
											<div className="py-2">
												{item.subItems?.map((subItem) => (
													<button
														key={subItem.id}
														onClick={() => handleScrollToSection(subItem.id)}
														className="w-full text-left px-5 py-3 transition-colors"
														style={{
															color:
																activeSection === subItem.id
																	? theme.primary
																	: theme.foreground,
															backgroundColor:
																activeSection === subItem.id
																	? theme.primary + "15"
																	: "transparent",
														}}
														onMouseEnter={(e) => {
															e.currentTarget.style.color = theme.primary;
															e.currentTarget.style.backgroundColor =
																theme.primary + "15";
														}}
														onMouseLeave={(e) => {
															e.currentTarget.style.color =
																activeSection === subItem.id
																	? theme.primary
																	: theme.foreground;
															e.currentTarget.style.backgroundColor =
																activeSection === subItem.id
																	? theme.primary + "15"
																	: "transparent";
														}}>
														{subItem.label}
													</button>
												))}
											</div>
										</div>
									</>
								)}
							</div>
						))}
					</div>

					{/* Mobile menu button */}
					<div className="lg:hidden">
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
						className="lg:hidden rounded-lg mt-2 p-4 border shadow-lg max-h-[70vh] overflow-y-auto"
						style={{
							backgroundColor: theme.card,
							borderColor: theme.border,
						}}>
						{navItems.map((item, index) => (
							<div key={index} className="mb-1">
								{item.id ? (
									// Simple navigation item
									<button
										onClick={() => item.id && handleScrollToSection(item.id)}
										className="block w-full text-left py-3 px-4 rounded transition-colors font-medium"
										style={{
											color: isItemActive(item)
												? theme.primary
												: theme.foreground,
											backgroundColor: isItemActive(item)
												? theme.background
												: "transparent",
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.color = theme.primary;
											e.currentTarget.style.backgroundColor = theme.background;
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.color = isItemActive(item)
												? theme.primary
												: theme.foreground;
											e.currentTarget.style.backgroundColor = isItemActive(item)
												? theme.background
												: "transparent";
										}}>
										{item.label}
									</button>
								) : (
									// Dropdown navigation item
									<div className="mb-3">
										<button
											onClick={() =>
												setOpenDropdown(
													openDropdown === item.label ? null : item.label
												)
											}
											className="w-full text-left py-3 px-4 rounded transition-colors font-semibold flex items-center justify-between"
											style={{
												color: isItemActive(item)
													? theme.primary
													: theme.foreground,
												backgroundColor: theme.background,
											}}>
											{item.label}
											<ChevronDown
												className={`h-4 w-4 transition-transform ${
													openDropdown === item.label ? "rotate-180" : ""
												}`}
											/>
										</button>

										{/* Sub-items */}
										{openDropdown === item.label && (
											<div className="ml-4 mt-2 space-y-1">
												{item.subItems?.map((subItem) => (
													<button
														key={subItem.id}
														onClick={() => handleScrollToSection(subItem.id)}
														className="block w-full text-left py-2.5 px-4 rounded transition-colors text-sm"
														style={{
															color:
																activeSection === subItem.id
																	? theme.primary
																	: theme.foreground,
															backgroundColor:
																activeSection === subItem.id
																	? theme.primary + "15"
																	: "transparent",
														}}
														onMouseEnter={(e) => {
															e.currentTarget.style.color = theme.primary;
															e.currentTarget.style.backgroundColor =
																theme.primary + "15";
														}}
														onMouseLeave={(e) => {
															e.currentTarget.style.color =
																activeSection === subItem.id
																	? theme.primary
																	: theme.foreground;
															e.currentTarget.style.backgroundColor =
																activeSection === subItem.id
																	? theme.primary + "15"
																	: "transparent";
														}}>
														{subItem.label}
													</button>
												))}
											</div>
										)}
									</div>
								)}
							</div>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
