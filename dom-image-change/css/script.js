const imgchange1=document.getElementById("imgchange1");
imgchange1.addEventListener("click",img1);
document.getElementById("features-1").style.display="block";
function img1() {
    document.getElementById("features-1").style.display="block";
    document.getElementById("features-2").style.display="none";
    document.getElementById("features-3").style.display="none";
    document.getElementById("features-4").style.display="none";
}

const imgchange2=document.getElementById("imgchange2");
imgchange2.addEventListener("click",img2);
document.getElementById("features-2").style.display="none";

function img2() {
    document.getElementById("features-2").style.display="block"
    document.getElementById("features-1").style.display="none";
    document.getElementById("features-3").style.display="none";
    document.getElementById("features-4").style.display="none";
}

const imgchange3=document.getElementById("imgchange3");
imgchange3.addEventListener("click",img3);
document.getElementById("features-3").style.display="none";
function img3() {
    document.getElementById("features-3").style.display="block";
    document.getElementById("features-1").style.display="none";
    document.getElementById("features-2").style.display="none";
    document.getElementById("features-4").style.display="none";
}

const imgchange4=document.getElementById("imgchange4");
imgchange4.addEventListener("click",img4);
document.getElementById("features-4").style.display="none";
function img4() {
    document.getElementById("features-4").style.display="block";
    document.getElementById("features-2").style.display="none";
    document.getElementById("features-3").style.display="none";
    document.getElementById("features-1").style.display="none";
}

let imgchange=document.getElementsByClassName("about-modi-item ")[0];
console.log(imgchange);
imgchange.addEventListener("click",img);

let slide=document.getElementsByClassName("slide")[0];
slide[0].style.display="none";
console.log(slide);

for(slide=0;slide<=3;slide++){
    slide.style.display="none";
}

function img(){
    for(imgchange=0;imgchange<=3;imgchange++){
        slide[0].style.display="block";
}
}


// function disp(i,slide){
//         console.log(i);
//         console.log(this.Element);
//         if(this.value==i){
//             slide[i].style.display="block";
//         }
//         slide[i].style.display="block";
// }
// let slide=document.getElementsByClassName("slide");
// let imgchange=document.getElementsByClassName("about-modi-item ");
// console.log(imgchange);
// for(i=0;i<imgchange.length;i++){
//     imgchange[i].addEventListener("click",disp)
// }



