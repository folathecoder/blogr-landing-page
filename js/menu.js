'use strict';

//TODO: Target all the required elements

const body = document.body;
const headerContainer = document.querySelector('.header__container');
const connectSubMenu = document.querySelector('#connect');
const connectMenu = document.querySelector('.connect');


// const hiddenToggle = function() {
//     connectSubMenu.classList.toggle('hidden');
// }

// //* Add (click) event listener to "connectMenu" and insert hidden class
// connectMenu.addEventListener('click', () => {
//     hiddenToggle();
// })

// //* Add (mouseover) event listener to "connectMenu" and insert hidden class
// connectMenu.addEventListener('mouseover', () => {
//     hiddenToggle();
// })

// // //* Add (mouseout) event listener to "connectSubMenu" and insert hidden class
// connectSubMenu.addEventListener('mouseout', () => {
//     hiddenToggle();
// })

// //* Add (hover) event listener to "body" and insert hidden class
// body.addEventListener('click', () => {
//     connectSubMenu.classList.add('hidden');
// })


//TODO: Fade sibling menu links and logo when hovered

//* Fade Function
const menuFade = function (e, opacity) {
    //* Target all elements to be faded on hover
    if (e.target.classList.contains('menu__link')) {
        const link = e.target;
        const siblings = link.closest('.header__container').querySelectorAll('.menu__link');
        const logo = link.closest('.header__container').querySelector('img');

        //* Add opacity 
        logo.style.opacity = opacity;
        siblings.forEach(sibling => {
            if (sibling !== link) {
                sibling.style.opacity = opacity;
            }; 
        });
    }
}

headerContainer.addEventListener('mouseover', function (e) {
    menuFade(e, 0.5);
})
headerContainer.addEventListener('mouseout', function (e) {
    menuFade(e, 1);
})