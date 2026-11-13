import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/playfair-display";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: `${site.name} — ${site.role}`, template: `%s · ${site.name}` },
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
