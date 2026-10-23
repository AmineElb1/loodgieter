import { PHONE, PHONE_LABEL, EMAIL } from "../data/content";

export default function TopBar() {
  return (
    <div className="topbar">
      <a href={`tel:${PHONE}`}>Bel {PHONE_LABEL}</a>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
    </div>
  );
}
