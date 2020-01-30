
(function () {


     let list = document.querySelector(".circle-card-species");//карусель
     let widthCarusel = document.querySelector(".circle-card-species").offsetWidth;//467

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


window.onscroll = function() {myFunction()};

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}




