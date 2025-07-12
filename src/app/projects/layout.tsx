import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio of software projects by Memo Al-Dujaili, including full-stack applications, microservices, and cloud-native solutions built with modern technologies.",
  openGraph: {
    title: "Projects | Memo Al-Dujaili",
    description: "Portfolio of software projects by Memo Al-Dujaili",
    url: "https://memoaldu.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
