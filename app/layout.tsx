import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { TopLeftImg } from "./components/TopLeftImg/TopLeftImg";
import { Navbar } from "./components/Navbar";
import { Transition } from "./components/Transition";
import "../src/css/globals.css";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "GSA Portfólio",
    description: "This is a Portfólio website for the GSA.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body
                className={` page bg-site text-white bg-cover bg-no-repeat ${sora.className} font-sora relative`}
            >
                <Navbar />
                <TopLeftImg />

                {children}
            </body>
        </html>
    );
}
