const addProduct = () => {
  if (document.querySelector("input").value.length == 0) {
    alert("insert a valid task");
  } else {
    const li = document.querySelector("ul").appendChild(document.createElement("li"));
    li.textContent = `${document.querySelector("input").value}`;
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox")
    li.appendChild(checkbox)
  }
};
