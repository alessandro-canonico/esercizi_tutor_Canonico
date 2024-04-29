import { Color } from "./Color";
import { Colors } from "./Colors";
import { FocusableInput } from "./FocusableInput";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";

export function App() {
  return (
    <div>
      <h1>Esercizi: </h1>
      <hr></hr>
      <h2>Controlled Form:</h2>
      <Login />

      <h2>Uncontrolled Form:</h2>
      <UncontrolledLogin />

      <h2>Focusable Input</h2>
      <FocusableInput />

      <h2>Color</h2>
      <Color color={[{ id: 1, name: `green` }]} />

      <h2>Colors</h2>
      <Colors items={[{ id: 1, name: `green` }, { id: 2, name: `red` }, { id: 3, name: `yellow` }]} />
    </div>
  );
}
