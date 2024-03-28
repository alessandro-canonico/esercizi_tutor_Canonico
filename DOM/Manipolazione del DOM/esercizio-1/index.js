const addProduct = () => {
  if (document.querySelector("input").value.length == 0) {
    alert("insert a valid task");
  } else {
    document.querySelector("ul").innerHTML += `
        <li>
            ${document.querySelector("input").value}
            <input type="checkbox">  
        </li>`;
  }
};
