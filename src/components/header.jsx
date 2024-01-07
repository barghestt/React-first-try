import logo from "/vite.svg";
import { useState } from "react";
let now = new Date();
export function Header() {
  const [curTime, setTime] = useState(now);
  setInterval(() => {
    setTime(new Date());
  }, 1000);
  return (
    <header>
      <img src={logo} alt="Logo" />
      {/* <h3>First Project</h3> */}
      <span>Время: {curTime.toLocaleString()}</span>
    </header>
  );
}
