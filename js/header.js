(function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".mobile-menu");
    burger.addEventListener("click", function () {
        menu.classList.toggle("open-menu");
    });
}());

