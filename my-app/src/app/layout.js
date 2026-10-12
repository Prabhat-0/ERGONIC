import { Geist, Geist_Mono, Metal, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/NavBar";

const metal = Metal({
  weight: "400",
  variable: "--font-metal",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: "variable",     
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "ERGONIC",
  description: "All Engineering solutions at one place",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${metal.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <NavBar/>
        <main>
          {children}
        </main>
          
        </body>
    </html>
  );
}
