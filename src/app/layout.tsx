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
			<body className={inter.className}>
				<ThemeProvider defaultTheme="light">{children}</ThemeProvider>
			</body>
		</html>
	);
}
