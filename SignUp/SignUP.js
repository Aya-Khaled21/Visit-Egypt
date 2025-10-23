let loginLink = document.querySelector(".login-link");
let loginModal2 = document.getElementById("loginModal");
let closeBtn2 = document.getElementById("closeModal");

loginLink.onclick = function () {
  if (loginModal2.style.display === "flex") {
    loginModal2.style.display = "none";
  } else {
    loginModal2.style.display = "flex";
  }
};

closeBtn2.onclick = function () {
  loginModal2.style.display = "none";
};
