document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const navbarCollapse = document.getElementById('mainNav');

  function setActiveNav() {
    let current = '';
    const scrollPos = window.scrollY + 150; 

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  setActiveNav();
  window.addEventListener('scroll', setActiveNav);

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        let bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  document.addEventListener('click', function (e) {
    const thumb = e.target.closest('.project-thumb, .view-project');
    if (!thumb) return;
    e.preventDefault();
    const el = thumb;
    const title = el.dataset.title || '';
    const desc = el.dataset.desc || '';
    const image = el.dataset.image || '';
    const link = el.dataset.link || '';

    const modalLabel = document.getElementById('projectModalLabel');
    const modalImg = document.getElementById('projectModalImage');
    const modalDesc = document.getElementById('projectModalDesc');
    const modalLink = document.getElementById('projectModalLink');

    if (modalLabel) modalLabel.textContent = title;
    if (modalImg) {
      modalImg.src = image;
      modalImg.alt = title;
    }
    if (modalDesc) modalDesc.textContent = desc;
    if (modalLink) {
      if (link) {
        modalLink.href = link;
        modalLink.classList.remove('d-none');
      } else {
        modalLink.classList.add('d-none');
      }
    }

    const modalEl = document.getElementById('projectModal');
    if (modalEl) {
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    }
  });
});