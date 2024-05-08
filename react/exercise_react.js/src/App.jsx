import { Container } from "./Container";
import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Welcome } from "./React-Router/Welcome";
import { Counter } from "./React-Router/Counter";
import { GithubUserList } from "./React-Router-6-7/GithubUserList";
import { ShowGithubUser } from "./React-Router-6-7/ShowGithubUser";

export function App() {
  return (
    <Container
      title={
        <div>
          <h1>Esercizi - Alessandro Canonico</h1>
          <Link to="/">Welcome - Home</Link> |{" "}
          <Link to="/counter">Counter</Link> |{" "}
          <Link to="/users-list">Github User List</Link> |{" "}
          <Link to="login">Not Found Test</Link>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Welcome name="Alessandro" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users-list" element={<GithubUserList/> }> 
          <Route path=":username" element={<ShowGithubUser/>} />
        </Route>
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
