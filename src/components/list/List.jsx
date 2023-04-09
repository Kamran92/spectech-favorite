import { Children, cloneElement } from "react";

import "./List.css";

export default function List({ children }) {
  if (!Children.count(children)) return;

  return (
    <ul className="list">
      {Children.map(children, (child) => {
        return <li className="list__item">{child}</li>;
      })}
    </ul>
  );
}
