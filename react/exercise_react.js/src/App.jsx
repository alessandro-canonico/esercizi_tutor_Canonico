import { AlertClock } from "./AlertClock";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Welcome name="John" age={17} />
      <AlertClock />
    </div>
  );
}
