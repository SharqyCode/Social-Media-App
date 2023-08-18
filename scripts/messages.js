let msgsLink = document.querySelector("#msgs-link");
let msgsSection = document.querySelector(".msgs-widget");
let msgsCount = document.querySelector(".msgs-count");

    msgsLink.addEventListener("click", (e)=> {
        console.log("clicked");
    e.preventDefault();
    msgsSection.style.boxShadow = "0px 0px 5px 3px var(--primary-color)";
    msgsCount.style.display = "none";
    setTimeout(()=>{
        msgsSection.style.boxShadow = "none";
    }, 2000);
    })

