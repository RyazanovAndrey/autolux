// menu

const btn = document.querySelector(".btn");
const activeMenu = document.querySelector(".drop");

btn.addEventListener("click", function (event) {

    let currentBtn = event.target;
    let drop = currentBtn.closest(".header__list").querySelector(".drop");

    drop.classList.toggle("drop__active");
    btn.classList.toggle("btn__active");

    btn.classList.toggle("arrow__rotate");
})

document.addEventListener("click", function (e) {

    if (!e.target.closest(".header__menu")) {
        btn.classList.remove("btn__active");
        activeMenu.classList.remove("drop__active");
        btn.classList.remove("arrow__rotate");
    }
})

// tabs

const tab = document.querySelectorAll(".tabs__item");
const tabContent = document.querySelectorAll(".tabs__content");

tab.forEach(item => {
    item.addEventListener("click", () => {

        tab.forEach(el => el.classList.remove("active__tab"));
        tabContent.forEach(cl => cl.classList.add("hidden"));

        item.classList.add("active__tab");

        const opnTab = document.querySelector("#" + item.dataset.tab);
        opnTab.classList.remove("hidden");
    })
})

// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

