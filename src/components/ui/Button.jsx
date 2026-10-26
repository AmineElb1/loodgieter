import "./Button.css";

/**
 * Eén knopcomponent voor alle acties.
 * variant: "primary" (oranje, enige actiekleur) | "light" (wit) | "ghost" (omlijnd)
 * Rendert een <a> wanneer er een href is, anders een <button>.
 */
export default function Button({ variant = "primary", size = "md", href, className = "", children, ...rest }) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
}
