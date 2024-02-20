// contact contatForm part
function creatContactForm() {
  const contatForm = document.createElement("contatForm");
  contatForm.setAttribute("action", "#");
  contatForm.setAttribute("method", "post");

  // Constructing the entire HTML structure as a string
  const htmlString = `
  <input type="text" name="name" placeholder="Enter Your Name">
  <input type="email" name="email" placeholder="Enter Your Email">
  <textarea name="message" placeholder="Your Message"></textarea>
  <button type="submit" class="contact-btn">Send <i class="fas fa-paper-plane"></i></button>
`;

  // Setting the inner HTML of the contatForm element
  contatForm.innerHTML = htmlString;

  // Append the contatForm to the desired location in your HTML
  document.getElementById("message").appendChild(contatForm);
  const button = document.getElementById("message-btn");
  button.classList.remove("contact-btn");
  button.classList.add("disable-btn");
  const contact_img = document.getElementById("contact-img");
  contact_img.classList.add("disable-btn")
}

const checkbox = document.getElementById('check');
const navbar = document.querySelector('#navbar'); // Replace with the actual selector for your navbar

checkbox.addEventListener('change', () => {
  navbar.classList.toggle('active'); // Replace 'active' with the class that controls navbar visibility
});
