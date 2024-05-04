import { AlertClock } from "./Events/AlertClock";
import { Clock } from "./useState - useEffect/Clock";
import { Container } from "./Container";
import { Counter } from "./useState - useEffect/Counter";
import { MouseClicker } from "./Handling Events/MouseClicker";
import { Welcome } from "./Conditional Rendering/Welcome";
import { LanguageContext } from "./useState - useEffect/LanguageContext";
import { useState } from "react";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      <label htmlFor="languages">Select a language:
      <select name="languages" id="languages" defaultValue="-" onChange={(e) => {handleLanguage(e.target.value)}}>
        <option value="-">-</option>
        <option value="it" onChange={() => handleLanguage(`it`)} >Italian
        </option>
        <option value="en" onChange={() => handleLanguage(`en`)}>English
        </option>
      </select>
      </label>

      <Container title={<h1>Esercizi - Alessandro Canonico</h1>}>
        <LanguageContext.Provider value={language}>
          <Welcome name="Tutor" age={27} />
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
