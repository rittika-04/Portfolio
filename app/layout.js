import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const ovo = OvoFont({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Rittika Shaw | Frontend Developer",
  description: "Portfolio of Rittika Shaw, focused on React.js, JavaScript, responsive interfaces, and API-driven web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white text-slate-900 transition-colors dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
