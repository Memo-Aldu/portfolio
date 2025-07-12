import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Memo Al-Dujaili. Connect via LinkedIn, email, or GitHub for collaboration opportunities and professional inquiries.",
  openGraph: {
    title: "Contact | Memo Al-Dujaili",
    description: "Get in touch with Memo Al-Dujaili for collaboration opportunities",
    url: "https://memoaldu.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
