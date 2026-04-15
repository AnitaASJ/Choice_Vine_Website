const navLinks =document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton =document.querySelector("#menu-open-button");
const menuCloseButton =document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Close menu when the nav link is clicked
navlinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    }
});



