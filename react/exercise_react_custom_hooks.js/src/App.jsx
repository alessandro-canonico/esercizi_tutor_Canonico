import { useState } from "react";
import { Counter } from "./useCallback-useMemo/Counter";
import { GitHubUser } from "./GitHubUser";
import { Login } from "./Login";
import { FilteredList } from "./useCallback-useMemo/FilteredList";
import { CurrentLocation } from "./CurrentLocation";

export function App() {
  const [username, setUsername] = useState(``);

  return (
    <div>
      <Counter />
      <hr />
      <Login />
      <hr />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <GitHubUser username={username} />

      <hr />
      <CurrentLocation/>

      <hr />
      <FilteredList
        list={[
          { name: "Alessandro", id: 1, age: 27 },
          { name: "Giorgia", id: 2, age: 29 },
          { name: "Marco", id: 3, age: 17 },
          { name: "Luca", id: 4, age: 15},
          {name: "Francesco", id: 5, age: 37}
        ]}
      />
    </div>
  );
}
