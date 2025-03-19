
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para sortear.');
        return;
    }
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const shuffled = amigos.sort(() => 0.5 - Math.random());
    shuffled.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} es el amigo secreto de ${shuffled[(index + 1) % shuffled.length]}`;
        resultado.appendChild(li);
    });
}
