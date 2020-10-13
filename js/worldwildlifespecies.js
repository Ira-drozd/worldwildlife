let caruselObject = {
    marineanimals: {
        list: document.querySelector(".circle-card-marineanimals"),
        widthCarusel: document.querySelector(".circle-card-marineanimals").offsetWidth
    },
    primates: {
        list: document.querySelector(".circle-card-primates"),
        widthCarusel: document.querySelector(".circle-card-primates").offsetWidth
    },
    bigcats: {
        list: document.querySelector(".circle-card-bigcats"),
        widthCarusel: document.querySelector(".circle-card-bigcats").offsetWidth
    }
}


window.addEventListener(`resize`, event => {

    caruselObject = {
        marineanimals: {
            list: document.querySelector(".circle-card-marineanimals"),
            widthCarusel: document.querySelector(".circle-card-marineanimals").offsetWidth
        },
        primates: {
            list: document.querySelector(".circle-card-primates"),
            widthCarusel: document.querySelector(".circle-card-primates").offsetWidth
        },
        bigcats: {
            list: document.querySelector(".circle-card-bigcats"),
            widthCarusel: document.querySelector(".circle-card-bigcats").offsetWidth
        }
    }

    workCarusel(caruselObject.marineanimals.list, caruselObject.marineanimals.widthCarusel);
    workCarusel(caruselObject.primates.list, caruselObject.primates.widthCarusel);
    workCarusel(caruselObject.bigcats.list, caruselObject.bigcats.widthCarusel);

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

workCarusel(caruselObject.marineanimals.list, caruselObject.marineanimals.widthCarusel);
workCarusel(caruselObject.primates.list, caruselObject.primates.widthCarusel);
workCarusel(caruselObject.bigcats.list, caruselObject.bigcats.widthCarusel);





