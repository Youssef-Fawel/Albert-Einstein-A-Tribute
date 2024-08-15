document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.about .content-wrapper', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%'
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.achievement-item', {
        scrollTrigger: {
            trigger: '.achievements',
            start: 'top 80%'
        },
        duration: 1,
        stagger: 0.2,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery',
            start: 'top 80%'
        },
        duration: 1,
        stagger: 0.2,
        scale: 0.8,
        opacity: 0,
        ease: 'power3.out'
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const quotes = document.querySelectorAll('.quote');
    let currentQuote = 0;

    function showNextQuote() {
        quotes[currentQuote].classList.remove('active');
        currentQuote = (currentQuote + 1) % quotes.length;
        quotes[currentQuote].classList.add('active');
    }

    setInterval(showNextQuote, 5000); 
    


    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });
});
   

gsap.from('.quality-item', {
    scrollTrigger: {
        trigger: '.qualities',
        start: 'top 80%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});


document.addEventListener('DOMContentLoaded', (event) => {

    const equationParts = document.querySelectorAll('.equation-part');
    gsap.to('.equation-wrapper', { opacity: 1, duration: 1, delay: 0.5 });
    gsap.to(equationParts, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 1
    });


    const glitchTitle = document.querySelector('.glitch');
    gsap.from(glitchTitle, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out',
        delay: 2.5
    });


    gsap.to('.subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 3
    });

});
