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
                <span id="f12" class="size-selector__size x-small"></span>
                <span id="f14" class="size-selector__size small"></span>
                <span id="f16" class="size-selector__size normal active"></span>
                <span id="f18" class="size-selector__size large"></span>
                <span id="f20" class="size-selector__size x-large"></span>
            </div>
            <span class="size-selector__large-font">Aa</span>
        </div>
    </div>
    <div class="color-type mt-40">
        <h5 class="color-type_title txt-c">Color</h5>
        <div class="color-selector d-flex space-between mt-10">
            <span id="purple" class="color-selector__color purple active"></span>
            <span id="yellow" class="color-selector__color yellow"></span>
            <span id="red" class="color-selector__color red"></span>
            <span id="green" class="color-selector__color green"></span>
            <span id="blue" class="color-selector__color blue"></span>
        </div>
    </div>
    <div class="background-type mt-40">
        <h5 class="background-type_title txt-c">Background</h5>
        <div class="background-selector d-flex flex-c-c mt-10">
            <span id="light" class="background-selector__background light active">
                <span class="icon mr-20"></span>
                Light
            </span>
            <span id="dark" class="background-selector__background dark">
                <span class="icon mr-20"></span>
                Dark
            </span>
            <span id="black" class="background-selector__background black">
                <span class="icon mr-20"></span>
                Black
            </span>
        </div>
    </div>
</div>
`

cardBg.appendChild(themeCard);

let root = document.querySelector(":root");

// Set theme according to local storage values
document.addEventListener("DOMContentLoaded", () => {
    if (window.localStorage.getItem("font") != null) {
        root.style.setProperty("font-size",
            `${window.localStorage.getItem("font")}px`);
    }
    else {
        window.localStorage.setItem("font", "16");
    }

    if (window.localStorage.getItem("color") != null) {
        root.style.setProperty("--primary-color",
            `var(--color-${window.localStorage.getItem("color")})`);
    }
    else {
        window.localStorage.setItem("color", "purple");
    }


    if (window.localStorage.getItem("bg") != null) {
        root.style.setProperty("--cur-bg",
            `var(--${window.localStorage.getItem("bg")}-bg)`);
    }
    else {
        window.localStorage.setItem("bg", "light");
    }

    if (window.localStorage.getItem("widget") != null) {
        root.style.setProperty("--cur-widget",
            `var(--${window.localStorage.getItem("widget")}-widget)`);
    }
    else {
        window.localStorage.setItem("widget", "light");
    }

    if (window.localStorage.getItem("primaryFont") != null) {
        root.style.setProperty("--primary-font",
            `var(--${window.localStorage.getItem("primaryFont")}-font)`);
    }
    else {
        window.localStorage.setItem("primaryFont", "light");
    }

    if (window.localStorage.getItem("secondaryFont") != null) {
        root.style.setProperty("--secondary-font",
            `var(--${window.localStorage.getItem("secondaryFont")}-font)`);
    }
    else {
        window.localStorage.setItem("secondaryFont", "dark");
    }
})

// Open theme card on click
themeLink.addEventListener("click", () => {
    document.body.appendChild(cardBg);
    let sizes = document.querySelectorAll(".size-selector__size");
    let colors = document.querySelectorAll(".color-selector__color");
    let backgrounds = document.querySelectorAll(".background-selector__background");

    // Set active elements according to local storage values
    sizes.forEach((size) => {
        size.classList.remove("active");
    })
    document
        .querySelector(`#f${window.localStorage.getItem("font")}`)
        .classList.add("active");

    colors.forEach((color) => {
        color.classList.remove("active");
    })
    document
        .querySelector(`#${window.localStorage.getItem("color")}`)
        .classList.add("active");

    backgrounds.forEach((background) => {
        background.classList.remove("active");
    })
    document
        .querySelector(`#${window.localStorage.getItem("bg")}`)
        .classList.add("active");

    // Add open class to signify addition/removal of card
    themeCard.classList.add("open")
    let closeTheme = document.querySelector(".theme-card__close");
    closeTheme.addEventListener("click", () => {
        themeCard.classList.remove("open")
        document.body.removeChild(cardBg);
    })

    // Choose font size and add to local storage
    let fontSize;
    sizes.forEach((size) => {
        size.addEventListener("click", () => {
            if (!size.classList.contains("active")) {
                if (size.classList.contains("x-small")) {
                    fontSize = 12;
                }
                if (size.classList.contains("small")) {
                    fontSize = 14;
                }
                if (size.classList.contains("normal")) {
                    fontSize = 16;
                }
                if (size.classList.contains("large")) {
                    fontSize = 18;
                }
                if (size.classList.contains("x-large")) {
                    fontSize = 20;
                }

                root.style.setProperty("font-size",
                    `${fontSize}px`);
                window.localStorage.setItem("font", fontSize);
                sizes.forEach((size) => {
                    size.classList.remove("active");
                })
                size.classList.add("active");
            }
        })
    })

    // Choose primary color and add to local storage
    let primaryColor;
    colors.forEach((color) => {
        color.addEventListener("click", () => {
            if (!color.classList.contains("active")) {
                primaryColor = color.classList[color.classList.length - 1];
                window.localStorage.setItem("color", primaryColor);
                root.style.setProperty("--primary-color",
                    `var(--color-${primaryColor})`);
                colors.forEach((color) => {
                    color.classList.remove("active");
                })
                color.classList.add("active");
            }
        })
    })


    // Choose bg, widget, and font colors and add to local storage
    let widgetColor;
    let bgColor;
    let primaryFont;
    let secondaryFont;
    backgrounds.forEach((background) => {
        background.addEventListener("click", () => {
            if (!background.classList.contains("active")) {
                bgColor = background.classList[background.classList.length - 1];
                root.style.setProperty("--cur-bg",
                    `var(--${bgColor}-bg)`);
                window.localStorage.setItem("bg", bgColor);

                widgetColor = background.classList[background.classList.length - 1];
                root.style.setProperty("--cur-widget",
                    `var(--${widgetColor}-widget)`);
                window.localStorage.setItem("widget", widgetColor);

                if (!background.classList.contains("light")) {
                    primaryFont = "dark";
                    secondaryFont = "light";
                }
                else {
                    primaryFont = "light";
                    secondaryFont = "dark";
                }

                root.style.setProperty("--primary-font",
                    `var(--${primaryFont}-font)`);
                window.localStorage.setItem("primaryFont", primaryFont);
                root.style.setProperty("--secondary-font",
                    `var(--${secondaryFont}-font)`);
                window.localStorage.setItem("secondaryFont", secondaryFont);

                backgrounds.forEach((background) => {
                    background.classList.remove("active");
                })
                background.classList.add("active");
            }
        })
    })
})

// Close theme card when click outside
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-bg")) {
        themeCard.classList.remove("open")
        document.body.removeChild(cardBg);
        themeLink.classList.remove("active");
        homeLink.classList.add("active");
    }
})






