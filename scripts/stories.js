let stories = document.querySelectorAll(".stories-card");
let storyBG = document.createElement("div");
storyBG.classList.add("storyBG");
storyBG.style.zIndex = "11";
let storyLarge = document.createElement("div");
storyLarge.classList.add("storyLarge");

stories.forEach((story) => {
    story.addEventListener("click", () => {
        let storyLarge = document.createElement("div");
        storyLarge.classList.add("storyLarge");
        storyLarge.style.backgroundImage = window.getComputedStyle(story).backgroundImage;
        let storyLargePfp = document.createElement("img");
        storyLargePfp.src = story.querySelector("img").src;
        storyLargePfp.classList.remove("stories-card__profile");
        storyLargePfp.classList.add("storyLarge__pfp", "pfp");
        storyLarge.appendChild(storyLargePfp);
        storyBG.append(storyLarge);
        document.body.appendChild(storyBG);
        document.body.style.overflowY = "hidden";
        setTimeout(() => {
            document.body.style.overflowY = "scroll";
            document.body.removeChild(storyBG);
        }, 15000)
    })
})

storyBG.addEventListener("click", () => {
    document.body.style.overflowY = "scroll";
    document.body.removeChild(storyBG);
})