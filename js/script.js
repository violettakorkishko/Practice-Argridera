const burgerMenu = document.querySelector('.header_burger'); // дино що вибираэш за класом а не за id
const headerMenu = document.querySelector('.header_menu');

console.log(burgerMenu, headerMenu);

burgerMenu.addEventListener('click', toogleClass);

document.body.classList.add('lock'); // виніс з іфа бо немає сенсу весь час вішати один і той самий клас.... 
function toogleClass () {
    burgerMenu.classList.toggle('active');
  headerMenu.classList.toggle('active');
}