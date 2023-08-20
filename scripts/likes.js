let likes = document.querySelectorAll(".like");

likes.forEach((like)=>{
    like.addEventListener("click", ()=>{
        if (like.classList.contains("fa-regular"))
        {
            like.classList.remove("fa-regular");
            like.classList.add("fa-solid");
            like.style.color = "var(--color-red)";
        }
        else if (like.classList.contains("fa-solid"))
        {
            like.classList.remove("fa-solid");
            like.classList.add("fa-regular");
            like.style.color = "var(--light-font)";
        }
    })
})