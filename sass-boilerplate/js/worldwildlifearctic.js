let list = document.querySelector(".circle-card-species");
let widthCarusel = document.querySelector(".circle-card-species").offsetWidth;

window.addEventListener(`resize`, event => {

    list = document.querySelector(".circle-card-species");
    widthCarusel = document.querySelector(".circle-card-species").offsetWidth;
    workCarusel(list, widthCarusel);

}, false);

function workCarusel(list, widthCarusel) {
    let widthImg = list.querySelector(".circle-card-item").offsetWidth;
    let count = Math.floor(widthCarusel / widthImg);
    let listElems = list.querySelectorAll(".circle-card-item");
    let carusel = list.querySelector(".circle-card-pillars");
    let position = 0;

    list.querySelector('.prev').onclick = function () {
        position += widthImg * count - widthImg;
        position = Math.min(position, 0);
        carusel.style.marginLeft = position + 'px';
    };

    list.querySelector('.next').onclick = function () {
        position -= widthImg * count - widthImg;
        position = Math.max(position, -widthImg * (listElems.length - count) - widthImg * 2);
        carusel.style.marginLeft = position + 'px';
    };
}

workCarusel(list, widthCarusel);

window.addEventListener('scroll',myFunction);

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}




