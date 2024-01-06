import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/header.jsx";
import { ways } from "./data.js";

function WayToTeach(props) {
  return (
    <li>
      <p>
        <strong>{props.title}</strong>
        {props.description}
      </p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section>
          <h1>Hello React!!</h1>
          <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description} />
            <WayToTeach title={ways[1].title} description={ways[1].description} />
            <WayToTeach title={ways[2].title} description={ways[2].description} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
