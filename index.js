const openNav = document.querySelector('.bx-menu');
const closeNav = document.querySelector('.bx-x');
const NavUl = document.querySelector('ul')

openNav.addEventListener('click', function(){
    NavUl.classList.add('navActive')
})

closeNav.addEventListener('click', function(){
    NavUl.classList.remove('navActive')
})