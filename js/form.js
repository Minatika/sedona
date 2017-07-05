var link = document.querySelector(".btn--review-settings");
var modalError = document.querySelector(".modal-error");
var modalSuccess = document.querySelector(".modal-success");
var form = document.querySelector(".review-settings__form");
var firstName = form.querySelector("[name=first-name]");
var surname = form.querySelector("[name=surname]");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=email]");
var closeErr = document.querySelector(".btn--modal-error");
var closeSucc = document.querySelector(".btn--modal-success");

form.addEventListener("submit", function(e) {
  if(!firstName.value || !surname.value || !tel.value || !email.value) {
    e.preventDefault();
    modalError.classList.add("modal-error--show");
  } else {
    modalSuccess.classList.add("modal-success--show");
  }
});

closeErr.addEventListener("click", function(e) {
  e.preventDefault();
  modalError.classList.remove("modal-error--show");
});

closeSucc.addEventListener("click", function(e) {
  e.preventDefault();
  modalSuccess.classList.remove("modal-success--show");
});

window.addEventListener("keydown", function (e) {
  if(e.keyCode == 27) {
    if(modalError.classList.contains("modal-error--show")) {
      modalError.classList.remove("modal-error--show");
    }
    if(modalSuccess.classList.contains("modal-success--show")) {
      modalSuccess.classList.remove("modal-success--show");
    }
  }
});
