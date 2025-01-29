document.addEventListener("DOMContentLoaded", () => {
    const inputNome = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    // Função para adicionar um amigo à lista
    window.adicionarAmigo = function () {
        const nome = inputNome.value.trim();
        if (nome !== "") {
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
            inputNome.value = "";
        }
    };

    // Função para sortear amigos secretos
    window.sortearAmigo = function () {
        const amigos = Array.from(listaAmigos.getElementsByTagName("li")).map(li => li.textContent);
        const sorteio = sortearAmigos(amigos);
        exibirResultado(sorteio);
    };

    // Função para realizar o sorteio de amigos secretos
    function sortearAmigos(amigos) {
        let sorteio = [...amigos];
        let resultado = {};

        for (let amigo of amigos) {
            let indiceAleatorio = Math.floor(Math.random() * sorteio.length);
            let amigoSorteado = sorteio[indiceAleatorio];

            // Evita que a pessoa tire a si mesma
            while (amigo === amigoSorteado) {
                indiceAleatorio = Math.floor(Math.random() * sorteio.length);
                amigoSorteado = sorteio[indiceAleatorio];
            }

            resultado[amigo] = amigoSorteado;
            sorteio.splice(indiceAleatorio, 1);
        }

        return resultado;
    }

    // Função para exibir o resultado do sorteio
    function exibirResultado(sorteio) {
        resultado.innerHTML = "";
        for (let amigo in sorteio) {
            const li = document.createElement("li");
            li.textContent = `${amigo} tirou ${sorteio[amigo]}`;
            resultado.appendChild(li);
        }
    }
});
