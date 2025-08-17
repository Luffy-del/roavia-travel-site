document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  // Hamburger toggle
  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // Fade-in effect
  const aboutContent = document.querySelector(".about-content");
  if (aboutContent) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            aboutContent.classList.add("fade-in");
            observer.unobserve(aboutContent);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(aboutContent);
  }
  // Fade-in effect for about-content and all .fade-in elements
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // optional: remove after first time
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));


  // Animated Counters
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 200;

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // Theme toggle (optional)
  const toggleBtn = document.querySelector(".theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }
});

    window.addEventListener('scroll', () => {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (window.scrollY > 100) {
      whatsappBtn.classList.add('whatsapp-visible');
    } else {
      whatsappBtn.classList.remove('whatsapp-visible');
    }
  });