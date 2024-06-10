import { Color } from "./Rendering List/Color";
import { Colors } from "./Rendering List/Colors";
import { FocusableInput } from "./Refs/FocusableInput";
import { Login } from "./Controlled Forms/Login";
import { TodoList } from "./Rendering List/TodoList";
import { UncontrolledLogin } from "./Uncontrolled Forms/UncontrolledLogin";
import { Counter } from "./Refs/Counter"

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

      <h2>ToDo List:</h2>
      <TodoList/>

      <h2>Counter</h2>
      <Counter initialValue={0}/>
    </div>
  );
}
