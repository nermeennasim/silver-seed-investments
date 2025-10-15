// src/contexts/ThemeContext.tsx
"use client";

import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Silver Seed Investment theme configuration - Fresh organic color palette
// Colors: #F1BA88 (Peach), #E9F5BE (Light Green), #81E7AF (Mint), #03A791 (Teal)
const themeConfig = {
	light: {
		// Light theme - Fresh, organic feel with warm tones
		primary: "#03A791", // Teal - primary actions and CTAs
		primaryForeground: "#ffffff", // White text on primary
		secondary: "#E9F5BE", // Light green - secondary elements
		secondaryForeground: "#1a5c4d", // Dark teal text on secondary
		background: "#ffffff", // Pure white background
		foreground: "#1a5c4d", // Dark teal for text
		card: "#ffffff", // White cards
		cardForeground: "#1a5c4d", // Dark teal text on cards
		muted: "#E9F5BE", // Light green for muted elements
		mutedForeground: "#5a7a6b", // Medium teal-gray text
		accent: "#81E7AF", // Mint - accent highlights
		accentForeground: "#1a5c4d", // Dark teal text on accent
		border: "rgba(3, 167, 145, 0.15)", // Subtle teal border
		input: "#f8fcf5", // Very light green input background
		ring: "#81E7AF", // Mint for focus rings
		success: "#81E7AF", // Mint green
		warning: "#F1BA88", // Peach/orange
		error: "#d4183d", // Red
		destructive: "#d4183d", // Red for destructive actions
		destructiveForeground: "#ffffff", // White text on destructive

		// Design tokens
		radius: "0.625rem", // 10px
		fontSize: "14px",
		fontWeightMedium: "500",
		fontWeightNormal: "400",

		// Gradients
		gradients: {
			primary: "linear-gradient(135deg, #03A791, #81E7AF)", // Teal to Mint
			accent: "linear-gradient(135deg, #E9F5BE, #81E7AF)", // Light green to Mint
			warm: "linear-gradient(135deg, #F1BA88, #E9F5BE)", // Peach to Light green
			textGradient: "linear-gradient(135deg, #03A791, #1a5c4d)", // Teal gradient
		},
	},
	dark: {
		// Dark theme - Rich dark with vibrant accents
		primary: "#81E7AF", // Mint - stands out on dark background
		primaryForeground: "#0a1f1a", // Very dark teal text
		secondary: "#2d4a3f", // Dark teal-green
		secondaryForeground: "#E9F5BE", // Light green text
		background: "#0a1f1a", // Very dark teal background
		foreground: "#E9F5BE", // Light green text
		card: "#15302a", // Dark teal cards
		cardForeground: "#E9F5BE", // Light green text on cards
		muted: "#1d3d34", // Muted dark teal
		mutedForeground: "#9ab89f", // Muted light green
		accent: "#03A791", // Teal accent
		accentForeground: "#E9F5BE", // Light green text on accent
		border: "#2d4a3f", // Dark teal border
		input: "#1d3d34", // Dark teal input background
		ring: "#81E7AF", // Mint for focus rings
		success: "#81E7AF", // Mint green
		warning: "#F1BA88", // Peach/orange
		error: "#f87171", // Light red
		destructive: "#d4183d", // Red for destructive actions
		destructiveForeground: "#E9F5BE", // Light green text on destructive

		// Design tokens
		radius: "0.625rem", // 10px
		fontSize: "14px",
		fontWeightMedium: "500",
		fontWeightNormal: "400",

		// Gradients
		gradients: {
			primary: "linear-gradient(135deg, #03A791, #81E7AF)", // Teal to Mint
			accent: "linear-gradient(135deg, #2d4a3f, #03A791)", // Dark teal to Teal
			warm: "linear-gradient(135deg, #F1BA88, #81E7AF)", // Peach to Mint
			textGradient: "linear-gradient(135deg, #81E7AF, #E9F5BE)", // Mint to Light green
		},
	},
} as const;

// Theme type definitions
export type Theme = typeof themeConfig.light | typeof themeConfig.dark;
export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
	theme: Theme;
	themeMode: ThemeMode;
	isDark: boolean;
	toggleTheme: () => void;
	setThemeMode: (mode: ThemeMode) => void;
}

// Create context
export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

// Theme provider component
export interface ThemeProviderProps {
	children: ReactNode;
	defaultTheme?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children,
	defaultTheme = "light",
}) => {
	const [themeMode, setThemeModeState] = useState<ThemeMode>(defaultTheme);
	const [isInitialized, setIsInitialized] = useState(false);

	// Get current theme object
	const theme = themeConfig[themeMode];
	const isDark = themeMode === "dark";

	// Initialize theme from localStorage on client side only
	useEffect(() => {
		const savedTheme = localStorage.getItem("silver-seed-theme") as ThemeMode;
		if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
			setThemeModeState(savedTheme);
		}
		setIsInitialized(true);
	}, []);

	// Persist theme to localStorage and apply CSS custom properties
	useEffect(() => {
		if (!isInitialized) return;

		localStorage.setItem("silver-seed-theme", themeMode);

		// Apply theme to document root for CSS custom properties
		const root = document.documentElement;

		// Set CSS custom properties for the current theme
		root.style.setProperty("--color-primary", theme.primary);
		root.style.setProperty(
			"--color-primary-foreground",
			theme.primaryForeground
		);
		root.style.setProperty("--color-secondary", theme.secondary);
		root.style.setProperty(
			"--color-secondary-foreground",
			theme.secondaryForeground
		);
		root.style.setProperty("--color-background", theme.background);
		root.style.setProperty("--color-foreground", theme.foreground);
		root.style.setProperty("--color-card", theme.card);
		root.style.setProperty("--color-card-foreground", theme.cardForeground);
		root.style.setProperty("--color-border", theme.border);
		root.style.setProperty("--color-input", theme.input);
		root.style.setProperty("--color-ring", theme.ring);
		root.style.setProperty("--color-accent", theme.accent);
		root.style.setProperty("--color-accent-foreground", theme.accentForeground);
		root.style.setProperty("--color-muted", theme.muted);
		root.style.setProperty("--color-muted-foreground", theme.mutedForeground);
		root.style.setProperty("--color-destructive", theme.destructive);
		root.style.setProperty(
			"--color-destructive-foreground",
			theme.destructiveForeground
		);
		root.style.setProperty("--color-success", theme.success);
		root.style.setProperty("--color-warning", theme.warning);
		root.style.setProperty("--color-error", theme.error);

		// Add/remove dark class and theme class to document element
		if (themeMode === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		// Add theme class to body for conditional styling
		document.body.className = document.body.className.replace(/theme-\w+/g, "");
		document.body.classList.add(`theme-${themeMode}`);
	}, [themeMode, theme, isInitialized]);

	const toggleTheme = () => {
		setThemeModeState((prev) => (prev === "light" ? "dark" : "light"));
	};

	const setThemeMode = (mode: ThemeMode) => {
		setThemeModeState(mode);
	};

	const value: ThemeContextType = {
		theme,
		themeMode,
		isDark,
		toggleTheme,
		setThemeMode,
	};

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

// Hook to use theme context
export const useTheme = () => {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

// Updated utility hook for modern neutral styling
export const useThemeStyles = () => {
	const { theme, isDark } = useTheme();

	return {
		// Common style patterns with modern neutral design
		card: `bg-[${theme.card}] text-[${theme.cardForeground}] border border-[${theme.border}] rounded-[${theme.radius}] shadow-sm`,

		button: {
			primary: `bg-[${theme.primary}] text-[${theme.primaryForeground}] hover:opacity-90 transition-all duration-300 font-medium rounded-[${theme.radius}] px-4 py-2`,
			secondary: `bg-[${theme.secondary}] text-[${theme.secondaryForeground}] border border-[${theme.border}] hover:bg-[${theme.accent}] transition-all duration-300 font-medium rounded-[${theme.radius}] px-4 py-2`,
			ghost: `text-[${theme.foreground}] hover:bg-[${theme.accent}] hover:text-[${theme.accentForeground}] transition-all duration-300 font-medium rounded-[${theme.radius}] px-4 py-2`,
			outline: `border-2 border-[${theme.primary}] text-[${theme.primary}] hover:bg-[${theme.primary}] hover:text-[${theme.primaryForeground}] transition-all duration-300 font-medium rounded-[${theme.radius}] px-4 py-2`,
			destructive: `bg-[${theme.destructive}] text-[${theme.destructiveForeground}] hover:opacity-90 transition-all duration-300 font-medium rounded-[${theme.radius}] px-4 py-2`,
		},

		text: {
			primary: `text-[${theme.foreground}]`,
			secondary: `text-[${theme.mutedForeground}]`,
			accent: `text-[${theme.accentForeground}]`,
			muted: `text-[${theme.mutedForeground}]`,
		},

		background: {
			main: `bg-[${theme.background}]`,
			card: `bg-[${theme.card}]`,
			muted: `bg-[${theme.muted}]`,
			accent: `bg-[${theme.accent}]`,
		},

		gradient: {
			primary: theme.gradients.primary,
			accent: theme.gradients.accent,
			warm: theme.gradients.warm,
			textGradient: theme.gradients.textGradient,
		},

		border: `border-[${theme.border}]`,

		typography: {
			fontSize: theme.fontSize,
			fontWeightMedium: theme.fontWeightMedium,
			fontWeightNormal: theme.fontWeightNormal,
		},

		// Modern design utilities
		silverSeed: {
			heroGradient: `bg-gradient-to-br from-[${theme.background}] via-[${theme.muted}] to-[${theme.accent}]`,
			cardHover: `hover:border-[${theme.ring}] hover:shadow-lg transition-all duration-300`,
			textGradient: `bg-clip-text text-transparent`,
			overlay: `bg-[${theme.background}]/90 backdrop-blur-sm`,
		},

		theme,
		isDark,
	};
};

// Export theme configuration for direct access
export { themeConfig };

// Color Palette Reference - Fresh Organic Theme:
// Base Colors:
// - #F1BA88 (Peach) - Warm, inviting accent for warnings/highlights
// - #E9F5BE (Light Green) - Fresh, natural secondary color
// - #81E7AF (Mint) - Energetic accent and success color
// - #03A791 (Teal) - Professional primary color for CTAs
//
// Light Mode:
// - Background: #ffffff (White) - Clean main background
// - Foreground: #1a5c4d (Dark Teal) - Professional text
// - Primary: #03A791 (Teal) - Primary buttons and CTAs
// - Secondary: #E9F5BE (Light Green) - Secondary elements
// - Accent: #81E7AF (Mint) - Highlights and accents
// - Muted: #E9F5BE (Light Green) - Muted backgrounds
// - Success: #81E7AF (Mint) - Success states
// - Warning: #F1BA88 (Peach) - Warning states
//
// Dark Mode:
// - Background: #0a1f1a (Very Dark Teal) - Rich dark background
// - Foreground: #E9F5BE (Light Green) - Light text for readability
// - Primary: #81E7AF (Mint) - Vibrant CTAs on dark
// - Secondary: #2d4a3f (Dark Teal-Green) - Subtle secondary
// - Accent: #03A791 (Teal) - Professional accents
// - Card: #15302a (Dark Teal) - Elevated surfaces
// - Success: #81E7AF (Mint) - Success states
// - Warning: #F1BA88 (Peach) - Warning states
//
// Gradients:
// - Primary: Teal to Mint - Dynamic and energetic
// - Accent: Light Green to Mint - Fresh and natural
// - Warm: Peach to Light Green - Inviting and warm
