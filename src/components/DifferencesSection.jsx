import { useState } from "react";
import { differences } from "../data.js";
import Button from "./Button/Button.jsx";

export default function DifferencesSection() {
  const [content, setContent] = useState("нажми");
  function handleClick(type) {
    setContent(type);
  }
  return (
    <section>
      <h3>Чем мы отличаемся</h3>
      <Button onClick={() => handleClick("easy")} isActive={true}>button-1</Button>
      <Button onClick={() => handleClick("program")}>button333</Button>
      <Button onClick={() => handleClick("way")}>button222</Button>
      <p>{differences[content]}</p>
    </section>
  );
}
