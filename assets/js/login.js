async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = "Please fill out all fields";
    return;
  }

  const submitBtn = document.getElementById("submitBtn");

  submitBtn.innerHTML = "Loading...";

  console.log(email, password);
  const response = await fetch(
    "https://coral-llama-coat.cyclic.app/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  );
  const data = await response.json();
  submitBtn.innerHTML = "Login";
  if (data.success === false) {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = data.msg;
    return;
  }

  window.location = "/protectedRoute.html";
}

function redirectHome() {
  window.location = "/";
}
