const html = document.documentElement

const body = html.children[1]

const ul = body.children[0]

console.log(ul.parentElement.innerText);

const liSecond = ul.children[1]

console.log(liSecond.innerText);
console.log(liSecond.nextElementSibling.innerText);
console.log(liSecond.previousElementSibling.innerText);