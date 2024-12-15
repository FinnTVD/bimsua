document.addEventListener('DOMContentLoaded', () => {
    const footerDecorLeft = document.querySelector('.footer__decor-left');
    const footerDecorRight = document.querySelector('.footer__decor-right');
    const footerDecorBear = document.querySelector('.footer__decor-bear');
    const footerWrapper = document.querySelector('.footer__wrapper');
    const mainContentLeft = document.querySelector('.main__content-left');
    const mainContentLeftLeaf = document.querySelector('.main__content-left-leaf');

    const otherFeatureButton = document.getElementById('other-feature');

    otherFeatureButton.addEventListener('click', () => {
        otherFeatureButton.classList.add('active');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 10% of the footer is visible
    };

    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class to footer decorative elements
                footerDecorLeft.classList.add('active');
                footerDecorRight.classList.add('active');
                footerDecorBear.classList.add('active');
                footerWrapper.classList.add('active');
            } else {
                // Optional: Remove active class when footer is not in view
                footerDecorLeft.classList.remove('active');
                footerDecorRight.classList.remove('active');
                footerDecorBear.classList.remove('active');
                footerWrapper.classList.remove('active');
            }
        });
    }, observerOptions);

    const bodySectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mainContentLeft.classList.add('active');
                mainContentLeftLeaf.classList.add('active');
            } else {
                mainContentLeft.classList.remove('active');
                mainContentLeftLeaf.classList.remove('active');
            }
        });
    }, observerOptions);

    // Start observing the footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footerObserver.observe(footer);
    }

    const bodySection = document.getElementById('body-section');
    if (bodySection) {
        bodySectionObserver.observe(bodySection);
    }
});
