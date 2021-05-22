'use strict';

//TODO: Target all the required elements

const connectSubMenu = document.querySelector('#connect');
const connectMenu = document.querySelector('.connect');
const body = document.body;

const hiddenToggle = function() {
    connectSubMenu.classList.toggle('hidden');
}

//* Add (click) event listener to "connectMenu" and insert hidden class
connectMenu.addEventListener('click', () => {
    hiddenToggle();
})

//* Add (mouseover) event listener to "connectMenu" and insert hidden class
connectMenu.addEventListener('mouseover', () => {
    hiddenToggle();
})

// //* Add (mouseout) event listener to "connectSubMenu" and insert hidden class
connectSubMenu.addEventListener('mouseout', () => {
    hiddenToggle();
})

//* Add (hover) event listener to "body" and insert hidden class
body.addEventListener('click', () => {
    connectSubMenu.classList.add('hidden');
})