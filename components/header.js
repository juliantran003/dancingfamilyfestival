"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <menu className="header_menu">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/lineup">lineup</Link>
        </li>
        <li>
          <Link href="/information">information</Link>
        </li>
        <li>
          <Link href="/involved">get involved</Link>
        </li>
        <li>
          <Link href="/about">about us</Link>
        </li>
      </menu>
      <div className="mobileHeader">
        {menu === false ? (
          <button onClick={() => setMenu(true)}>
            M<br></br>E<br></br>N<br></br>U
          </button>
        ) : (
          <button onClick={() => setMenu(false)}>X</button>
        )}
        <a href="/about">?</a>
        <div>
          <Image src="/img/icons/insta-white.png" height={30} width={30} />
        </div>
      </div>
      <menu className={menu ? "mobileHeader_menu" : "mobileHeader_menu_hide"}>
        <li onClick={() => setMenu(false)}>
          <Link href="/">home</Link>
        </li>
        <li onClick={() => setMenu(false)}>
          <Link href="/lineup">lineup</Link>
        </li>
        <li onClick={() => setMenu(false)}>
          <Link href="/information">information</Link>
        </li>
        <li onClick={() => setMenu(false)}>
          <Link href="/involved">get involved</Link>
        </li>
        <li onClick={() => setMenu(false)}>
          <Link href="/about">about us</Link>
        </li>
      </menu>
    </header>
  );
}
