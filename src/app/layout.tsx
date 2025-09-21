import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Roboto, Inter, Russo_One, Audiowide, 
        Open_Sans, Fredoka, Baloo_2, Nunito, 
        Bebas_Neue, Montserrat, Lato,} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({weight:"400", subsets:["latin"]});
const roboto = Roboto({weight:"400", subsets:["latin"]});
const inter = Inter({weight:"400", subsets:["latin"]});
const russoOne = Russo_One ({weight:"400", subsets:["latin"]});
const audioWise = Audiowide({weight:"400", subsets:["latin"]});
const OpenSans = Open_Sans({weight:"400", subsets:["latin"]})
const fredoka = Fredoka({weight:"400", subsets:["latin"]});
const baloo2 = Baloo_2({weight:"600", subsets:["latin"]});
const nunito = Nunito({weight:"700", subsets:["latin"]});
const bebasNeue = Bebas_Neue({weight:"400", subsets:["latin"]});
const montserrat = Montserrat({weight:"400", subsets:["latin"]});
const lato = Lato({weight:"400", subsets:["latin"]});

export const metadata: Metadata = {
  title: "WWGS - World Wide Game Store",
  description: "WWGS – World Wide Game Store. A modern e-commerce platform where gamers can explore and purchase PlayStation, Xbox, and PC titles with a smooth shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}



// colors:

/*
blue - #068FFF 
green - #00993d
black - #151515
purple - #9d14ff
withe - #fff
*/
