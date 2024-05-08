/* import { useState } from "react"; */

export function Container({ title, children }) {
/*     const [collapsed, setCollapased] = useState(false)
    

    function handleCollapse () {
        setCollapased((data) => !data)
    } */


  return (
    <div className="container">
      <div className="container-title">{title}</div>
      <div >{children}</div>
    </div>
  );
}
