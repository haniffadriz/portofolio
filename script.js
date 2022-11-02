const menu = document.querySelector('.menu-toggle')
const slide = document.querySelector('.wrapper ul')
const backdrop = document.querySelector('.backdrop')

menu.addEventListener("click", () => {
    slide.classList.toggle('slide')
})