//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];
const lista = document.querySelector('.name-list');
const input = document.querySelector('input');

function adicionarAmigo() {
    const amigoSecreto = input.value;

    if (verificaLista(amigoSecreto) == true) {
        return;
    } else {
        atualizaLista();
        input.value = '';
    }
}

function atualizaLista() {
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        lista.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}

function verificaLista(amigoSecreto) {
    if (amigoSecreto == '') {
        alert('Por favor, insira um nome.');
        return true;
    } else if (listaAmigos.includes(amigoSecreto)){
        alert('O nome já está na lista!');
        return true;
    } else {
        listaAmigos.push(amigoSecreto);
    }
}

const resultadoSorteio = document.querySelector('.result-list');

function sortearAmigo() {
    const numeroSorteado = Math.floor(Math.random() * listaAmigos.length);

    lista.innerHTML = '';
    resultadoSorteio.innerHTML = `<li>Amigo Sorteado: ${listaAmigos[numeroSorteado]}</li>`;
}
