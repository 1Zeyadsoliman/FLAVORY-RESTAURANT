window.addEventListener("scroll", function () { 
   const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert("Please fill in all fields.");
    }
  });
}

const navLinks = document.querySelectorAll(".nav-link");
const navCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (navCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navCollapse).toggle();
    }
  });
});

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 1000);
});

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// FAVORITE BUTTONS - ONLY ONCE (remove the duplicate below)
document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-heart-o')) {
            icon.classList.replace('fa-heart-o', 'fa-heart');
            this.classList.replace('btn-outline-warning', 'btn-warning');
        } else {
            icon.classList.replace('fa-heart', 'fa-heart-o');
            this.classList.replace('btn-warning', 'btn-outline-warning');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('animated-section');
    observer.observe(section);
});

const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('reservationName').value;
        const email = document.getElementById('reservationEmail').value;
        const date = document.getElementById('reservationDate').value;
        const time = document.getElementById('reservationTime').value;
        
        if (name && email && date && time) {
            alert('Thank you for your reservation! We will confirm shortly.');
            reservationForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}