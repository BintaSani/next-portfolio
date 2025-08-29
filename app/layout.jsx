import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ThemeProvider } from "@/context/themeContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Binta Sani",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
