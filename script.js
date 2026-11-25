let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let typed = new Typed(".typed-text", {
    strings: ["Frontend Designer", "Generative AI Developer", "UI / UX Designer", "Neural Network Engineer", "AI & ML Engineer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});
}



