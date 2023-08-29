 let reveal = Array.from(document.querySelectorAll('.reveal'));

 const inVisible = function (el) {
     const { top, bottom } = el.getBoundingClientRect()
     if (bottom < 0 || top > window.innerHeight) {
         return false;
     }
     return true;
 }

 document.addEventListener('scroll', () => {
     reveal.forEach(element => {
         if (inVisible(element)) {
             element.classList.add('reveal_active');
         } else {
             element.classList.remove('reveal_active');
         }
     });
 });