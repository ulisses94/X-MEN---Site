/*
O que precisamos fazer? Quando passar o mouse encima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado.

Objetivo 1 - Quando passar o mouse encima do personagem na listagem, devemos seleciona-lo.
    Passo 1 - Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse encima de um deles.
    Passo 2 - Adicionar a classe selecionada no personagem que o usuário passar o cursos do mouse.
    Passo 3 - Verificar se já existia um personagem selecionado, se sim, devemos remover a seleção dele.

Objetivo 2 - Quando passar o mouuse encima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.
    Passo 1 - Pegar o elemento do personagem grande pra adicionar as informações nele.
    Passo 2 - Alterar a imagem do personagem grande.
    Passo 3 - Alterar o nome do personagem grande.
    Passo 4 - Alterar a descrição do personagem grande. 
    */

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: "smooth" });
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add("selecionado");

        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagemSelecionado(personagem);

})

});

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

