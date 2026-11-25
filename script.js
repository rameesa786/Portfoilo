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

// Contact Form Submission
const contactForm = document.querySelector('.contact form');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formspree.io/f/mbgowkyy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Message sent successfully! Thank you for contacting me 😊');
                contactForm.reset();
            } else {
                const result = await response.json();
                console.error('Formspree error:', result);
                alert('Message could not be sent. Please check your form configuration.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}



