const aniexNext = document.querySelector('.aniex__next');
const aniexNext2 = document.querySelector('.aniex__next2');
const aniexNext3 = document.querySelector('.aniex__next3');

const aniexPre2 = document.querySelector('.aniex__pre2')
const aniexPre = document.querySelector('.aniex__pre')
const aniexPre3 = document.querySelector('.aniex__pre3')

const aniex = document.querySelector('.aniex') 
const aniex2 = document.querySelector('.aniex2') 
const aniex3 = document.querySelector('.aniex3') 

const aniexList = document.querySelector('.aniex__list')
const aniexItems = document.querySelectorAll('.aniex__item') 

console.log(aniexItems)
// test.onclick = function(){
//     contai.scrollLeft += 50;
// }
console.log([aniexList])
var prePx  = 0;
var nextPx = 0;
var scrollPer = 1100;
aniexNext.onclick = function(){    
    aniex.scrollTo({
        top: 0,
        left: (nextPx += scrollPer),
        behavior: "smooth"
    });
    if(nextPx < 0 ){
        nextPx = 0;
    }
}
aniexPre.onclick = function(){
    aniex.scrollTo({
        top: 0,
        left: (nextPx -= scrollPer),
        behavior: "smooth"
    });
    if(nextPx < 0 ){
        nextPx = 0;
    }
}

aniexNext2.onclick = function(){    
    aniex2.scrollTo({
        top: 0,
        left: (nextPx += scrollPer),
        behavior: "smooth"
    });
    if(nextPx < 0 ){
        nextPx = 0;
    }
}
aniexPre2.onclick = function(){
    aniex2.scrollTo({
        top: 0,
        left: (nextPx -= scrollPer),
        behavior: "smooth"
    });
    if(nextPx < 0 ){
        nextPx = 0;
    }
}

aniexNext3.onclick = function(){    
    aniex3.scrollTo({
        top: 0,
        left: (nextPx += scrollPer),
        behavior: "smooth"
    });
    if(nextPx < 0 ){
        nextPx = 0;
    }
}
aniexPre3.onclick = function(){
    aniex3.scrollTo({
        top: 0,
        left: (nextPx -= scrollPer),
        behavior: "smooth"
    });
    if(nextPx < 0 ){
        nextPx = 0;
    }
}