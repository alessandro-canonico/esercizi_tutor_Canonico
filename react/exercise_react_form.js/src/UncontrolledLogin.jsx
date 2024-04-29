export function UncontrolledLogin() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

/*     const username = event.target.elements.namedItem("username").value;
    const password = event.target.elements.namedItem("password").value;
    const checkbox = event.target.elements.namedItem("remember").checked; */

    const data = {
      username: formData.get(`username`),
      password: formData.get(`password`),
      checkbox: formData.get(`remember`) === `on` ? true : false,
    };

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" />
      <input name="password" type="password" />
      <input name="remember" type="checkbox" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
