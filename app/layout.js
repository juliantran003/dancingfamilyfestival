import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dancing Family Festival",
  description:
    "Dancing Family Festival is a 3-day camping festival in South Wales. Join us from July 3)5, 2025 for our first edition.",

  applicationName: "Dancing Family Festival",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Dancing Family Festival, Dancing Family, Music Festival, South Wales, Wales, Wales Music Festival, Three Pools Farm",
    "Yohan",
    "Tatiana",
    "Electronic Dance Festival",
    "Dance Music",
  ],

  creator: "Julian Tran",
  openGraph: {
    title: "Dancing Family Festival",
    description:
      "Dancing Family Festival is a 3-day camping festival in South Wales. Join us from July 3)5, 2025 for our first edition.",
    url: "https://dancingfam.com",
    siteName: "Dancing Family Festival",

    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
