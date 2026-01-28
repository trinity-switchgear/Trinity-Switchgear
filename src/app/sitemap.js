export default function sitemap() {
  const baseUrl = "https://www.trinityswitchgear.com";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/accessories`, lastModified: new Date() },
    { url: `${baseUrl}/broadcast`, lastModified: new Date() },
    { url: `${baseUrl}/cables-wires`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/pipes`, lastModified: new Date() },
    { url: `${baseUrl}/smart-devices`, lastModified: new Date() },
    { url: `${baseUrl}/switchgear`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
  ];
}
