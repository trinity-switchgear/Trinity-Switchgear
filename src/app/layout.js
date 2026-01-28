import "@/app/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat/WhatsAppFloat";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.trinityswitchgear.com"),
  openGraph: {
    title:
      "Trinity Electric Syndicate | Electrical Supplier & Exporter from India",
    description:
      "Leading electrical & switchgear supplier across India and global exporter of MCB, MCCB, RCBO, relays, timers, cables & accessories.",
    url: "https://www.trinityswitchgear.com",
    siteName: "Trinity Electric Syndicate",
    images: ["/og-image.jpg"],
    locale: "en_IN",
    type: "website",
  },
  title:
    "Trinity Electric Syndicate | Electrical & Switchgear Supplier in India",
  description:
    "Trinity Electric Syndicate is a leading electrical & switchgear products supplier across India and a trusted exporter worldwide.",
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

        {/* ✅ Organization + Exporter JSON-LD */}
        <Script
          id="trinity-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Trinity Electric Syndicate",
              url: "https://www.trinityswitchgear.com",
              logo: "https://www.trinityswitchgear.com/logos/logo.png",
              description:
                "Leading electrical & switchgear supplier across India and global exporter of MCB, MCCB, RCBO, relays, timers, cables, wires and accessories.",
              areaServed: "Worldwide",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8652859663", // 👉 replace with real number
                contactType: "sales",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
