import logo from "/vite.svg";

const now = new Date();
setInterval
export function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      {/* <h3>First Project</h3> */}
      <span>Время: {now.toLocaleTimeString()}</span>
    </header>
  );
}
