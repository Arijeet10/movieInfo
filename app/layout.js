import "./globals.css";


export const metadata = {
  title: "Movie Details App",
  description: "browse movie info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
