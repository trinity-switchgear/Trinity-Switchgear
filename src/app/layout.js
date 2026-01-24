import "@/app/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat/WhatsAppFloat";

export const metadata = {
  title:
    "Trinity Electric Syndicate | Switchgear, MCB, MCCB, Etc Supplier in Mumbai",
  description:
    "Trinity Electric Syndicate is a leading electrical supplier in Kalbadevi, Mumbai. We deal in Switchgears, MCB, MCCB, RCBO, Timers, Relays, Starters and all electrical accessories near you.",
  icons: {
    icon: [
      {
        url: "/icon-light.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
