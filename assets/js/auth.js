function recaptchaToken() {
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LfNI2EiAAAAACOyFVYOfhRCwZ6-2CpZpP5uwzJg", { action: "submit" })
      .then(function (token) {
        console.log(token);
        localStorage.setItem("token", token);
      });
  });
}

localStorage.setItem("state", "login");

async function login() {
  const email = document.getElementById("loginemail").value;
  const password = document.getElementById("loginpassword").value;

  if (email === "" || password === "") {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = "Please fill out all fields";
    return;
  }

  recaptchaToken();

  const submitBtn = document.getElementById("submitBtn");

  submitBtn.innerHTML = "Loading...";

  const response = await fetch(
    "https://coral-llama-coat.cyclic.app/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        captcha: localStorage.getItem("token")
      },
      body: JSON.stringify({
        email,
        password
      })
    }
  );
  const data = await response.json();
  console.log(data);
  submitBtn.innerHTML = "Login";
  if (data.success === false) {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = data.msg;
    return;
  }

  window.location = "/protectedRoute.html";
}

async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  if (email === "" || password === "" || username === "") {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = "Please fill out all fields";
    return;
  }

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(validRegex)) {
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = "Please enter a valid email";
    return;
  }

  recaptchaToken();
  const submitBtn = document.getElementById("signUpBtn");

  submitBtn.innerHTML = "Loading...";

  const response = await fetch(
    "https://coral-llama-coat.cyclic.app/api/auth/sign-up",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        captcha: localStorage.getItem("token")
      },
      body: JSON.stringify({
        email,
        password,
        username,
        checkbox: getCheckBoxValue()
      })
    }
  );
  const data = await response.json();
  console.log(data);
  submitBtn.innerHTML = "Sign Up";
  if (data.success === false) {
    if (Array.isArray(data.msg)) {
      console.log(data);
      document.getElementById("error").classList.remove("hidden");
      document.getElementById("error").innerHTML = "";
      for (let i = 0; i < data.msg.length; i++) {
        document.getElementById("error").innerHTML += `
        <p>${data.msg[i].message.replace("string", "password")}</p>
        <br />
      `;
      }
      return;
    }
    document.getElementById("error").classList.remove("hidden");
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").innerHTML = data.msg;
    return;
  }

  localStorage.setItem("token", "Bearer " + data.accessToken);

  window.location = `/${data.redirectPage}.html`;
}

function changeState(state) {
  document.getElementById("error").classList.remove("hidden");
  const currentStoredState = localStorage.getItem("state");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signUpForm");
  const formHeading = document.getElementById("formHeading");

  if (state === "login") {
    localStorage.setItem("state", "signup");
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    formHeading.innerHTML = "Welcome to EdContracts";
    document.getElementById("signUpSubheading").classList.remove("hidden");
    return;
  } else if (state === "signup") {
    localStorage.setItem("state", "login");
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    formHeading.innerHTML = "Login";
    document.getElementById("signUpSubheading").classList.add("hidden");
    return;
  }
}

function getCheckBoxValue() {
  const radioButtons = document.getElementsByName("default-radio");
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      console.log(radioButtons[i].value);
      return radioButtons[i].value;
    }
  }
}

function redirectHome() {
  window.location = "/";
}
