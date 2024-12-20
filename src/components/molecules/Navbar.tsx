import Link from "next/link";
import React from "react";
import Icon from "../atoms/icons";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center py-6 space-x-40 fixed w-full">
      <img
        className="w-60 max-h-20 object-contain object-center"
        src="/images/teste_logo.png"
        alt="logo da empresa"
        width={60}
        height={20}
      />

      <ul className="flex items-center space-x-10">
        <li className="font-semibold">
          <Link href="">Home</Link>
        </li>
        <li className="font-semibold">
          <Link href="/motel">O motel</Link>
        </li>
        <li className="font-semibold">
          <Link href="/suites">Suítes</Link>
        </li>
        <li className="font-semibold">
          <Link href="/cortesias">Cortesias</Link>
        </li>
        <li className="font-semibold">
          <Link href="/cardapio">Cardápio</Link>
        </li>
        <li className="font-semibold">
          <Link href="facebook">
            <Icon name="facebook" />
          </Link>
        </li>
        <li className="font-semibold">
          <Link href="instagram">
            <Icon name="instagram" />
          </Link>
        </li>
        <li className="font-semibold">
          <Link
            href=""
            className="flex items-center space-x-2 py-2 px-4 bg-green-500"
          >
            <Icon color="green" name="whatsapp" />
            <span>Whatsapp</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
