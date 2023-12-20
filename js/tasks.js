const huishoudelijk = document.querySelector(".huishoudelijk");
const tuinwerk = document.querySelector(".tuinwerk");
const koken = document.querySelector(".koken");
const persoonlijkContact = document.querySelector(".persoonlijkcontact");

const huishoudelijkBtn = document.querySelector(".ti-huishoudelijk");
const tuinwerkBtn = document.querySelector(".ti-tuinwerk");
const kokenBtn = document.querySelector(".ti-koken");
const persoonlijkContactBtn = document.querySelector(".ti-persoonlijkcontact");

const taskTitle = document.querySelector(".taskTitle");
const taskContent = document.querySelector(".taskContent");

function turnBtnOff() {
  huishoudelijkBtn.classList.remove("active");
  tuinwerkBtn.classList.remove("active");
  kokenBtn.classList.remove("active");
  persoonlijkContactBtn.classList.remove("active");

  taskTitle.innerHTML = "";
  taskContent.innerHTML = "";
}

// Huishoudelijke taken
huishoudelijk.addEventListener("click", function (event) {
  //change background
  turnBtnOff();
  huishoudelijkBtn.classList.add("active");

  // create content
  taskTitle.innerHTML = "Huishoudelijke taken ";
  taskContent.innerHTML =
    "zijn taken gericht op het beheren en onderhouden van een huishouden. Bijvoorbeeld het schoonmaken van het huis, wassen en strijken van kleding, stofzuigen, afstoffen, afwassen, boodschappen doen en algemene opruimtaken.";
});

// Tuinwerk taken
tuinwerk.addEventListener("click", function (event) {
  // change background
  turnBtnOff();
  tuinwerkBtn.classList.add("active");

  // create content
  taskTitle.innerHTML = "Tuinwerk ";
  taskContent.innerHTML =
    "is gericht op licht tuinwerk zoals het maaien van gras, de oprit vrij maken van bladeren en/of sneeuw. Mocht u een specifieke wens hebben kunt u dit altijd overleggen.";
});

// Kook taken
koken.addEventListener("click", function (event) {
  // change background
  turnBtnOff();
  kokenBtn.classList.add("active");

  // create content
  taskTitle.innerHTML = "Kooktaken ";
  taskContent.innerHTML =
    "omvat de bereiding van ontbijt, lunch of avondeten. Na overleg is het mogelijk om een maaltijd ter plaatse bij u te verzorgen. Uiteraard behoort het bereiden van smakelijke tussendoortjes gedurende de dag ook tot de mogelijkheden.";
});

// Persoonlijk contact taken
persoonlijkContact.addEventListener("click", function (event) {
  // change background
  turnBtnOff();
  persoonlijkContactBtn.classList.add("active");

  // create content
  taskTitle.innerHTML = "Persoonlijk contact ";
  taskContent.innerHTML =
    "omvat het hebben van een goed gesprek gedurende dag waarbij een luisterend oor wordt aangeboden.";
});
