//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo() {
    let amigoSecreto = document.querySelector('input').value;
    if (amigoSecreto == ''){
        alert('Por favor, insira um nome.');
    } else if (verificaLista(amigoSecreto) == true) {
        return;
    } else {
        atualizaLista();
    }
    limparCampo();
}

function atualizaLista() {
    let lista = document.querySelector('.name-list');
    lista.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        lista.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}

function limparCampo() {
    amigoSecreto = document.querySelector('input').value = '';
}

function verificaLista(amigoSecreto) {
    let lista = document.querySelector('.name-list');
    if (lista.innerHTML.includes(amigoSecreto)){
        alert('O nome já está na lista!');
        return;
    } else {
        listaAmigos.push(amigoSecreto);
    }
}

function sortearAmigo(listaAmigos, lista) {
    let resultadoSorteio = document.querySelector('.result-list');
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    lista.innerHTML = '';
    resultadoSorteio.innerHTML = `${amigoSorteado}`;
}