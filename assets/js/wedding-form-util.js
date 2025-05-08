// // Initializing the EmailJs libary
// emailjs.init('bgPMvjgJ9C-HJ3z9j')
// //  Getting elements
// const form = document.getElementById('wedding-form');

// const userName = document.getElementById('submitters-name').value;
// const userEmail = document.getElementById('submitters-email').value;
// const userPhone = document.getElementById('submitters-phone').value;
// const groupNumber = document.getElementById('group-number-count').value;
// const userMessage = document.getElementById('submitters-message').value;

// const messageContainer = document.querySelector('.message-container');
// const message = document.getElementById('message');

// let isValid = false

// const templateParams = {
//   submitters_name: userName,
//   submitters_email: userEmail,
//   submitters_phone: userPhone,
//   group_number_count: groupNumber,
//   submitters_message: userMessage,
// }

// function validateForm() {
//   // Using Contraint API
//   isValid = form.checkValidity();
//   // Style main message for an error
//   if(isValid === false) {
//       message.textContent ="Please fil out all the fields";
//       message.style.color = 'red';
//       messageContainer.style.borderColor = 'red';
//   } else if(isValid === true) {
//       message.textContent ="Your message is being sent";
//       message.style.color = 'Orange';
//       messageContainer.style.borderColor = 'Orange';
//   }
// }

// function processFormData(e) {
//   e.preventDefault()
  
//   // Validating form 
//   validateForm();

//   // Sending the formdata
//   if(isValid === true) {
//   emailjs.sendForm('default_service', 'template_njtuooq', templateParams)
//   .then(function(response){
//       message.textContent ="Thank you very much we will reply to you as soon as possible";
//       message.style.color = 'green';
//       messageContainer.style.borderColor = 'green';
//       console.log('SUCCESS', response.status, response.text);
//   }, function(error){
//       console.log("FAILED", error);
//   })
//   }
// }

// //  Add eventlisteners
// form.addEventListener('submit', processFormData);
(function () {
  emailjs.init('bgPMvjgJ9C-HJ3z9j');
})();

const btn = document.getElementById('button');

document.getElementById('wedding-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_njtuooq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Message Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});