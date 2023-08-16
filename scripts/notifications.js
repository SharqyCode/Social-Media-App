let notifLink = document.querySelector("#notif-link");
let navLinks = document.querySelectorAll(".navLink");

notifLink.addEventListener("click", (e)=>{
    e.preventDefault();
    
    navLinks.forEach((link)=>{
        link.classList.remove("active");
    })
    notifLink.classList.add("active");

    let notifList = document.createElement("ul");
    notifList.classList.add("notif-list");

    let notifListItem = document.createElement("li");

    let notif = document.createElement("a");
    notif.classList.add("notif");

    let notifPfp = document.createElement("img");
    notifPfp.classList.add("notif__pfp", "pfp");

    let notifInfo = document.createElement("div");
    notifInfo.classList.add("notif__info");

    let notifText = document.createElement("p");
    notifText.classList.add("notif__text");

    let notifTextUser = document.createElement("span");
    notifTextUser.classList.add("notif__text_user");

    let notifTime =  document.createElement("span");
    notifTime.classList.add("notif__time");


    

})