import { useContext } from "react";
import { Age } from "./Age";
import { LanguageContext } from "../useState - useEffect/LanguageContext";

export function Welcome ({ name, age }) {
    const language = useContext(LanguageContext)

    return ( <div>
        <h1 className="welcome">{language === `en` ? `Welcome, ${ name }` : `Benvenuto, ${ name}`}</h1>
        {<Age age={age}/>}
        {age >= 18 && <Age age={age}/>}
        {age && <Age age={age}/>}
        {age >= 18 && age <= 65 && <Age age={age}/>}
        {age >= 18 && age <= 65 && name == `John` && <Age age={age}/>}
    </div>)
}
