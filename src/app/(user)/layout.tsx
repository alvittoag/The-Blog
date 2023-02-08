import "../globals.css";
import { Banner, Header } from "../components/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="max-w-6xl mx-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
