const navBarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
    navBarNav.classList.toggle("active");
}

const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navBarNav.contains(e.target)) {
        navBarNav.classList.remove('active');
    }
})