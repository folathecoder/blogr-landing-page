'use strict';

//TODO: Target all the required elements

const body = document.body;
const headerContainer = document.querySelector('.header__container');
const hamburgerOpen = document.querySelector('.mobile__menu-icon');
const hamburgerClose = document.querySelector('.mobile__menu-icon--close');
const desktopMenu = document.querySelector('.desktop__menu');

const hamburgerOpened = function (e) {
    hamburgerClose.classList.remove('hidden');
    hamburgerOpen.classList.add('hidden');
    desktopMenu.classList.add('desktop__menu--active');
}

const hamburgerClosed = function (e) {
    hamburgerClose.classList.add('hidden');
    hamburgerOpen.classList.remove('hidden');
    desktopMenu.classList.remove('desktop__menu--active');
}

hamburgerClose.classList.add('hidden');

hamburgerOpen.addEventListener('click', e => {
    hamburgerOpened();
})

hamburgerClose.addEventListener('click', e => {
    hamburgerClosed();
})



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