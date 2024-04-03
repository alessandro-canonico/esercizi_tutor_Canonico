const html = document.documentElement

const body = html.children[1]

const ul = body.children[0]

console.log(ul.parentElement);

const liSecond = ul.children[1]

console.log(liSecond);
console.log(liSecond.nextElementSibling);
console.log(liSecond.previousElementSibling);