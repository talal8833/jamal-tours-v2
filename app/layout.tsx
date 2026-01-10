import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Jamal Tours | Certified Tour Guide in Oman",
  description:
    "Discover the beauty of Oman with Jamal, a certified local tour guide offering unique and unforgettable adventures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
