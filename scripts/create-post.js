let createBtn = document.querySelectorAll(".create");
let createForm = document.querySelector("#create-post");
let postInput = document.querySelector("#post-input");

createBtn.forEach((button)=>{
    button.addEventListener("click", ()=> {
    console.log("Button clicked");
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    postInput.focus();
    createForm.style.boxShadow = "0px 0px 5px 3px var(--primary-color)";
    setTimeout(()=>{
        createForm.style.boxShadow = "none";
    }, 2000);
    })
})
