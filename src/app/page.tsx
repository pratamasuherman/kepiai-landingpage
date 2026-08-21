import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { WhatKepiaiReplaces } from "@/components/home/what-kepiai-replaces";
import { Products } from "@/components/home/products";
import { WhoItsFor } from "@/components/home/who-its-for";
import { QuizInvite } from "@/components/home/quiz-invite";

export const metadata: Metadata = {
  title: "Kepiai — Chill. We've got the metrics.",
  description:
    "Every platform hands you numbers. Kepiai hands you the reason behind them — performance, content, audience, and campaigns, unified into one workspace that turns days of reporting into minutes.",
  openGraph: {
    title: "Kepiai — Chill. We've got the metrics.",
    description:
      "Every platform hands you numbers. Kepiai hands you the reason behind them — performance, content, audience, and campaigns, unified into one workspace that turns days of reporting into minutes.",
    url: "https://kepiai.com",
    siteName: "Kepiai",
    type: "website",
    locale: "id_ID",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatKepiaiReplaces />
      <Products />
      <WhoItsFor />
      <QuizInvite />
    </>
  );
}
