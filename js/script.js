
const btnOpen = document.querySelector('.btn-open');
const Menu = document.querySelector('.lista-menu');

// QUANDO MUDAR O TAMANHO DA TELA, O MENU VAI SUMIR
function mudouTamanho() {
    if (window.innerWidth <= 768) {
        btnOpen.classList.remove('ativado');
        Menu.classList.remove('ativado');
    }
}

//FUNÇÃO DO BOTÃO ABRIR E FECHAR MENU
function abrirMenu(event) {

    if (event.type === "touchstart") event.preventDefault();

    btnOpen.classList.toggle('ativado');

    Menu.classList.toggle('ativado');

    const ativado = btnOpen.classList.contains('ativado');

    event.currentTarget.setAttribute('aria-expanded', ativado);

    if (ativado) {
        event.currentTarget.setAttribute('aria-label', 'Botão fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Botão abrir menu');
    }

}

btnOpen.addEventListener('click', abrirMenu);
btnOpen.addEventListener('touchstart', abrirMenu);