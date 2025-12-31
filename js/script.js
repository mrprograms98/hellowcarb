document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.querySelector('.menu-close');

  if (!hamburger || !menuOverlay) return;

  // OPEN / SLUIT via hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // SLUIT via close knop
  menuClose?.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

});

document.addEventListener('DOMContentLoaded', () => {

  /* =====================
     WhatsApp knop
  ====================== */
  const whatsappBtn = document.getElementById('whatsappBtn');
  whatsappBtn?.addEventListener('click', () => {
    window.open('https://wa.me/31643037004', '_blank', 'noopener');
  });

  /* =====================
     Plan knop scroll
  ====================== */
  const planBtn = document.getElementById('planBtn');
  planBtn?.addEventListener('click', () => {
    document.getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* =====================
     Preloader
  ====================== */
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 2300); // match CSS animatie
    }, 3000);
  }

  /* =====================
     Taal wisselaar
  ====================== */
  const translations = {
    NL: {
      nav_about: "✦diensten",
      nav_method: "✦tarieven",
      nav_contact: "✦Contact",
      footer_home: "Home"
    },
    EN: {
      nav_about: "✦services",
      nav_method: "✦pricing",
      nav_contact: "✦Contact",
      footer_home: "Home"
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      if (translations[lang]?.[key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      setLanguage(btn.dataset.lang);
    });
  });
});
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
