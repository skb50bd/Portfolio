var observer = new IntersectionObserver(entries => {
    let maxSection = null;
    let maxRatio = 0;

    entries.forEach(entry => {
      if (entry.intersectionRatio > maxRatio) {
        maxSection = entry.target.getAttribute('id');
        maxRatio = entry.intersectionRatio;
      }
    });

    const navLinks = document.querySelectorAll('a.nav-link');
    navLinks.forEach(navLink => {
      const id = navLink.getAttribute('href').substr(1);
      if (id === maxSection) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });

    console.log('Max section:', maxSection);
  }, {
    threshold: 0.5
  }
);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });
});

window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let nav = document.querySelector('div.nav');
    let currentSectionColor = '';

    sections.forEach((section, index) => {
      var sectionTop = section.offsetTop - 72;
      if (window.scrollY >= sectionTop) {
        currentSectionColor = section.style.background;
      }
    });

    nav.style.backgroundColor = currentSectionColor;
  });
