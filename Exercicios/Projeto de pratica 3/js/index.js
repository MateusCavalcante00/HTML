
const sessão = document.querySelector('.sessãoAcesso');
const invalido = document.createElement('p');
invalido.id = 'campoVazio';
sessão.appendChild(invalido);

function verificarAcesso() {

    const inputProp = document.querySelector('#nome');
    const inputSenha = document.querySelector('#senha');

    if (inputProp.value === "" || inputSenha.value === "") {

        invalido.textContent = 'Você precisa preencher os campos para ter acesso.';
        return;
    };

    let senha = inputSenha.value;

    const acessKeys = {
        key1: 'F9NeeTSJw6',
        key2: 'J&56b5hMXz'
    };
    
    if (senha && inputProp) {
        if (senha !== acessKeys.key1 && senha !== acessKeys.key2) {
            invalido.textContent = "";
            invalido.textContent = "Senha incorreta."
        }else{
           window.location.href = 'Page2/sistema.html'
        }
    };
};