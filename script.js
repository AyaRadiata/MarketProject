
const page1 = document.getElementById(`page_1`);

var windowH = window.innerHeight;
var windowW = window.innerWidth;

// window.addEventListener("scroll", function(){
//     let maxH = window.innerHeight;
//     let sY = window.scrollY;
//     let ratio = sY/maxH * 100;

//     if(window.scrollY <= maxH){
//         page1.dataset.p1Opened = `false`;
//     } else if (window.scrollY >= maxH){
//         page1.dataset.p1Opened = `true`;
//     }
// });

const page2 = document.getElementById('page_2');
const p2section1 = document.getElementById('p2_section1');
const p2section2 = document.getElementById('p2_section2');
const p2section3 = document.getElementById('p2_section3');

p2section1.addEventListener('click', function(){
    page2.dataset.infopageShown = "1";
});
p2section2.addEventListener('click', function(){
    page2.dataset.infopageShown = "2";
});
p2section3.addEventListener('click', function(){
    page2.dataset.infopageShown = "3";
});

console.log(window.innerWidth)