import { useEffect, useState } from "react";
import { COMPANY, NAV } from "../content/content";
import { IMG } from "../assets/images";
import { handleAnchorClick } from "../lib/smoothScroll";
import Button from "./ui/Button";
import { MenuIcon, PhoneIcon } from "./ui/Icons";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const onNavClick = (e) => {
    setOpen(false);
    handleAnchorClick(e);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a className="site-header__brand" href="#top" onClick={onNavClick} aria-label="AK & Zonen, naar het begin van de pagina">
          <img src={IMG.logo.src} srcSet={IMG.logo.srcSet} sizes="96px" width={IMG.logo.width} height={IMG.logo.height} alt="" />
        </a>

        <nav id="hoofdmenu" className={`site-nav${open ? " is-open" : ""}`} aria-label="Hoofdmenu">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={onNavClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop: dezelfde actie blijft vast in de header zichtbaar */}
        <div className="site-header__actions">
          <a className="site-header__tel" href={`tel:${COMPANY.phone}`}>
            <PhoneIcon width={18} height={18} />
            {COMPANY.phoneLabel}
          </a>
          <Button href="#contact" onClick={handleAnchorClick}>
            Offerte aanvragen
          </Button>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="hoofdmenu"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} width={26} height={26} />
          <span className="sr-only">{open ? "Sluit het menu" : "Open het menu"}</span>
        </button>
      </div>
    </header>
  );
}
