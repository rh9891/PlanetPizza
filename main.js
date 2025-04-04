const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

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

navLink.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

const scrollHeader = () => {
    const header = document.getElementById('header');

    if (this.scrollY >= 50) {
        header.classList.add('bg-header');
    } else {
        header.classList.remove('bg-header');
    }
}

window.addEventListener('scroll', scrollHeader);

const activeLink = () => {
    const section = document.querySelectorAll('section');
    const navLink = document.querySelectorAll('.nav__link');

    let current = 'home';

    section.forEach(section => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id')
        }
    });

    navLink.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', activeLink);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp)

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
