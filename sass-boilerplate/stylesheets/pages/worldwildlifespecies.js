(function () {

    let widthCarusel = document.querySelector(".circle-card-marineanimals").offsetWidth;
    let widthImg = document.querySelector(".circle-card-item").offsetWidth;
    let count = Math.floor(widthCarusel / widthImg);
    let list = document.querySelector(".circle-card-marineanimals");//карусель
    let listElems = list.querySelectorAll(".circle-card-item");
    let carusel=document.querySelector(".circle-card-pillars");
    let position = 0;

    list.querySelector('.prev').onclick = function() {
        // сдвиг влево
        position += widthImg * count - widthImg;//0+170*6
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0);
        carusel.style.marginLeft = position + 'px';
       // alert(widthImg);
    };

    list.querySelector('.next').onclick = function() {
        // сдвиг вправо
        position -= widthImg * count +widthImg;
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -widthImg * (listElems.length - count)-widthImg*2);
        carusel.style.marginLeft = position + 'px';
    };

   // alert(count);
}());