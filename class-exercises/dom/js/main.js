
document.querySelector("#image-0").addEventListener("click", function (){
    document.querySelector("#image-1").style.visibility = "visible";
    alert("bark bark bark");
})
document.querySelector("#image-1").addEventListener("click", function (){
    document.querySelector("#image-2").style.visibility = "visible";
})
document.querySelector("#image-2").addEventListener("click", function (){
    document.querySelector("#image-3").style.visibility = "visible";
})
document.querySelector("#image-3").addEventListener("click", function (){
    document.querySelector("#image-4").style.visibility = "hidden";
})
document.querySelector("#image-4").addEventListener("click", function (){
    document.querySelector("#image-5").style.visibility = "visible";
})
document.querySelector("#image-5").addEventListener("click", function (){
    document.querySelector("#image-6").style.visibility = "visible";
})
document.querySelector("#image-6").addEventListener("click", function (){
   // document.querySelector("#image-6").style.visibility = "hidden";
})












/*console.log("hello");

let pageTitle = document.querySelector("#page-title");

let header = document.querySelector("header"); 

let body = document.querySelector("body");

//Javascript Timeout changes h1 title after 3 seconds//
setTimeout(function(){
    pageTitle.style.color = "pink" 
    //console.log("timeout worked!");
} ,3000)

//click event on header changes background color

header.onclick = function() {
//console.log("clicked header");
body.style.backgroundColor = "black";
}
*/

