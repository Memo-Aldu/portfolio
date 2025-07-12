import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and technical skills of Memo Al-Dujaili, including work at Comtech Telecommunications and Zafin, plus comprehensive tech stack.",
  openGraph: {
    title: "Experience | Memo Al-Dujaili",
    description: "Professional experience and technical skills of Memo Al-Dujaili",
    url: "https://memoaldu.com/experience",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
