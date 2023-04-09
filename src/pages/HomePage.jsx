import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import LoginForm from "~/components/LoginForm";
import RestorePassword from "~/components/RestorePassword";
import Logout from "../components/Logout";

import "./HomePage.css";

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const [phone, setPhone] = useState("");
  const title = searchParams.get("title");

  if (title === "logout") return <Logout />;
  return (
    <div className={`wrap ${title === "restore-password" && "wrap--active"}`}>
      <div className="front">
        <LoginForm phone={phone} onSetPhone={setPhone} />
      </div>
      <div className="back">
        <RestorePassword onSetPhone={setPhone} />
      </div>
    </div>
  );
}
