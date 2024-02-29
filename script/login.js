let form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");
  let msg;
  e.preventDefault();

  if (username === "AdminSEF123" && password === "SeF@ctORy$$456") {
    window.location.replace("../pages/main.html");
  } else {
    msg = "wrong pass or email please try again!";
    error.innerText = msg;
  }
});
