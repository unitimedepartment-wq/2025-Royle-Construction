// Typewriter effect for header
const text = "20+ Years of Excellence in Construction";
let i = 0;
const speed = 50;
const p = document.querySelector("header p");
function typeWriter() {
  if (i < text.length) {
    p.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
if (p) typeWriter();

// Animate on scroll (Intersection Observer)
const animatedElements = document.querySelectorAll(".animate, .strength, .award");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });
animatedElements.forEach(el => observer.observe(el));

// Project filter buttons
window.filterProjects = function(category) {
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(p => {
    if (category === 'all' || p.classList.contains(category)) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
  document.querySelectorAll('.filters button').forEach(btn => btn.classList.remove('active'));
  const btn = document.getElementById(category);
  if (btn) btn.classList.add('active');
};

// 3D tilt effect only for service cards
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;
    card.style.transform = `scale(1.07) perspective(600px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    card.style.boxShadow = `0 24px 48px rgba(13,110,253,0.25), 0 2px 16px #ffc107`;
    card.style.background = 'linear-gradient(135deg, #0d6efd 60%, #ffc107 100%)';
    card.style.color = '#fff';
    card.style.zIndex = 2;
  });
  card.addEventListener('mouseleave', function() {
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.background = '';
    card.style.color = '';
    card.style.zIndex = '';
  });
});