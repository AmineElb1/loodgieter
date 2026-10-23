import { useState } from "react";
import logo from "../assets/logo.png";
import { NAV } from "../data/content";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="header">
      <a href="#top"><img src={logo} alt="AK & Zonen" className="logo" /></a>
      <nav className={"nav" + (menu ? " open" : "")} aria-label="Hoofdmenu">
        {NAV.map(([l, h]) => (
          <a key={h} href={h} onClick={() => setMenu(false)}>{l}</a>
        ))}
      </nav>
      <a className="btn hide-m" href="#contact">Offerte aanvragen</a>
      <button className="burger" aria-label="Menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>☰</button>
    </header>
  );
}
