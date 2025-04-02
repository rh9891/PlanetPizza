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

window.addEventListener('scroll', scrollHeader)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', (e) => {
    document.body.classList.toggle('dark-theme');
    themeButton.classList.replace('fa--moon', 'fa-sun');
    localStorage.setItem('theme', 'dark-theme')
})

window.addEventListener('scroll', scrollUp)