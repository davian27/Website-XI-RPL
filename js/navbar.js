window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const isAtTop = scrolled === 0;
    
    if (isAtTop) {
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.add('scrolled');
    }
  
    // Add sticky functionality here
    const isSticky = scrolled > 100; // Adjust the value (100) to set the scroll position where the navbar becomes sticky
  
    if (isSticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  
  
    
    
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      const sections = document.querySelectorAll('section');
      const windowHeight = window.innerHeight;
      const quarterWindowHeight = windowHeight * 0.60;
      const currentPos = window.scrollY + quarterWindowHeight;
    
      sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = navbar.querySelector(`a[href="#${sectionId}"]`);
    
        if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      });
    });
    
    window.addEventListener('DOMContentLoaded', () => {
      const navbar = document.getElementById('navbar');
      const navLinks = navbar.querySelectorAll('a[href^="#"]');
      const sections = document.querySelectorAll('section');
    
      // Tambahkan kelas 'active' pada tautan navigasi '#home'
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '#home') {
          link.classList.add('active');
        }
      });
    
      // Event listener untuk smooth scroll saat tautan di klik
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          const targetTop = targetSection.offsetTop - navbar.offsetHeight + 1;
    
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
    
          // Tutup menu hamburger setelah mengklik tautan
          const hamburgerCheckbox = document.getElementById('hamburger-checkbox');
          hamburgerCheckbox.checked = false;
        });
      });
    
      // Tutup menu hamburger saat mengklik di luar navigasi
      document.addEventListener('click', (event) => {
        const target = event.target;
    
        if (!navbar.contains(target)) {
          const hamburgerCheckbox = document.getElementById('hamburger-checkbox');
          hamburgerCheckbox.checked = false;
        }
      });
    });
    