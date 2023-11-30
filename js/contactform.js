const contactBtn = document.querySelector(".contactBtn");
const closeBtn = document.querySelector(".closeform");
const contactForm = document.querySelector(".contactformulier");
let contactToggle = false;

contactBtn.addEventListener("click", function (e) {
  contactToggle = !contactToggle;

  if (contactToggle) {
    contactForm.classList.add("activeform");
  } else {
    contactForm.classList.remove("activeform");
  }
});

closeBtn.addEventListener("click", function (e) {
  contactToggle = !contactToggle;

  if (contactToggle) {
    contactForm.classList.add("activeform");
  } else {
    contactForm.classList.remove("activeform");
  }
});
