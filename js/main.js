const btn = document.querySelector(".btn");

btn.addEventListener("click", function(event){

    let currentBtn = event.target;
    let drop = currentBtn.closest(".header__list").querySelector(".drop");

    drop.classList.toggle("drop__active");
    btn.classList.toggle("btn__active");
})

// tabs

const tab = document.querySelectorAll(".tabs__item");
const tabContent = document.querySelectorAll(".tabs__content");

tab.forEach(item => {
    item.addEventListener("click", ()=> {

        tab.forEach(el => el.classList.remove("active__tab"));
        tabContent.forEach(cl => cl.classList.add("hidden"));
        
        item.classList.add("active__tab");

        const opnTab = document.querySelector("#" + item.dataset.tab);
        opnTab.classList.remove("hidden");
    })
})