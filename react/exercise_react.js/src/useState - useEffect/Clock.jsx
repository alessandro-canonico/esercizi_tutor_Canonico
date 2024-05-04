import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";


export function Clock () {    
    const [date, setDate] = useState(new Date())
    const language = useContext(LanguageContext)

    useEffect(() => {
        setInterval(() => {
        setDate(new Date())}, 1000)
    }, [])

    return (
        <div className="clock">
            <h4>{language === "en" ? `Current Time` : `Ora Attuale`}</h4>
            <p>{date.toLocaleTimeString()}</p> 
        </div>
    ) 
}