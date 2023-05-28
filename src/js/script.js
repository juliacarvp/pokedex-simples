const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imgBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const  modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if(modoEscuroEstaAtivo){
        body.classList.remove("modo-escuro");
        imgBotaoTrocaDeTema.setAttribute("src", "./src/img/sun.png");
    } else{
        body.classList.add("modo-escuro");
        imgBotaoTrocaDeTema.setAttribute("src", "./src/img/moon.png");
    }
});


