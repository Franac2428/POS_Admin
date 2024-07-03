import { Roboto } from "next/font/google";
import Sidebar from "@/app/components/sidebar";
import "@/app/globals.css";
import { ThemeProvider } from "@/app/components/theme/ThemeProvider";
import Script from 'next/script';
import { Toaster } from 'sonner';
import NextTopLoader from 'nextjs-toploader';
import Providers from "@/app/Providers";

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
