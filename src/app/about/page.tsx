import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story behind Kepiai — social analytics and reporting built for 2 a.m.",
  openGraph: {
    title: "Our Story | Kepiai",
    description:
      "The story behind Kepiai — social analytics and reporting built for 2 a.m.",
    url: "https://kepiai.com/about",
    siteName: "Kepiai",
    type: "website",
    locale: "id_ID",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
