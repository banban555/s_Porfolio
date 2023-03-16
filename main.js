
'use strict'

// navbar가 투명하다가 scrolling되면 색깔이 입혀지는 동작
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight)
    {
        navbar.classList.add("navbar--dark");
    }
    else
    {
        navbar.classList.remove("navbar--dark");
    }
});

// 클릭하면 해당 class로 넘어가는 동작
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null)
    {
        return;
    }
    scrollIntoView(link);
});


const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener('click', () => {
    scrollIntoView("#contact");
});

// scrolling되면 home의 opacity가 줄어드는 동작
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

// show arrow-up button when scrolling down
const arrowup = document.querySelector("#arrowup")
document.addEventListener('scroll', () => 
{
    if (window.scrollY > homeHeight / 2)
    {
        arrowup.classList.add("visible");
    }
    else
    {
        arrowup.classList.remove("visible");
    }
});

arrowup.addEventListener('click', () => 
{
    scrollIntoView("#home");
});