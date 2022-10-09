'use strict'
const imageContainer = document.querySelector(".image__container");
const point = document.querySelectorAll(".point");

point.forEach((eachPoint, i)=>{
    point[i].addEventListener("click",()=>{
        let position  = i;
        let operation = position * -25;

        imageContainer.style.transform = `translateX(${ operation }%)`;

        point.forEach((eachPoint, i)=>{
            point[i].classList.remove("active");
        });
        point[i].classList.add("active");
    });
});