let openNavList = document.querySelector(".open-navList");
let openNavBlock = document.querySelector(".open-nav-block");
let navList = document.querySelector(".navList");
let closeNavList = document.querySelector(".close-navList");

let pageContainer = document.querySelector(".page .container");

openNavList.addEventListener("click", ()=>{
    pageContainer.style.gridTemplateColumns = "64px auto 0px";
    openNavBlock.style.display = "none";
    navList.style.display = "block";
    closeNavList.style.display = "grid";
})

closeNavList.addEventListener("click", ()=>{
    closeNavList.style.display = "none";
    navList.style.display = "none";
    openNavBlock.style.display = "block";
    pageContainer.style.gridTemplateColumns = "0px auto 0px";
})