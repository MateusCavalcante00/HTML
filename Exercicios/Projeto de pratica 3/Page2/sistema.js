const container_cadastro$info = document.querySelector('.box-direita');
const arrayClientes = [];

function cadastro() {

    const h2 = document.createElement('h2');
    h2.id = 'h2#Sistema';
    h2.textContent = 'Cadastro de clientes'

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.classList.add = 'inputCadastro';
    inputNome.id = 'cliente_nome'

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.classList.add = 'inputCadastro';
    inputEmail.id = 'cliente_email';

    const salvar = document.createElement('button');
    salvar.textContent = 'Salvar';
    salvar.id = 'btn-salvar';

    container_cadastro$info.appendChild(h2);
    container_cadastro$info.appendChild(inputNome);
    container_cadastro$info.appendChild(inputEmail);
    container_cadastro$info.appendChild(salvar);

    let obj = {};

    salvar.addEventListener('click', () => {

        const empty = document.createElement('p');
        empty.id = 'empty';
        container_cadastro$info.appendChild(empty);

        const nome = document.querySelector('#cliente_nome').value;
        const email = document.querySelector('#cliente_email').value;

        if (nome === "" || email === "") {
            empty.textContent = 'Preencha os campos para cadastrar';
        };

        if (nome && email) {
            obj.nome = nome;
            obj.email = email;
            arrayClientes.push(obj);
            alert('Cadastro concluido!')
        };
    })
};

function mostrarCadastrados(){
    const lista = document.createElement('ol');
    lista.id = 'lista';
    container_cadastro$info.appendChild(lista);

    arrayClientes.forEach(prop => {
        const item = document.createElement('li');
        item.textContent = `Nome: ${prop.nome} Email: ${prop.email}`;
        lista.appendChild(item);
    })
   
    
}