//nav hide

window.addEventListener("scroll", setScrollvar);
window.addEventListener("resize", setScrollvar);

setScrollvar();

function setScrollvar() {
    const htmlElement = document.documentElement;
    if (htmlElement.scrollTop > 125) {
        document.getElementById("pages").classList.add("hide");
    }
    if (htmlElement.scrollTop < htmlElement.style.getPropertyValue("--scroll")) {
        document.getElementById("pages").classList.remove("hide");
    }
    htmlElement.style.setProperty("--scroll", htmlElement.scrollTop);
}

//scroll animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe (el));