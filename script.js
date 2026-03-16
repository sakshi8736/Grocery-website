// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Trigger animation
  darkToggle.classList.add("active");
  setTimeout(() => darkToggle.classList.remove("active"), 800);

  // Icon change
  if (document.body.classList.contains("dark-mode")) {
    darkToggle.classList.replace("fa-moon", "fa-sun");
  } else {
    darkToggle.classList.replace("fa-sun", "fa-moon");
  }
});


// Sticky Navbar Shadow Effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".custom-navbar");
  if (window.scrollY > 40) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});


//contactform
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

// Show popup when form submits
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    popup.classList.add("active");

    setTimeout(() => {
      popup.classList.remove("active");
    }, 2000);
  });

// Close button
closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});


//logout



// subscribe popup
