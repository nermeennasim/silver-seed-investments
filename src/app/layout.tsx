import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Silver Seed Investment - Growing Wealth Together",
	description:
		"Pathway to financial freedom through smart real estate investments. Ethical investments with elevated returns.",
	keywords:
		"real estate investment, property management, wealth building, financial freedom",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<title>Silver Seed Investment - Growing Wealth Together</title>
				<meta
					name="description"
					content="Pathway to financial freedom through smart real estate investments. Ethical investments with elevated returns."
				/>
				<meta
					name="keywords"
					content="real estate investment, property management, wealth building, financial freedom"
				/>
				<meta name="author" content="Silver Seed Investment" />
				<meta name="robots" content="index, follow" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</head>

			<body className={inter.className}>
				<ThemeProvider defaultTheme="light">{children}</ThemeProvider>
			</body>
		</html>
	);
}
