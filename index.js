// alert("hello");
// var nos=document.querySelectorAll(".drum").length;
// for(var i=0;i<nos;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",handleclick);
//     function handleclick(){
//         alert("I got clicked"+i);
// }

// }


document.querySelectorAll("button")[0].addEventListener("click",playonclick1);
document.querySelectorAll("button")[1].addEventListener("click",playonclick2);
document.querySelectorAll("button")[2].addEventListener("click",playonclick3);
document.querySelectorAll("button")[3].addEventListener("click",playonclick4);
document.querySelectorAll("button")[4].addEventListener("click",playonclick5);
document.querySelectorAll("button")[5].addEventListener("click",playonclick6);
document.querySelectorAll("button")[6].addEventListener("click",playonclick7);
function playonclick1(){
    var audio1=new Audio('tom-1.mp3');
    audio1.play();
    
}
function playonclick2(){
    var audio2=new Audio('tom-2.mp3');
    audio2.play();
}

function playonclick3(){
    var audio3=new Audio('tom-3.mp3');
    audio3.play();
}
function playonclick4(){
    var audio4=new Audio('tom-4.mp3');
    audio4.play();
}
function playonclick5(){
    var audio5=new Audio('snare.mp3');
    audio5.play();
}
function playonclick6(){
    var audio6=new Audio('kick-bass.mp3');
    audio6.play();
}
function playonclick7(){
    var audio7=new Audio('crash.mp3');
    audio7.play();
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    
})
function makesound(key){
    switch(key){
        case 'w':
            var audio1=new Audio('tom-1.mp3');
            audio1.play();
            buttonanimation('w');
            break;
        case 'a':
            var audio2=new Audio('tom-1.mp3');
            audio2.play();
            buttonanimation('a');
            break;
        case 's':
            var audio3=new Audio('tom-3.mp3');
            audio3.play();
            buttonanimation('s');
            break;
        case 'd':
            var audio4=new Audio('tom-4.mp3');
            audio4.play();
            buttonanimation('d');
            break;
        case 'j':
            var audio5=new Audio('snare.mp3');
            audio5.play();
            buttonanimation('j');
            break;
        case 'k':
            var audio6=new Audio('kick-bass.mp3');
            audio6.play();
            buttonanimation('k');
            break;
        case 'l':
            var audio7=new Audio('crash.mp3');
            audio7.play();
            buttonanimation('l');
            break;
    }    
}
function buttonanimation(key){
    var currbutton=document.querySelector("."+key);
    currbutton.classList.add("pressed");
    setTimeout(function(){
        currbutton.classList.remove("pressed");
    },500)
}