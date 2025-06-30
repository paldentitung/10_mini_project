const username = document.getElementById("username");
const password = document.getElementById("password");
const password_Icon = document.querySelector(".password-icon");
const loginBtn = document.querySelector(".login-btn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

const modalCloseBtn = document.querySelector(".modal-close-btn");
console.log(modal);
console.log(modalContent);
console.log(modalCloseBtn);
password_Icon.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value === "") {
    modalContent.innerHTML = "please enter the name first ";
    modal.classList.add("active");
  } else if (password.value === "") {
    modalContent.innerHTML = "please enter the password first ";
    modal.classList.add("active");
  } else {
    modalContent.innerHTML = "login successfully";
  }
});
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
