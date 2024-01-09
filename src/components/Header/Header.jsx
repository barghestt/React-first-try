import logo from "/vite.svg";
import { useState } from "react";
// import classes from "./Header.module.css";
import { styled } from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  a {
    color: white;
    text-decoration: none;
    margin: 10px;
  }
  
  a:hover {
    background-color: #555;
  }
  
`

let now = new Date();
export function Header() {
  const [curTime, setTime] = useState(now);
  setInterval(() => {
    setTime(new Date());
  }, 1000);
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      {/* <h3>First Project</h3> */}
      <span>Время: {curTime.toLocaleString()}</span>
      <a href="#">Нажми на ссылку</a>
    </HeaderContainer>
  );
}
