import { AlertClock } from "./Events/AlertClock";
import { Clock } from "./useState - useEffect/Clock";
import { Container } from "./Container";
import { Counter } from "./useState - useEffect/Counter";
import { MouseClicker } from "./Handling Events/MouseClicker";
import { Welcome } from "./Conditional Rendering/Welcome";

export function App() {
  return (
    <div>
      {/* <div>
      <label htmlFor="languages"></label>
      <select name="languages" id="languages">
        <option value="en"><button onClick={() => handleLanguage(`en`)}>English</button></option>
        <option value="it" onClick={() => handleLanguage(`it`)}>Italian</option>
      </select>
      </div> */}

      <Container title={<h1>Esercizi - Alessandro Canonico</h1>}>
          <Welcome name="John" age={27} />
          <hr />
          <AlertClock/>
          <hr />
          <Counter
            initialValue={1}
            incrementValue={(c) => c + 1}
            decrementValue={(c) => c - 1}
          />
          <hr />
          <h2>Clock:</h2>
          <Clock />
          <hr />
          <MouseClicker />
      </Container>
    </div>
  );
}
