const person = new Object(); 

person.firstName = `${document.getElementById("firstName").value}`
person.lastName = `${document.getElementById("lastName").value}`
person.age = `${document.getElementById("age").value}`

const form = document.querySelector("form")

form.setAttribute(`data-person`, `${JSON.stringify(person)}`)