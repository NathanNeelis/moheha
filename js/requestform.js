let check = document.querySelector("#voorwaarden");

// send request form
document
  .getElementById("request-form")
  .addEventListener("submit", function (event) {
    if (check.checked !== true) {
      console.log("did not accept terms");
    } else {
      event.preventDefault();
      spinner();
      emailjs
        .sendForm("service_fslm61g", "template_n9yrdly", this)
        .then(function (res) {
          if (res.status === 200) {
            console.log("request has been send");
            requestConfirmation();
          } else {
            console.log("Failed to send the request");
            console.log(res.status);
            console.log(res.statusText);
            requestErrorHandling();
          }
        });
    }
  });

function spinner() {
  const sendBtn = document.getElementById("send");
  sendBtn.style.display = "none";

  const spinner = document.querySelector(".spinner-container");
  spinner.classList.add("activate-spinner");
}

function requestConfirmation() {
  let requestForm = document.querySelector(".aanvraagformulier");
  requestForm.innerHTML = "";

  // create heading
  const topHeading = document.createElement("h2");
  topHeading.innerHTML = "Aanvraag formulier";

  // create heading
  const succesHeading = document.createElement("h3");
  succesHeading.innerHTML = "Bedankt voor je aanvraag.";

  // Create P element
  const succesText = document.createElement("p");
  succesText.innerHTML =
    "Moheha neemt binnen enkele dagen contact met u op ter bevestiging van uw aanvraag.";

  const succesTextTwo = document.createElement("p");
  succesTextTwo.innerHTML =
    "Vergeet niet uw spambox te controleren. Voornamelijk @Hotmail en @Live accounts zijn hier vatbaar voor.";
  succesTextTwo.classList.add("spam");

  requestForm.appendChild(topHeading);
  requestForm.appendChild(succesHeading);
  requestForm.appendChild(succesText);
  requestForm.appendChild(succesTextTwo);

  requestForm.scrollIntoView({ block: "center" });
}

function requestErrorHandling() {
  let requestForm = document.querySelector(".aanvraagformulier");
  requestForm.innerHTML = "";

  // create heading
  const errorHeading = document.createElement("h4");
  succesHeading.innerHTML = "Helaas is uw aanvraag niet verstuurd.";

  // Create P element
  const errorText = document.createElement("p");
  succesText.innerHTML =
    "Er heeft zich een fout voorgedaan tijdens het versturen van uw aanvraag. Binnen enkele seconden wordt de pagina automatisch vernieuwd. Gelieve het opnieuw te proberen. Mocht het probleem zich blijven voordoen, neem dan contact met ons op via contact@moheha.nl.";

  requestForm.appendChild(errorHeading);
  requestForm.appendChild(errorText);

  setTimeout(location.reload(), 5000);
}
