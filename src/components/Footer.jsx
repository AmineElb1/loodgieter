import { NAV } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div><strong>AK &amp; Zonen</strong><br />Verwarming in Boom en omstreken</div>
      <div className="row">{NAV.slice(0, 3).map(([l, h]) => <a key={h} href={h}>{l}</a>)}</div>
      <div>© {new Date().getFullYear()} AK&amp;zonen</div>
    </footer>
  );
}
