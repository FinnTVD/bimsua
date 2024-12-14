const CONTACT = {
    company: 'CÔNG TY CỔ PHẦN DIANA UNICHARM',
    address: 'Khu Công nghiệp Vĩnh tuy, đường Lĩnh Nam, Phường Vĩnh Hưng, Quận Hoàng Mai, Hà Nội',
    phone: '1900 585896',
    email: 'cskh@unicharm.com',
    CNDT: '9853086262 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 22.9.2011',
    MST: '0100507058',
}

document.addEventListener('DOMContentLoaded', () => {
    const footerDecorLeft = document.querySelector('.footer__decor-left');
    const footerDecorRight = document.querySelector('.footer__decor-right');
    const footerDecorBear = document.querySelector('.footer__decor-bear');
    const footerWrapper = document.querySelector('.footer__wrapper');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7 // Trigger when 10% of the footer is visible
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

    // Start observing the footer
    const footer = document.querySelector('.footer');
    if (footer) {
        footerObserver.observe(footer);
    }
});