//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = []
let verificacaoFeita = false;

function exibirAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpa todo o conteúdo da <ul> antes de adicionar os elementos novamente.
   //Se remover essa linha, os elementos antigos continuam na tela e os novos são adicionados por cima, ou seja,sendo duplicados.

    for (let i = 0; i < listaDeAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor insira um nome");
        
   }else {
        listaDeAmigos.push(amigo);
        document.getElementById("amigo").value = "";
        
    }
    exibirAmigos()
}
 

function sortearAmigo(){
    if (!verificacaoFeita){
        if (listaDeAmigos.length < 3) {
            alert("Coloque pelo menos 3 amigos ou mais!");
            return; // cancela se não tiver 3
        }
        verificacaoFeita = true; // marca que já foi checado

    }else if (listaDeAmigos.length === 0){
        alert("A lista de amigos está vazia!");

    } else{
        let indice = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[indice];
        listaDeAmigos.splice(indice, 1);
        document.getElementById("resultado").innerHTML = "Seu amigo sorteado é " + amigoSorteado + "!🎉🤠";
    }
}

function reiniciar(){
    let limpar = document.getElementById("listaAmigos");
    limpar.innerHTML= "";
    document.getElementById("resultado").innerHTML = "";
    listaDeAmigos = [];
    
}

