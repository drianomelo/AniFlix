const botao = document.querySelector('.principal__button');
const modal = document.querySelector('.principal__modal');
const botaoF = document.querySelector('.principal__botao');

botao.addEventListener('click', () => {

    modal.classList.add('ativo-modal');

})

botaoF.addEventListener('click', () => {

    modal.classList.remove('ativo-modal');

})