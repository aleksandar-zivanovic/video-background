/* show/hide side-menu */
let main = document.querySelector('.main');
let hamburgerIcon = document.querySelector('.hamburger-icon');
let sideMenu = document.querySelector('.side-menu');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    main.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

/* side-menu changing background-color on mouseover/mouseout */
let singleMenuItem = document.querySelectorAll('.single-item');

for (let x = 0; x < singleMenuItem.length; x++) {
    singleMenuItem[x].addEventListener('mouseover', () => {
        sideMenu.style.backgroundColor = "rgba(125, 229, 229, 0.2)";
        sideMenu.style.transition = "0.5s";
    });
}

for (let x = 0; x < singleMenuItem.length; x++) {
    singleMenuItem[x].addEventListener('mouseout', () => {
        sideMenu.style.backgroundColor = "white";
        sideMenu.style.transition = "0.5s";
    });
}

/* removes active class on window resize */
window.addEventListener('resize', removeActiveOnResize);
function removeActiveOnResize() {
    if (window.innerWidth <= 768) {
        let activeClassElements = document.querySelectorAll(".active");
        activeClassElements.forEach((element) => {
            element.classList.remove("active");
        });
    }
}