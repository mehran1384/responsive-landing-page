// Open And Close Menu

const navMobile = document.querySelector('.navbar-mobile');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.btn');

let menu = false;

btn.addEventListener('click', () => {
    if (menu) {
        navMobile.style.left = '-240px';
        btn.classList.remove('btn--open');
        overlay.classList.remove('overlay--open');
        
        menu = false;
    } else {
        navMobile.style.left = '0';
        btn.classList.add('btn--open');
        overlay.classList.add('overlay--open');
        
        menu = true;
    }
});

// Click Outside Close Menu

const navbar = document.querySelector('.navbar');

document.addEventListener('click', (e) => {
    if (!navMobile.contains(e.target) & !navbar.contains(e.target) & !btn.contains(e.target)) {
        navMobile.style.left = '-240px';
        btn.classList.remove('btn--open');
        overlay.classList.remove('overlay--open');
        menu = false;
    };
});

// Hero Circlse Hover 

const hero = document.querySelector('.hero');
const circles = document.querySelectorAll('.circles span');
const circleActive = document.querySelector('.circles span');

document.addEventListener('mouseover', (e) => {
    if (!hero.contains(e.target)) {
        circles.forEach((e) => {
            e.style.opacity = '0';
        });
        circleActive.style.opacity = '0';
    } else {
        circles.forEach((e) => {
            e.style.opacity = '0.3';
        });
        circleActive.style.opacity = '1';
    }
});