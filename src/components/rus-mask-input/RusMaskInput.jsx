import Input from "../input/Input";

import formatRusPhone from "~/utils/formatRusPhone";

export default function RusMaskInput({ onChange, value, ...props }) {
  const change = (v) => {
    if (v === "+7 ") {
      onChange("");
      return;
    }
    const value = formatRusPhone(v).reset();
    if (value.length > 11) return;
    onChange(value);
  };
  return (
    <Input onChange={change} value={formatRusPhone(value).add()} {...props} />
  );
}
