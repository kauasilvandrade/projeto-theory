const btnOpen = document.querySelector('.btn-open');
const Menu = document.querySelector('.lista-menu');

btnOpen.addEventListener('click', () => {
    btnOpen.classList.toggle('ativado');
    Menu.classList.toggle('ativado');
})