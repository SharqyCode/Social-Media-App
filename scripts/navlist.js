let navLinks = document.querySelectorAll(".navLink");

navLinks.forEach((link)=>{
    link.addEventListener("click", e => {
        e.preventDefault();
        navLinks.forEach((linktwo)=>{
            linktwo.classList.remove("active");
        })
        e.target.classList.add("active");
    });
});

let homeLink = document.querySelector("#home");
document.addEventListener("click", (e)=>{
    if (!e.target.classList.contains("navLink")) {
        navLinks.forEach((link)=>{
            link.classList.remove("active");
        })
        homeLink.classList.add("active");
    }
})