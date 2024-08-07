import { Roboto } from "next/font/google";
import Sidebar from "../components/sidebar";
import Footer from '../components/footer';
import "@/app/globals.css";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import Script from 'next/script';
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';
import { SessionProvider } from "next-auth/react";
import Providers from "../Providers";

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Pollo Petote",
  description: "Restaurante",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <ThemeProvider>
        <Script src="https://kit.fontawesome.com/32bab276f2.js" crossorigin="anonymous" />
        <body className={`${roboto.className} bg-gray-50 dark:bg-gray-900 transition-all`}>
          <NextTopLoader color="#ffff00" />
          <main className="flex overflow-hidden">
            <Sidebar />
            <div className="overflow-auto p-2 h-screen w-full">
              {children}
            </div>
          </main>
          <Toaster richColors />
        </body>
      </ThemeProvider>
    </Providers>
  );
}
