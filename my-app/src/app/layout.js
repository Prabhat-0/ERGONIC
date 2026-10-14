import { Geist, Geist_Mono, Metal, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/NavBar";
import { DM_Sans} from "next/font/google";
import Footer from "@/component/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-matter",
  weight: ["300", "400", "500", "700"],
});

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
      className={`${metal.variable} ${outfit.variable} ${dmSans.variable} h-full antialiased no-scrollbar`}
    >
      <body className="min-h-full flex flex-col bg-black ">
        <NavBar/>
        <main>
          {children}
        </main>
          <Footer/>
        </body>
    </html>
  );
}
