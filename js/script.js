const btnOpen = document.querySelector('.btn-open');
const Menu = document.querySelector('.lista-menu');

// QUANDO MUDAR O TAMANHO DA TELA, O MENU VAI SUMIR
function mudouTamanho() {
    if (window.innerWidth <= 768) {
        btnOpen.classList.remove('ativado');
        Menu.classList.remove('ativado');
    }
}

// BOTÃO ABRIR E FECHAR MENU
btnOpen.addEventListener('click', () => {
    btnOpen.classList.toggle('ativado');
    Menu.classList.toggle('ativado');
})