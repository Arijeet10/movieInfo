import DarkModeContextProvider from "@/context/DarkModeContextProvider";
import "./globals.css";


export const metadata = {
  title: "Movie Details App",
  description: "browse movie info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
      <DarkModeContextProvider>
      {children}
      </DarkModeContextProvider>
      </body>
    </html>
  );
}
