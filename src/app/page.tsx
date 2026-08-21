import { Hero } from "@/components/home/hero";
import { WhatKepiaiReplaces } from "@/components/home/what-kepiai-replaces";
import { Products } from "@/components/home/products";
import { WhoItsFor } from "@/components/home/who-its-for";
import { QuizInvite } from "@/components/home/quiz-invite";

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
