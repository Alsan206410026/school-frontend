document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.querySelector('.main-menu');
  const aboutUsLink = mainMenu ? mainMenu.querySelector('a[href="#"]') : null;
  const aboutDrop = aboutUsLink ? aboutUsLink.parentElement.querySelector('.about-drop') : null;
  const allLinks = mainMenu ? mainMenu.querySelectorAll('a') : [];
  const submenuLinks = aboutDrop ? aboutDrop.querySelectorAll('a') : [];

  function closeMenu() {
    if (mainMenu) mainMenu.classList.remove('active');
    if (menuToggle) menuToggle.classList.remove('active');
  }
  function openMenu() {
    if (mainMenu) mainMenu.classList.add('active');
    if (menuToggle) menuToggle.classList.add('active');
  }
  function closeSubmenu() {
    if (aboutDrop) aboutDrop.classList.remove('active');
  }
  function openSubmenu() {
    if (aboutDrop) aboutDrop.classList.add('active');
  }
  function isMenuOpen() {
    return mainMenu && mainMenu.classList.contains('active');
  }
  function isSubmenuOpen() {
    return aboutDrop && aboutDrop.classList.contains('active');
  }
  function isMobile() {
    return window.innerWidth <= 920;
  }

  // Toggle main menu
  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      if (isMenuOpen()) {
        closeMenu();
        closeSubmenu();
      } else {
        openMenu();
      }
    });
  }

  // Toggle About Us submenu (only on mobile)
  if (aboutUsLink && aboutDrop) {
    aboutUsLink.addEventListener('click', function(e) {
      if (isMobile() && isMenuOpen()) {
        e.preventDefault();
        e.stopPropagation();
        if (isSubmenuOpen()) {
          closeSubmenu();
        } else {
          openSubmenu();
        }
      }
    });
  }

  // Clicking submenu links closes both submenu and menu
  submenuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      closeSubmenu();
      closeMenu();
    });
  });

  // Clicking any other main menu link closes both submenu and menu
  allLinks.forEach(function(link) {
    if (!aboutUsLink || link !== aboutUsLink) {
      link.addEventListener('click', function() {
        closeSubmenu();
        closeMenu();
      });
    }
  });

  // Click outside: if submenu open, close it; else if menu open, close menu
  document.addEventListener('click', function(e) {
    if (mainMenu && !mainMenu.contains(e.target) && e.target !== menuToggle) {
      if (isSubmenuOpen()) {
        closeSubmenu();
      } else if (isMenuOpen()) {
        closeMenu();
      }
    }
  });

  // Prevent menu click from bubbling up
  if (mainMenu) {
    mainMenu.addEventListener('click', function(e) { e.stopPropagation(); });
  }
});
