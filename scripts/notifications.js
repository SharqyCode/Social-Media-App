let notifications = [
    {
        user: "Andy Tompson",
        img: "./images/Avatars/avatar-02.png",
        action: "accepted",
        area: "friend",
        time: "32 Minutes"
    },
    {
        user: "Brittany Cole",
        img: "./images/Avatars/avatar-03.png",
        action: "commented on",
        area: "post",
        time: "5 Hours"
    },
    {
        user: "Sofia Verratti",
        img: "./images/Avatars/avatar-04.png",
        action: "commented on",
        area: "tagged",
        time: "8 Hours"
    },
    {
        user: "Ivana Diatlov",
        img: "./images/Avatars/avatar-05.png",
        action: "liked",
        area: "comment",
        time: "1 Day"
    },
    {
        user: "Jhonatan Torres",
        img: "./images/Avatars/avatar-01.png",
        action: "liked",
        area: "post",
        time: "2 Days"
    }
]
let notifLink = document.querySelector("#notif-link");
let navLinks = document.querySelectorAll(".navLink");

let notifList = document.createElement("ul");
notifList.classList.add("notif-list");

for (let i = 0; i < notifications.length; i++)
{
    let notifListItem = document.createElement("li");
        
    let notif = document.createElement("a");
    notif.classList.add("notif");
    
    let notifPfp = document.createElement("img");
    notifPfp.classList.add("notif__pfp", "pfp", "mr-10");
    notifPfp.src = notifications[i].img;
        
    let notifInfo = document.createElement("div");
    notifInfo.classList.add("notif__info");
        
    let notifText = document.createElement("p");
    notifText.classList.add("notif__text");
        
    let notifTextUser = document.createElement("span");
    notifTextUser.classList.add("notif__text_user", "bold");
    notifTextUser.innerHTML = notifications[i].user;

        let area;
        switch(notifications[i].area)
        {
            case "post":
                area = "your post"
                break;
            case "comment":
                area = "your comment"
                break;
            case "friend":
                area = "your friend request"
                break;
            case "tagged":
                area = "a post you are tagged in"
                break;
        }
        let notifTextAction = document.createTextNode(` ${notifications[i].action} ${area}`);
        
        let notifTime =  document.createElement("span");
        notifTime.classList.add("notif__time", "c-grey", "mt-5");
        notifTime.innerHTML = `${notifications[i].time} Ago`;
        
        notifText.appendChild(notifTextUser);
        notifText.appendChild(notifTextAction);
        notifInfo.appendChild(notifText);
        notifInfo.appendChild(notifTime);
        notif.appendChild(notifPfp);
        notif.appendChild(notifInfo);
        notifListItem.appendChild(notif);
        notifList.appendChild(notifListItem);
}


let notifCount = document.querySelector(".notif-count");
notifLink.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if (!notifLink.classList.contains("active"))
    {
        notifLink.appendChild(notifList);
        navLinks.forEach((link)=>{
            link.classList.remove("active");
        })
        notifLink.classList.add("active");
    }
    else {
        hideNotifs();
    }
    notifCount.style.display = "none"
})


let homeLink = document.querySelector("#home");
document.addEventListener("click", (e)=>{
    if (e.target.id != "notif-link" && notifLink.classList.contains("active"))
    {
        hideNotifs();
    }
})


function hideNotifs() {
    notifLink.classList.remove("active");
    notifLink.removeChild(notifList);
    homeLink.classList.add("active");
}