(function () {
  emailjs.init('bgPMvjgJ9C-HJ3z9j');
})();

const btn = document.getElementById('button');

document.getElementById('tournament-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_4ws9f0b';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Submit';
      alert('Message Sent!');
    }, (err) => {
      btn.value = 'Submit';
      alert(JSON.stringify(err));
    });
});