import { useState } from "react";
import "./Input.css";

export default function Input({
  title,
  onChange,
  value,
  error,
  type = "text",
}) {
  const [focus, setFocus] = useState(false);
  return (
    <label className={`field ${focus && "field--focus"}`}>
      <div className="field__title">{title}</div>
      <input
        className="field__input"
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        type={type}
      />
      <div className="field__error">{error}</div>
    </label>
  );
}
