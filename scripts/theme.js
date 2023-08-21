let themeLink = document.querySelector("#theme-link");

let cardBg = document.createElement("div");
cardBg.classList.add("card-bg");

let themeCard = document.createElement("div");
themeCard.classList.add("theme-card")

themeCard.innerHTML = `
<i class="fa-solid fa-xmark close"></i>
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
document.body.appendChild(cardBg);

// let themeHeader = document.createElement("div");

// let themeHeaderTitle = document.createElement("h2");

// let themeHeaderSub = document.createElement("p");