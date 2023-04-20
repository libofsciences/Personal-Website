///////menu icone navbar {function}////////////////
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

function toggleMenu() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

menuIcon.addEventListener('click', toggleMenu);


//////scroll section active link {function}/////////
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

//////sticky navbar////////////////
window.onscroll = () => {
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
    //remove menu icone navbar when click navbar link (scroll)//
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


/////////dark Mode / Light Mode //////////////////
const body = document.body;
const darkModeIcone = document.querySelector('#darkMode-icon');

const toggleDarkMode = () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    body.style.backgroundColor = isDarkMode ? '#0b061f' : '#fdfdfd';
    body.style.color = isDarkMode ? '#fdfdfd' : '#333';
    body.style.boxShadow = isDarkMode ? '0 0 10px rgba(0, 0, 0, 0.7)' : '0 0 10px rgba(0, 0, 0, 0.2)';

    darkModeIcone.classList.toggle('bx-sun', isDarkMode);
};

const getCurrentHour = () => new Date().getHours();
const isDarkModePreferred = getCurrentHour() >= 18 || getCurrentHour() < 6;

if (isDarkModePreferred) {
    toggleDarkMode();
}

darkModeIcone.addEventListener('click', toggleDarkMode);


///////scroll reveal /////////////////////////////////////////////////////

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', {
    origin: "top"
});
ScrollReveal().reveal('.home-img img , .services-container , .portfolio-box , .contact form', {
    origin: "bottom"
});
ScrollReveal().reveal('.home-content h1, .about-img img', {
    origin: "left"
});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {
    origin: "right"
})



///////////////////////alert about under processs
function showAlert() {
    alert("We're sorry, our site is currently under construction. Please check back soon for updates!");
}


/////////Google Sheet  for receving the  contact details from users ////////////////
const scriptURL = 'https://script.google.com/macros/s/AKfycbyWk-qU6gAZbIF_pd0M862pOXdjurKewnpK0vfDR38ZtGGM06yeieeWE2hsKskC40Nj/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})