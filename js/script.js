const navBarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = (e) => {
    navBarNav.classList.toggle("active");
    e.preventDefault();
}

const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navBarNav.contains(e.target)) {
        navBarNav.classList.remove('active');
    }
})

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
    cursorDot.style.top = e.clientY + "px";
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.display = "block";
    cursorOutline.style.display = "block";
    // cursorOutline.style.top = e.pageY + "px";
    // cursorOutline.style.left = e.pageX + "px";

    cursorOutline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
    }, { duration: 1000, fill: "forwards" })
})

document.addEventListener("mouseout", () => {
    cursorDot.style.display = "none";
    cursorOutline.style.display = "none";
})