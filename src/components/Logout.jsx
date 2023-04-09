import { useSearchParams } from "react-router-dom";

import Card from "~/components/card/Card";
import Button from "~/components/button/Button";

export default function Logout() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Card style={{ margin: "140px auto" }}>
      <Button
        label="Выход"
        style={{ marginTop: "42px" }}
        type="button"
        onClick={() => setSearchParams(searchParams.delete("title"))}
      />
    </Card>
  );
}
