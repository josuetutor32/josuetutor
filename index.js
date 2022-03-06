const buttons = document.querySelectorAll(".button")
const mainContent = document.querySelectorAll(".main-content")
const closeButton = document.querySelectorAll(".close-button")
const hamburger = document.querySelector("#hamburger")
const headerContainer = document.querySelector("#header-container")
const form = document.querySelector("#form")
const formEmail = document.querySelector(".form-submit")

for (let closebut of closeButton) {
    closebut.addEventListener('click', e => {
        setTimeout(() => {
            e.target.parentElement.style.display = "none"
        }, 1000)
    })
}

function showContent(evt, idName) {
    for (let contents of mainContent) {
        contents.style.display = "none";
    }
    for (let butt of buttons) {
        butt.className = butt.className.replace(" active", "");
    }
    document.getElementById(idName).style.display = "block";
    evt.currentTarget.className += " active";
}

hamburger.addEventListener('click', () => {
    if (headerContainer.style.display === "none") {
        return headerContainer.style.display = "block"
    }
    return headerContainer.style.display = "none"
})

window.onscroll = () => { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        headerContainer.style.top = "-600px";
    } else {
        headerContainer.style.top = "0px";
    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        formEmail.style.right = "-100%";
    } else {
        formEmail.style.right = "5%";
    }
}
