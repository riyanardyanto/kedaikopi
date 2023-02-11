// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hambrger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan menu
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Googlesheet input
const scriptURL = "https://script.google.com/macros/s/AKfycbw813lyYWh0FUdmmee2eU4DehPDiyLDjXVrLmHYef0Xzsio3wq8Ptw42mbTNGm8FVw/exec";
const form = document.forms["google-sheet"];
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("You have successfully submitted."))
    .catch((error) => console.error("Error!", error.message));
  inputs.forEach((input) => (input.value = ""));
});

// Clear input Fields
// let btnClear = document.querySelector("button");
// let inputs = document.querySelectorAll("input");
// btnClear.addEventListener("click", () => {
//   inputs.forEach((input) => (input.value = ""));
// });
