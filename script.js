// Acest script adaugă o animație de intrare atunci când scrollezi până la o anumită secțiune.
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    // Setăm starea inițială pentru animație (invizibil și puțin mai jos)
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease-out';
    
    observer.observe(section);
  });
});