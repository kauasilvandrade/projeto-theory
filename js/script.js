const btnOpen = document.querySelector('.btn-open');
const Menu = document.querySelector('.lista-menu');

function mudouTamanho() {
    if (window.innerWidth <= 768) {
        btnOpen.classList.remove('ativado');
        Menu.classList.remove('ativado');
    }
}

btnOpen.addEventListener('click', () => {
    btnOpen.classList.toggle('ativado');
    Menu.classList.toggle('ativado');
})