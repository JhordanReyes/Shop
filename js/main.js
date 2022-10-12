/*=============== DARK MODE ===============*/
const moon = document.getElementById("moon");
moon.addEventListener("click", ()=> {
    document.body.classList.toggle("dark");
})
const moonMobile = document.getElementById("moonMobile");

moonMobile.addEventListener("click", ()=> {
    document.body.classList.toggle("dark");
})
/*=============== SWIPER PRODUCTS ===============*/
var swiperProducts = new Swiper(".products__swiper", {
    slidesPerView: 1,
    spaceBetween: 35,
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
window.sr = ScrollReveal();

window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    this.scrollY >= 50 ? nav.classList.add("nav-scroll")
        : nav.classList.remove("nav-scroll");
})

sr.reveal(".header__description", {
    duration: 3000,
    origin: "top",
    distance: "100px",
})
sr.reveal(".header__images", {
    duration: 3000,
    origin: "bottom",
    distance: "100px",
})

sr.reveal(".new__img", {
    duration: 2500,
    origin: "bottom",
    distance: "100px",
})

sr.reveal(".collection-left", {
    duration: 3000,
    origin: "right",
    distance: "100px",
})

sr.reveal(".collection-right", {
    duration: 3000,
    origin: "left",
    distance: "100px",
})

sr.reveal(".swiper", {
    duration: 3000,
    origin: "top",
    distance: "50px",
})

sr.reveal(".brand-img", {
    duration: 2500,
    origin: "top",
    distance: "50px",
})