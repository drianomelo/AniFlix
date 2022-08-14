const inputs = document.querySelectorAll('.principal__input');

const verificaFoco = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('ativo');
}

const verificaSemFoco = ({ target }) => {
    if(target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('ativo');
    }
}

inputs.forEach((input) => input.addEventListener('focus', verificaFoco));
inputs.forEach((input) => input.addEventListener('focusout', verificaSemFoco));


