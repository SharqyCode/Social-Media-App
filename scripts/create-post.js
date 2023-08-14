let createBtn = document.querySelectorAll(".create");
let createForm = document.querySelector("#create-post");

createBtn.forEach((button)=>{
    button.addEventListener("click", ()=> {
    console.log("Button clicked");
    createForm.style.boxShadow = "0px 0px 5px 3px var(--primary-color)";
    setTimeout(()=>{
        createForm.style.boxShadow = "none";
    }, 2000);
})
})
