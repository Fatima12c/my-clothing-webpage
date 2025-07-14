// Responsive menu toggle
const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function () {
  navBar.classList.toggle('active');
});

// Close the menu when a nav link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
  });
});

// Intersection Observer for fade-in effect
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

// Contact form validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  const name = this.querySelector('[name="Name"]').value.trim();
  const phone = this.querySelector('[name="Phone Number"]').value.trim();
  const email = this.querySelector('[name="Email"]').value.trim();
  const message = this.querySelector('[name="Message"]').value.trim();

  if (!/^[0-9]+$/.test(phone)) {
    alert("Phone number must be digits only.");
    e.preventDefault();
    return;
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters.");
    e.preventDefault();
    return;
  }
});



// Contact form validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  const name = this.querySelector('[name="Name"]').value.trim();
  const phone = this.querySelector('[name="Phone Number"]').value.trim();
  const email = this.querySelector('[name="Email"]').value.trim();
  const message = this.querySelector('[name="Message"]').value.trim();

  if (!/^[0-9]+$/.test(phone)) {
    alert("Phone number must be digits only.");
    e.preventDefault();
    return;
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters.");
    e.preventDefault();
    return;
  }
});
