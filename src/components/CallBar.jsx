import { PHONE } from "../data/content";

export default function CallBar() {
  return (
    <div className="callbar"><a className="btn" href={`tel:${PHONE}`}>Bel nu</a></div>
  );
}
