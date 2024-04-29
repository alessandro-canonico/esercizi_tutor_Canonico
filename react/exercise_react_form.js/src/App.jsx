import { Color } from "./Color";
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
    </div>
  );
}
