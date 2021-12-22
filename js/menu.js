(() => {
   const mobileMenu = document.querySelector('.js-menu-container');
   const btn = document.querySelector('.humburger');
   const body = document.querySelector('body');
 
   const toggleMenu = () => {
     const isMenuOpen =
     btn.getAttribute('aria-expanded') === 'true' || false;
     btn.setAttribute('aria-expanded', !isMenuOpen);
         mobileMenu.classList.toggle('is-open');
         btn.classList.toggle('is-active');
         body.classList.toggle('is-hidden');
 
     
   };
 
   btn.addEventListener('click', toggleMenu);
 
   // Закрываем мобильное меню на более широких экранах
   // в случае изменения ориентации устройства.
   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
     if (!e.matches) return;
     mobileMenu.classList.remove('is-open');
     btn.classList.remove('is-active');
     btn.setAttribute('aria-expanded', false);
     bodyScrollLock.enableBodyScroll(document.body);
   });
 })();