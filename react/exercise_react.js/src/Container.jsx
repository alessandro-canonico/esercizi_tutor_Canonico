import { useState } from "react";

export function Container({ title, children }) {
    const [collapsed, setCollapased] = useState(false)
    

    function handleCollapse () {
        setCollapased((data) => !data)
    }


  return (
    <div className="container">
      <div className="container-title">{title} <button onClick={handleCollapse}>Show the exercises</button></div>
      <div className={!collapsed ? "container-content" : "show-content"}>{children}</div>
    </div>
  );
}
