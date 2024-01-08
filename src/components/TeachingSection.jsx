import WayToTeach from "./WayToTeach";
import { ways} from "../data.js";

export default function TeachingSection() {
  return (
    <section>
      <h1>Hello React!!</h1>
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way}></WayToTeach>
        ))}
      </ul>
    </section>
  );
}
