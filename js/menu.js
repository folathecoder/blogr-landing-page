'use strict';

//TODO: Target all the required elements

const body = document.body;
const headerContainer = document.querySelector('.header__container');
const hamburgerOpen = document.querySelector('.mobile__menu-icon img');
const hamburgerClose = document.querySelector('.mobile__menu-icon--close');
const desktopMenu = document.querySelector('.desktop__menu');
const navMenu = document.querySelectorAll('.nav__menu');
const subMenu = document.querySelectorAll('.sub-menu');
const menuIcon = document.querySelectorAll('.menu-icon');
const allSections = document.querySelectorAll('section');
const tablet = window.matchMedia("(max-width: 992px)");
const menuIconImage = document.querySelectorAll('.menu-icon img');

//TODO: Change src of icon dropdown on screen lesser than 992px

if (tablet.matches) {
    menuIconImage.forEach(icon => {
        icon.setAttribute('src', 'images/icon-arrow-dark.svg');
    })
}
else {
    menuIconImage.forEach(icon => {
        icon.setAttribute('src', 'images/icon-arrow-light.svg');
    })
}

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


//* Function to toggle menu classes
const menuToggles = function (e) {

    if (e.target.closest('.nav__menu')) {
        menuIcon.forEach( icon => {
            icon.classList.remove('icon__rotate')
        })
        const clicked = e.target.closest('.nav__menu');
        const subDrop = document.querySelector(`.sub-menu--${clicked.dataset.dropdown}`);
        subDrop.classList.toggle('hidden');
        const iconDrop = document.querySelector(`.close-dropdown--${clicked.dataset.dropdown}`);
        iconDrop.classList.toggle('icon__rotate');
    }
} 

desktopMenu.addEventListener('click', e => {
    menuToggles(e);
})
body.addEventListener('mouseout', e => {
    if (!e.target.closest('.nav__menu')) {
        menuIcon.forEach( icon => {
            icon.classList.remove('icon__rotate')
        })
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

//TODO: Fade In Sections 
const fadeCallback = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('disabled');
    observer.unobserve(entry.target);
}
const fadeOptions = {
    root: null,
    threshold: 0.2,
}
const sectionFadeIn = new IntersectionObserver(fadeCallback, fadeOptions);
allSections.forEach( section => {
    sectionFadeIn.observe(section);
    section.classList.add('disabled');
})
