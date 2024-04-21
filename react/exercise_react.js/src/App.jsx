import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>Esercizi: </h1>
      <hr></hr>

      <Welcome name="John" age={27} />
      
      <AlertClock/>

      <Counter initialValue={1} incrementValue={(c) => c+1} decrementValue={(c) => c-1}/>

      <Clock/>
    </div>
  );
}
