// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Animation for Page 3 image hover
function page3Animation() {
    const elemC = document.querySelector(".elem-container");
    const fixed = document.querySelector(".fixed-image");

    if (!elemC || !fixed) return; // Prevent errors if element doesn't exist

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });

    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });

    const elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            const image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}

// Swiper Slider Initialization
function swiperAnimation() {
    new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 100,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // Optional: responsive breakpoints
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    });
}

// Navigation Menu Toggle
function menuAnimation() {
    const menu = document.querySelector("nav h3");
    const full = document.querySelector("#full-scr");
    const navimg = document.querySelector("nav img");

    if (!menu || !full || !navimg) return;

    let isOpen = false;

    menu.addEventListener("click", function () {
        full.style.top = isOpen ? "-100%" : "0";
        navimg.style.opacity = isOpen ? "1" : "0";
        isOpen = !isOpen;
    });
}

// Loader animation (hides loader after page load)
function loaderAnimation() {
    const loader = document.querySelector("#loader");
    if (!loader) return;

    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4200);
}

// Call all animation functions
page3Animation();
swiperAnimation();
menuAnimation();
loaderAnimation();
