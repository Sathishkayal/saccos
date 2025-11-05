const container = document.getElementById('tilt-container');

container.addEventListener('mousemove', (e) => {
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  // Calculate rotation values [-15deg to 15deg]
  const rotateX = ((mouseY / height) - 0.5) * 30; // invert Y for intuitive tilt
  const rotateY = ((mouseX / width) - 0.5) * 30;

  container.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

container.addEventListener('mouseleave', () => {
  container.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  container.style.transition = 'transform 0.5s ease';
  setTimeout(() => {
    container.style.transition = '';
  }, 500);
});
    function sendemail(event){
  event.preventDefault();  // Prevent form from submitting and reloading

  var email = document.getElementById("email").value;
  var from_name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  var templateParams = {
    email: email,
    to_name: from_name,
    message: message
  };

  emailjs.send('service_pom9trl', 'template_q3kf1un', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      window.alert("Sent successfully!");
    }, function(error) {
      console.log('FAILED...', error);
      window.alert("Failed to send, please try again.");
    });
    document.querySelector('.form').addEventListener('submit', sendemail);

}
   document.querySelector('.form').addEventListener('submit', sendemail);
            
