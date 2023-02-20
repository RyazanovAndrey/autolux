const btn = document.querySelector(".btn");

btn.addEventListener("click", function(event){

    let currentBtn = event.target;
    let drop = currentBtn.closest(".header__list").querySelector(".drop");

    drop.classList.toggle("drop__active");
})