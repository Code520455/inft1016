
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');
const rightnav = document.querySelector('.rightnav');

burger.addEventListener("click", () => {
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');

    console.log(rightnav.classList);
    console.log(navlist.classList);
    console.log(navbar.classList);
});
