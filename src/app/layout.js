import "@/app/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat/WhatsAppFloat";

export const metadata = {
  title: "Trinity Electric Syndicate",
  description: "100+ years - Switchgear & Electrical Supplier, Mumbai",
    icons: {
    icon: [
      {
        url: "/icon-light.png",
        media: "(prefers-color-scheme: dark)",
      }
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
