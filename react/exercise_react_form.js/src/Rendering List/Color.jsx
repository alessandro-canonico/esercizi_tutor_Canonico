export function Color ({ color }) {
    return (
        <ul>
            {color.map((color) => 
            <li key={color.id}>{color.name}</li>)}
        </ul>
    )
}