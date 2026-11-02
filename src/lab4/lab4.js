const loginBtn = document.getElementById("loginBtn");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");

const username = "thai@gmail.com";
const password = "123456";

loginBtn.addEventListener("click", () => {
if(inputUsername.value === username && inputPassword.value === password) {
    window.location.href = "success.html";
}else {
    alert("Invalid username or password");
    inputUsername.style.borderColor = "red";
    inputPassword.style.borderColor = "red";
}
})

