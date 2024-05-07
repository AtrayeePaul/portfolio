//circle for skills//

const circle = document.querySelectorAll(".circle");
circle.forEach(elem=> {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;

    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for(let i = 0; i < percent; i++){
        pointsMarked[i].classList.add("marked");
    }
})

//TOGGLE ICON NAVBAR//

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


//scroll section active link//
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=" + id + "]').classList.add('active');
            });
        };
    });
    

//sticky navbar//
let header = document.querySelector('header');

header.classList.toggle("sticky", window.scrollY > 100);

//remove toggle icon navbar//
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};




//send message//
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value

    }

    emailjs.send("service_m785t4d","template_ibam375",parms).then(alert("Email Sent!"))
}

//scroll reveal//
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});
ScrollReveal().reveal('.home-content, .heading, .main-text', { origin: 'top' });
ScrollReveal().reveal(' .home-img, .about-img, .services-container , .project-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content h2, .main-text', { origin: 'left' });

