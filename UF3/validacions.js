// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
document
  .getElementById("loginform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let nom = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let message = document.getElementById("message").value;

    if (
      nom == "" ||
      surname == "" ||
      email == "" ||
      age == "" ||
      gender == "Select" ||
      message == ""
    ) {
      alert("tots els camps són requerits");
      return false;
    }
    if (!validateNameAndSurname(nom)) {
      alert("nom no valid");
      return false;
    }
    if (!validateNameAndSurname(surname)) {
      alert("cognom no valid");
      return false;
    }
    if(!validarEmail(email)){
      alert("email no valid");
      return false;
    }
    if(gender == "Select"){
      alert("Has de triar un genere");
      return false;
    }
    if(!validateMessage(message)){
      alert("Missatge no valid");
      return false;
    }
  });
const nameInput = document.querySelector('input[name="name"]');



// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);
  // Validació del nom...

  // Si no és vàlid...
  displayError(nameInput, "El nom no és vàlid");
}

function validateNameAndSurname(name) {
  let nomRegex = /^[a-zA-ZÀ-ÿ\s]{3,49}$/;
  return nomRegex.test(nom);
}

function validarEmail(correu) {
  let correuRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return correuRegex.test(correu);
}

function validateMessage(message){
  let messageRegex = /^[a-zA-ZÀ-ÿ\s]{10,200}$/;
  return messageRegex.test(message)
}

// addEventListeners...
