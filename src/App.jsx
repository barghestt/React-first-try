import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/header.jsx";
import WayToTeach from "./components/WayToTeach.jsx";
import { ways, differences } from "./data.js";
import Button from "./components/Button/Button.jsx";
function App() {
  const [content, setContent] = useState("Нажми");
  function handleClick(type) {
    setContent(type);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section>
          <h1>Hello React!!</h1>
          <ul>
            {ways.map((way) => (
              <WayToTeach {...way}></WayToTeach>
            ))}
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся</h3>
          <Button onClick={() => handleClick("easy")}>button-1</Button>
          <Button onClick={() => handleClick("program")}>button333</Button>
          <Button onClick={() => handleClick("way")}>button222</Button>
          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
