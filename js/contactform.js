const contactBtn = document.querySelector(".contactBtn");
const closeBtn = document.querySelector(".closeform");
const contactForm = document.querySelector(".contactformulier");
const contactLink = document.querySelector(".contactLink");
let contactToggle = false;

contactBtn.addEventListener("click", function (e) {
  contactToggle = !contactToggle;

  if (contactToggle) {
    contactForm.classList.add("activeform");
  } else {
    contactForm.classList.remove("activeform");
  }
});

contactLink.addEventListener("click", function (e) {
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

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs
        .sendForm("service_fslm61g", "template_3nu2xbt", this)
        .then(function (res) {
          if (res.status === 200) {
            console.log("email has been send");
            emailConfirmation();
          } else {
            console.log("Failed to send the email");
            console.log(res.status);
            console.log(res.statusText);
            errorHandling();
          }
        });
    });
};

function emailConfirmation() {
  let form = document.querySelector(".cf-container");
  form.innerHTML = "";

  // create heading
  const succesHeading = document.createElement("h4");
  succesHeading.innerHTML = "Bedankt voor je bericht.";

  // Create P element
  const succesText = document.createElement("p");
  succesText.innerHTML =
    "Ik streef ernaar binnen enkele werkdagen te reageren.";

  // Create IMG element
  const succesImage = document.createElement("img");
  succesImage.src = "images/mailbox.svg";

  form.appendChild(succesHeading);
  form.appendChild(succesText);
  form.appendChild(succesImage);
}

function errorHandling() {
  let form = document.querySelector(".cf-container");
  form.innerHTML = "";

  // create heading
  const errorHeading = document.createElement("h4");
  succesHeading.innerHTML = "Helaas is uw bericht niet verstuurd.";

  // Create P element
  const errorText = document.createElement("p");
  succesText.innerHTML =
    "Er heeft zich een fout voorgedaan tijdens het versturen van uw bericht. Binnen enkele seconden wordt de pagina automatisch vernieuwd. Gelieve het opnieuw te proberen. Mocht het probleem zich blijven voordoen, neem dan contact met ons op via de verstrekte contactinformatie.";

  form.appendChild(errorHeading);
  form.appendChild(errorText);

  setTimeout(location.reload(), 5000);
}
