import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://putraadm.github.io/zdev"),
  title: "Putra Adimulya Walizhafran | Fullstack Developer",
  description: "Web profil portofolio Putra Adimulya Walizhafran, seorang Fullstack Developer yang berpengalaman dalam membangun aplikasi web modern menggunakan Laravel, React JS, Next.js, dan Tailwind CSS.",
  keywords: ["Fullstack Developer", "Web Developer", "Putra Adimulya Walizhafran", "Programmer Jombang", "Laravel", "React JS", "Next.js", "Tailwind CSS", "Portofolio Website"],
  authors: [{ name: "Putra Adimulya Walizhafran" }],
  openGraph: {
    title: "Putra Adimulya Walizhafran | Fullstack Developer",
    description: "Jelajahi portofolio, pengalaman, dan proyek terbaru dari Putra Adimulya Walizhafran, seorang Fullstack Developer.",
    siteName: "Portofolio Putra Adimulya",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/IMG_20260324_121316.jpeg",
        width: 1200,
        height: 630,
        alt: "Foto Profil Putra Adimulya Walizhafran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Putra Adimulya Walizhafran | Fullstack Developer",
    description: "Jelajahi portofolio dan pengalaman pengembangan web modern dari Putra Adimulya Walizhafran.",
    images: ["/images/IMG_20260324_121316.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${playfair.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
