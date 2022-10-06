/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SWIPER PRODUCTS ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
window.sr = ScrollReveal();

sr.reveal(".header__description", {
    duration: 2000,
    origin: "top",
    distance: "100px",
})
sr.reveal(".header__images", {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
})

sr.reveal(".new__img", {
    duration: 2000,
    origin: "bottom",
    distance: "100px",
})

window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav");
    this.scrollY >= 50 ? nav.classList.add("nav-scroll")
                    : nav.classList.remove("nav-scroll");
})

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
