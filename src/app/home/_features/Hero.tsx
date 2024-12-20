import Link from "next/link";
import React from "react";

interface HeroProps {
  motelName: string;
  motelCity: string;
  minimalCost: number;
}

export default function Hero({ motelName, motelCity, minimalCost }: HeroProps) {
  return (
    <section className="h-screen flex flex-col justify-center gap-10 bg-[url('/images/hotel_example.png')] bg-cover bg-center">
      <h1 className="text-xl">Motel {motelName}</h1>
      <span className="text-lg">O melhor motel de {motelCity}</span>
      <div className="flex gap-8">
        <Link href="/suites">Suítes a partir de R$ {minimalCost}</Link>
        <Link href="/suites">SAIBA MAIS</Link>
      </div>
    </section>
  );
}
