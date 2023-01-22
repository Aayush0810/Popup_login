async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const name = document.getElementById("name").value;

  if (email === "" || password === "" || username === "" || name === "") {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = "Please fill out all fields";
    return;
  }

  const submitBtn = document.getElementById("submitBtn");

  submitBtn.innerHTML = "Loading...";

  const response = await fetch(
    "https://coral-llama-coat.cyclic.app/api/auth/sign-up",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        username,
        name
      })
    }
  );
  const data = await response.json();

  submitBtn.innerHTML = "Sign Up";
  if (data.success === false) {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = data.msg;
    return;
  }

  window.location = "/login.html";
}

function redirectHome() {
  window.location = "/";
}
