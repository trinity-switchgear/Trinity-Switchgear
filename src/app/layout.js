import "@/app/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat/WhatsAppFloat";
import Script from "next/script"; // ✅ Import Next.js Script for JSON-LD

export const metadata = {
  title:
    "Trinity Electric Syndicate | Electrical & Switchgear Supplier in India",
  description:
    "Trinity Electric Syndicate is a leading supplier of electrical & switchgear products in India.",
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

        {/* ✅ Local Business JSON-LD */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalBusiness",
              name: "Trinity Electric Syndicate",
              url: "https://www.trinityswitchgear.com",
              telephone: "+91-XXXXXXXXXX", // replace with real number
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kalbadevi",
                addressRegion: "Mumbai",
                postalCode: "400002",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
