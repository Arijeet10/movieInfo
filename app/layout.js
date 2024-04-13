import DarkModeContextProvider from "@/context/DarkModeContextProvider";
import "./globals.css";
import SearchContextProvider from "@/context/SearchContextProvider";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Movie Details App",
  description: "browse movie info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full">
      <DarkModeContextProvider>
      <SearchContextProvider>
      <Navbar />
      {children}
      </SearchContextProvider>
      </DarkModeContextProvider>
      </body>
    </html>
  );
}
