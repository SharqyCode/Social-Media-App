let requestsBlock = document.querySelector(".requests-contacts");
let requests = document.querySelectorAll(".requests-contact");

requests.forEach((request) => {
    let declineBtn = request.querySelector(".decline");
    let acceptBtn = request.querySelector(".accept");
    declineBtn.addEventListener("click", () => {
        request.style.animationName = "slideOff";
        removeOff(request);
    })
    acceptBtn.addEventListener("click", () => {
        request.style.animationName = "slideUp";
        removeOff(request);
    })
})

function removeOff(request) {
    setTimeout(() => {
        requestsBlock.removeChild(request)
    }, 500);
}