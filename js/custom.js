
let menuBtn = document.getElementById("menuBtn")
let sideNav = document.getElementById("sideNav")
let menu = document.getElementById("menu")
sideNav.style.right = "-250px";
menuBtn.onclick = function (){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "images/close-menu.png";
    }
    else{
        sideNav.style.right = "-250px";
        menu.src = "images/png.webp";
    }
}