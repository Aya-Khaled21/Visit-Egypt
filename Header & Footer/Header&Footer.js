let icon = document.querySelector(".icon .fa-magnifying-glass");
let box = document.getElementById("searchBox");
let input = box.querySelector("input");

icon.onclick = function () {
  if (box.style.display === "flex") {
    box.style.display = "none";
  } else {
    box.style.display = "flex";
  }
};

input.onkeydown = function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    searchPage();
  }
};



let userIcon = document.querySelector(".icon_profile");
let modal = document.getElementById("loginModal");
let close = document.getElementById("closeModal");

userIcon.onclick = function () {
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
};

close.onclick = function () {
  modal.style.display = "none";
};

function searchPage() {
  var query = document.getElementById("searchInput").value.trim().toLowerCase();
  console.log(query);
  
  var pages = {
    home: "HomePage.html",
    places: "../Places To Visit/PlacesToVisit.html",
    contact: "../Contact/Contact.html",
  };

  if (query in pages) {
    window.location.href = pages[query];
  } else {
    alert("لم يتم العثور على الصفحة المطلوبة");
  }
}