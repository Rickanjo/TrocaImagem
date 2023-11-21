document.addEventListener("DOMContentLoaded", function () {

    const botaoTrocar = document.getElementById("button");
    const imagemExibida = document.getElementById("imagemExibida");


    const urlsImagens = ["imgs/img 1.jpg", "imgs/img 2.jpg", "imgs/img 3.jpg", "imgs/img 4.jpg"];
    let indiceAtual = 0;


    botaoTrocar.addEventListener("click", function () {
        indiceAtual = (indiceAtual + 1) % urlsImagens.length;
        imagemExibida.src = urlsImagens[indiceAtual];
    });
});