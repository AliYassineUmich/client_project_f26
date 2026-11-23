// I used this youtube video as a reference to make the hamburger menu functionality (with many tweeks) 
// https://www.youtube.com/watch?v=aNDqzlAKmZc

const menu_button = document.querySelector('.menu_button');
const menu = document.querySelector('header')

menu_button.addEventListener('click', () => {
    menu_button.classList.toggle('active');
    menu.classList.toggle('active');
})

// Script for year taken from 
// https://www.codexworld.com/how-to/get-current-year-to-display-dynamic-year-in-copyright-using-javascript/
document.querySelector(".year").innerHTML = new Date().getFullYear();
