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