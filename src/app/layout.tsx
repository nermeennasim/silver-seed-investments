import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Silver Seed Investments - Growing Wealth Together | Real Estate Investment",
	description:
		"Build wealth through strategic real estate investments with 20-37% ROI. Expert property management, transparent fees, and hands-on approach. Serving 100+ investors across North America & Middle East.",
	keywords: [
		"real estate investment",
		"property management",
		"wealth building",
		"financial freedom",
		"ROI investment",
		"passive income",
		"rental property investment",
		"Airbnb investment",
		"real estate portfolio",
		"investment opportunities",
		"Toronto real estate",
		"Canada property investment",
		"off-market deals",
		"value-add properties",
		"real estate returns"
	],
	authors: [{ name: "Silver Seed Investments" }],
	creator: "Silver Seed Investments",
	publisher: "Silver Seed Investments",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.silverseedinv.com",
		siteName: "Silver Seed Investments",
		title: "Silver Seed Investments - Growing Wealth Together",
		description: "Build wealth through strategic real estate investments with 20-37% ROI. Expert property management with complete transparency.",
		images: [
			{
				url: "https://www.silverseedinv.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Silver Seed Investments - Real Estate Investment Platform",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Silver Seed Investments - Growing Wealth Together",
		description: "Build wealth through strategic real estate investments with 20-37% ROI. Expert property management.",
		images: ["https://www.silverseedinv.com/og-image.jpg"],
		creator: "@silverseedinv",
	},
	alternates: {
		canonical: "https://www.silverseedinv.com",
	},
	
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// JSON-LD Structured Data for SEO
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FinancialService",
		"name": "Silver Seed Investments",
		"alternateName": "SSI",
		"url": "https://www.silverseedinv.com",
		"logo": "https://www.silverseedinv.com/logo.png",
		"description": "Build wealth through strategic real estate investments with 20-37% ROI. Expert property management with complete transparency.",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "6894 Barrisdale Drive",
			"addressLocality": "Mississauga",
			"addressRegion": "Ontario",
			"addressCountry": "CA"
		},
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+1-365-292-6333",
			"contactType": "Customer Service",
			"email": "info@silverseedinv.com",
			"availableLanguage": ["English"]
		},
		"sameAs": [
			"https://www.linkedin.com/company/silver-seed-investments"
		],
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "5",
			"reviewCount": "100"
		},
		"priceRange": "$$$"
	};

	return (
		<html lang="en">
			<body className={inter.className}>
				{/* JSON-LD Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ThemeProvider defaultTheme="light">{children}</ThemeProvider>
			</body>
		</html>
	);
}
