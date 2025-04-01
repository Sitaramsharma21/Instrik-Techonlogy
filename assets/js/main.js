//*  /* */ =============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

const blurHeader = () =>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('blur-header'); else header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);


/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById('contact-form');
//       contactMessage = document.getElementById('contact__message');

// const sendEmail = (e) =>{ 
//     e.preventDefault()

//     emailjs.sendForm('service_hkfkoct', 'template_f5ntu0a', '#contact-form', 'Qil5YOH1PD6K6dELL')
//     .then(() => {
//         contactMessage.textContent = 'Message sent successfully!';
//         contactForm.reset();
//     }, (error) => {
//         contactMessage.textContent = 'Message not sent, please try again';
//         console.log(error);
//     });
// }

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact__message');

const sendEmail = (e) => { 
    e.preventDefault();

    emailjs.sendForm('service_hkfkoct', 'template_f5ntu0a', '#contact-form', 'Qil5YOH1PD6K6dELL')
    .then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Message sent successfully!',
            showConfirmButton: false,
            timer: 3000,
            background: '#1c1e25',
            color: 'white',
            width: '500px',
            iconColor: '#f39422',
        });
        
    }, (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Message not sent, please try again',
            text: 'There was an issue with sending your message. Please try again later.',
            showConfirmButton: true,
            background: '#1c1e25',
            color: 'white',
            width: '500px',
            iconColor: '#f39422',
        });
        console.log(error);
    });
};

contactForm.addEventListener('submit', sendEmail);




contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');  
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,

    // reset: true
});

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`,  {origin: 'left'})
sr.reveal(`.about__image, .skills__content, .container_skills`,  {origin: 'right'})
sr.reveal(`.services__card, .project__card`, {interval: 100})
