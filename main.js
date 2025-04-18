const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('show-menu'));
});

const scrollHeader = () => {
    const header = document.getElementById('header');

    if (window.scrollY >= 50) {
        header.classList.add('bg-header');
    } else {
        header.classList.remove('bg-header');
    }
}

window.addEventListener('scroll', scrollHeader);

const activeLink = () => {
    const sections = document.querySelectorAll('section');
    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active-link', link.getAttribute('href').includes(current));
    });
}

window.addEventListener('scroll', activeLink);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp)

document.getElementById('scroll-up').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const themeButton = document.getElementById('theme-button');

if (localStorage.getItem('theme') === 'dark-theme') {
    darkMode();
} else {
    lightMode();
}

themeButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        lightMode();
    } else {
        darkMode();
    }
});

function darkMode() {
    document.body.classList.add('dark-theme');
    themeButton.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark-theme')
}

function lightMode() {
    document.body.classList.remove('dark-theme');
    themeButton.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light-theme')
}

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

scrollReveal.reveal('.home__img');
scrollReveal.reveal('.home__data', {origin: 'bottom'});

scrollReveal.reveal('.about__data', {origin: 'left'});
scrollReveal.reveal('.about__img', {origin: 'right'});

scrollReveal.reveal('.popular__card', {interval: '100'});

scrollReveal.reveal('.recently-added__data', {origin: 'left'});
scrollReveal.reveal('.recently-added__img', {origin: 'right'});

scrollReveal.reveal('.newsletter');

scrollReveal.reveal('.footer');
