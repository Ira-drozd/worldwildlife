(function () {

    let list = document.querySelector(".circle-card-marineanimals");//карусель
    let widthCarusel = document.querySelector(".circle-card-marineanimals").offsetWidth;//467

    let widthImg = list.querySelector(".circle-card-item").offsetWidth;//150
    let count = Math.floor(widthCarusel / widthImg);//3
    let listElems = list.querySelectorAll(".circle-card-item");//13
    let carusel = list.querySelector(".circle-card-pillars");//что двигаем
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

}());


(function () {

    let list = document.querySelector(".circle-card-primates");//карусель
    let widthCarusel = document.querySelector(".circle-card-primates").offsetWidth;//467

    let widthImg = list.querySelector(".circle-card-item").offsetWidth;//150
    let count = Math.floor(widthCarusel / widthImg);//3
    let listElems = list.querySelectorAll(".circle-card-item");//13
    let carusel = list.querySelector(".circle-card-pillars");//что двигаем
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

}());


(function () {

    let list = document.querySelector(".circle-card-bigcats");//карусель
    let widthCarusel = document.querySelector(".circle-card-bigcats").offsetWidth;//467

    let widthImg = list.querySelector(".circle-card-item").offsetWidth;//150
    let count = Math.floor(widthCarusel / widthImg);//3
    let listElems = list.querySelectorAll(".circle-card-item");//13
    let carusel = list.querySelector(".circle-card-pillars");//что двигаем
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

}());




