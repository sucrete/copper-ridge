(function () {
  emailjs.init("bgPMvjgJ9C-HJ3z9j");
})();

const btn = document.getElementsByClassName("button-text")[0];
const inputs = document.getElementsByClassName("inputs-wrapper")[0];
const msgBox = document.getElementsByClassName("message-sent-box")[0];

const firstName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const groupNumber = document.getElementById("group-number-count");
const message = document.getElementById("message");

document
  .getElementById("wedding-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.textContent = "Submitting...";

    const serviceID = "default_service";
    const templateID = "template_njtuooq";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.textContent = "Submit Event Details";
        firstName.value = "";
        email.value = "";
        phone.value = "";
        groupNumber.value = "";
        message.value = "";
        inputs.classList.toggle("subdued");
        msgBox.classList.toggle("show");
      },
      (err) => {
        btn.textContent = "Submit Event Details";
        alert(JSON.stringify(err));
      }
    );
  });
