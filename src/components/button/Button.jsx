import "./Button.css";

export default function Button({
  style,
  label,
  onClick,
  type = "submit",
  className = "button",
}) {
  return (
    <button className={className} onClick={onClick} type={type} style={style}>
      {label}
    </button>
  );
}
