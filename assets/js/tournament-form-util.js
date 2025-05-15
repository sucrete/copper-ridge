(function () {
  emailjs.init("bgPMvjgJ9C-HJ3z9j");
})();

const btn = document.getElementsByClassName("button-text")[0];
const inputs = document.getElementsByClassName("inputs-wrapper")[0];
const msgBox = document.getElementsByClassName("message-sent-box")[0];

const firstName = document.getElementById("name");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const eventDate = document.getElementById("event_date");
const groupSize = document.getElementById("group_size");
const message = document.getElementById("message");

document
  .getElementById("tournament-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.textContent = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_4ws9f0b";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.textContent = "Submit";
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
        eventDate.value = "";
        groupSize.value = "";
        inputs.classList.toggle("subdued");
        msgBox.classList.toggle("show");
      },
      (err) => {
        btn.textContent = "Submit";
        alert(JSON.stringify(err));
      }
    );
  });
