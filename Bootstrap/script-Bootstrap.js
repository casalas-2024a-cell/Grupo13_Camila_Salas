// ── ANIMACIÓN DE TARJETAS DE PROYECTOS AL HACER SCROLL ──
const cards = document.querySelectorAll('.project-card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => cardObserver.observe(card));


// ── ANIMACIÓN DE BARRAS DE HABILIDADES AL HACER SCROLL ──
const barFills = document.querySelectorAll('.bar-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('loaded');
    }
  });
}, { threshold: 0.3 });

barFills.forEach(bar => barObserver.observe(bar));


// ── FORMULARIO DE CONTACTO ──
function enviarFormulario() {
  const nombre  = document.getElementById('nombre').value.trim();
  const email   = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor completa los campos requeridos: Nombre, Email y Mensaje.');
    return;
  }
  if (!email.includes('@')) {
    alert('Por favor ingresa un email válido.');
    return;
  }

  // Mostrar mensaje de éxito
  document.getElementById('formSuccess').style.display = 'block';

  // Limpiar campos
  document.getElementById('nombre').value  = '';
  document.getElementById('email').value   = '';
  document.getElementById('asunto').value  = '';
  document.getElementById('mensaje').value = '';

  // Ocultar mensaje después de 4 segundos
  setTimeout(() => {
    document.getElementById('formSuccess').style.display = 'none';
  }, 4000);
}


// ── RESALTADO DE NAV ACTIVO AL HACER SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : '';
  });
});
