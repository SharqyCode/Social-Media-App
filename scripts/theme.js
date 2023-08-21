let themeLink = document.querySelector("#theme-link");

let cardBg = document.createElement("div");
cardBg.classList.add("card-bg");

let themeCard = document.createElement("div");
themeCard.classList.add("theme-card")

themeCard.innerHTML = `
<i class="fa-solid fa-xmark theme-card__close"></i>
<div class="theme-header txt-c">
    <h3 class="theme-header_title ">Customize Your View</h3>
    <p class="theme-header_description c-grey">Manage your font size, color and background</p>
    <div class="font-size mt-80">
        <h5 class="font-size_title txt-c">Font Size</h5>
        <div class="d-flex align-center mt-5">
            <span class="size-selector__small-font">Aa</span>
            <div class="size-selector p-relative d-flex f-g-1">
                <div class="size-selector__slider p-absolute"></div>
                <span class="size-selector__size x-small"></span>
                <span class="size-selector__size small"></span>
                <span class="size-selector__size normal active"></span>
                <span class="size-selector__size large"></span>
                <span class="size-selector__size x-large"></span>
            </div>
            <span class="size-selector__large-font">Aa</span>
        </div>
    </div>
    <div class="color-type mt-40">
        <h5 class="color-type_title txt-c">Color</h5>
        <div class="color-selector d-flex space-between mt-10">
            <span class="color-selector__color purple active"></span>
            <span class="color-selector__color yellow"></span>
            <span class="color-selector__color red"></span>
            <span class="color-selector__color green"></span>
            <span class="color-selector__color blue"></span>
        </div>
    </div>
    <div class="background-type mt-40">
        <h5 class="background-type_title txt-c">Background</h5>
        <div class="background-selector d-flex flex-c-c mt-10">
            <span class="background-selector__background light active">
                <span class="icon mr-20"></span>
                Light
            </span>
            <span class="background-selector__background dark">
                <span class="icon mr-20"></span>
                Dark
            </span>
            <span class="background-selector__background black">
                <span class="icon mr-20"></span>
                Black
            </span>
        </div>
    </div>
</div>
`

cardBg.appendChild(themeCard);

themeLink.addEventListener("click", ()=>{
    document.body.appendChild(cardBg);
    themeCard.classList.add("open")
    let closeTheme = document.querySelector(".theme-card__close");
    closeTheme.addEventListener("click", ()=>{
        themeCard.classList.remove("open")
        document.body.removeChild(cardBg);
    })
    
    let sizes = document.querySelectorAll(".size-selector__size");
    sizes.forEach((size)=>{
        size.addEventListener("click", ()=>{
            if (!size.classList.contains("active"))
            {
                if (size.classList.contains("x-small"))
                {
                    root.style.setProperty("font-size",
                    `12px`);
                }
                if (size.classList.contains("small"))
                {
                    root.style.setProperty("font-size",
                    `14px`);
                }
                if (size.classList.contains("normal"))
                {
                    root.style.setProperty("font-size",
                    `16px`);
                }
                if (size.classList.contains("large"))
                {
                    root.style.setProperty("font-size",
                    `18px`);
                }
                if (size.classList.contains("x-large"))
                {
                    root.style.setProperty("font-size",
                    `20px`);
                }
                sizes.forEach((size)=>{
                    size.classList.remove("active");
                })
                size.classList.add("active");
            }
        })
    })

    let root = document.querySelector(":root");
    let colors = document.querySelectorAll(".color-selector__color");
    colors.forEach((color)=>{
        color.addEventListener("click", ()=>{
            if (!color.classList.contains("active"))
            {
                root.style.setProperty("--primary-color",
                `var(--color-${color.classList[color.classList.length-1]})`);
                colors.forEach((color)=>{
                    color.classList.remove("active");
                })
                color.classList.add("active");
            }
        })
    })

    let backgrounds = document.querySelectorAll(".background-selector__background");
    backgrounds.forEach((background)=>{
        background.addEventListener("click", ()=>{
            if (!background.classList.contains("active"))
            {
                root.style.setProperty("--cur-bg",
                `var(--${background.classList[background.classList.length-1]}-bg)`);
                root.style.setProperty("--cur-widget",
                `var(--${background.classList[background.classList.length-1]}-widget)`);
                if (!background.classList.contains("light")) {
                    root.style.setProperty("--primary-font",
                    `var(--dark-font)`);
                    root.style.setProperty("--secondary-font",
                    `var(--light-font)`);
                }
                else {
                    root.style.setProperty("--primary-font",
                    `var(--light-font)`);
                    root.style.setProperty("--secondary-font",
                    `var(--dark-font)`);
                }
               
                backgrounds.forEach((background)=>{
                    background.classList.remove("active");
                })
                background.classList.add("active");
            }
        })
    })
})

document.addEventListener("click", (e)=>{
    if (e.target.classList.contains("card-bg"))
    {
        themeCard.classList.remove("open")
        document.body.removeChild(cardBg);
        themeLink.classList.remove("active");
        homeLink.classList.add("active");
    }
})
//TODO: Add responsiveness to theme selector






