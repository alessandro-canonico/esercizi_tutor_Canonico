import { Container } from "./Container";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Welcome } from "./React-Router/Welcome";
import { Counter } from "./React-Router/Counter";
import { ShowGithubUser } from "./React-Router/ShowGithubUser";

export function App() {
  return (
    <Container
      title={
        <div>
          <h1>Esercizi - Alessandro Canonico</h1>
          <Link to="/">Welcome - Home</Link> |{" "}
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/users/alessandro-canonico">Github User</Link> |{" "}
          <Link to="login">Not Found Test</Link>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Welcome name="Alessandro" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        <Route
          path="*"
          element={
            <div>
              <p>Not Found</p>
              <Link to="/">Back Home</Link>
            </div>
          }
        />
      </Routes>
    </Container>
  );
}
