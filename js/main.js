/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SWIPER PRODUCTS ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
window.sr = ScrollReveal();

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

sr.reveal(".collection-left" ,{
    duration: 3000,
    origin: "right",
    distance: "100px",
})

sr.reveal(".collection-right" ,{
    duration: 3000,
    origin: "left",
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