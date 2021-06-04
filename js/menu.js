'use strict';

//TODO: Target all the required elements

const body = document.body;
const headerContainer = document.querySelector('.header__container');
const hamburgerOpen = document.querySelector('.mobile__menu-icon img');
const hamburgerClose = document.querySelector('.mobile__menu-icon--close');
const desktopMenu = document.querySelector('.desktop__menu');
const navMenu = document.querySelectorAll('.nav__menu');
const subMenu = document.querySelectorAll('.sub-menu');

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//      document.body.style.backgroundColor = "pink";
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 700px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes


// let mqTablet = window.matchMedia("(max-width: 992px)");

// if (mqTablet.matches) {
//     body.style.backgroundColor = '#3221ce';
//     console.log(`Folarin`)
// }
// else {
//     body.style.backgroundColor = '#ffffff';
// }

//TODO: Mobile dropdown menu

//* Main Menu Dropdown 

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


//* Sub-Menu Dropdown

subMenu.forEach( menu => {
    menu.classList.add('hidden');
})

desktopMenu.addEventListener('click', e => {

    if (e.target.closest('.nav__menu')) {
        const clicked = e.target.closest('.nav__menu');

        const subDrop = document.querySelector(`.sub-menu--${clicked.dataset.dropdown}`);

        subDrop.classList.toggle('hidden');

        // console.log(subDrop);
    }
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