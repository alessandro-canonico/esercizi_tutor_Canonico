import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock () {
    const language = useContext(LanguageContext)
    
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
        setDate(new Date())}, 1000)
    }, [])

    return (
        <div className="clock">
            <h4>{language === `en` ? `Current Time` : `Ora Attuale`}</h4>
            <p>{date.toLocaleTimeString()}</p> 
        </div>
    ) 
}