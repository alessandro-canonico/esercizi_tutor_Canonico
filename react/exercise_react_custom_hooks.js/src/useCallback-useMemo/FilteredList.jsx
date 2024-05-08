import { useMemo } from "react";

export function FilteredList ( {list} ) {

    const filteredList = useMemo(() => {
        return list.filter((users) => users.age > 18)
    }, [list])

    return (
        <ul>
            {filteredList.map((users) => (
                <li key={users.id}>{users.name}</li>
            ))}
        </ul>
    )
}