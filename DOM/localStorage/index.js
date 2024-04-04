const btn = document.querySelector(".btn");

function setName(username) {
  const nameTitle = document.querySelector(".title-name");

  nameTitle.innerText = username;

  localStorage.setItem(`name-title`, username);
}

btn.addEventListener(`click`, () => {
  const firstNameInput = document.querySelector(".firstname");
  const firstNameValue = firstNameInput.value;
  setName(firstNameValue);

  const emailInput = document.querySelector(".email")
  const emailValue = emailInput.value
  localStorage.setItem(`email`, emailValue)

  const surnameInput = document.querySelector(".lastname")
  const surnameValue = surnameInput.value
  localStorage.setItem(`surname`, surnameValue)
});

const savedName = localStorage.getItem(`name-title`);

if (savedName) {
  setName(savedName);
}
