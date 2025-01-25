import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'CodeTech full-satck test',
  description: 'A submission for CodeTech full-satck test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
