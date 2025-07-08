
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});





export const metadata = {
  title: "Pak Alpha Manufacturing",
  description: "BUILD. BOND. BEAUTIFY.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Header />
        {children}
        <Toaster position="bottom-center" toastOptions={{ duration: 1000 }} />
        <Footer />
      </body>
    </html>
  );
}
