import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <Container title={<h1>Esercizi - Alessandro Canonico</h1>}>
      <Welcome name="John" age={27} />
      <hr />
      <AlertClock />
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
  );
}
