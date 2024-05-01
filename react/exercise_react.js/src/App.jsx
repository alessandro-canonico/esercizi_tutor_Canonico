import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";

export function App() {
  const [language, setLanguage] = useState(`en`);

  function handleLanguage() {
    setLanguage(language);
  }

  return (
    <div>
      <div>
      <label htmlFor="languages"></label>
      <select name="languages" id="languages">
        <option value="en"><button onClick={() => handleLanguage(`en`)}>English</button></option>
        <option value="it" onClick={() => handleLanguage(`it`)}>Italian</option>
      </select>
      </div>

      <Container title={<h1>Esercizi - Alessandro Canonico</h1>}>
        <LanguageContext.Provider value={language}>
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
        </LanguageContext.Provider>
      </Container>
    </div>
  );
}
