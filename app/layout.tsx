import Header from "@/components/molecules/Header";
import "./globals.css";
import { Providers } from "@/redux/provider";
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="min-h-screen bg-background flex flex-col items-center">
            <Header />
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
