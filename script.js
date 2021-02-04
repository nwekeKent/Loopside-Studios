const open = document.querySelector('.hambuger-menu');
const close = document.querySelector('.nav-close');
const mobileMenu = document.querySelector('.mobile-menu');
const main = document.querySelector('.main');



const openMenu = () => {
    mobileMenu.style.display = 'block';
   
}


const closeMenu = () => {
    mobileMenu.style.display = 'none';
    
}

open.addEventListener('click',openMenu);
close.addEventListener('click',closeMenu);

