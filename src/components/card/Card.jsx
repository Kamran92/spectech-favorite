import Logo from "./assets/Logo";

import "./Card.css";

export default function Card({ children, title, style }) {
  return (
    <article className="card" style={style}>
      <Logo className="card__logo" />
      {title && <h1 className="card__title">{title}</h1>}
      {children}
    </article>
  );
}
