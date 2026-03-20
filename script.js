const audios = [
    { caminho: "audios/classic_hurt.mp3", legenda: "Classic Hurt" }, 
    { caminho: "audios/galinha-gritando-no-telhado.mp3", legenda: "Galinha Gritando No Telhado" },
    { caminho: "audios/nom-nom-nom_gPJiWn4.mp3", legenda: "Nom Nom Nom" },
    { caminho: "audios/pou-estourado_zIWCpMy.mp3", legenda: "Pou Estourado" },
    { caminho: "audios/rojao-super-estourado.mp3", legenda: "Rojao Super Estourado" },
    { caminho: "audios/yes1.mp3", legenda: "Yes" },
    { caminho: "audios/minecraft-sheep2.mp3", legenda: "Minecraft Sheep" },
    { caminho: "audios/hello-moto-estourado.mp3", legenda: "Hello Moto Estourado" },
    { caminho: "audios/brutal-acabou-pro-beta-globo.mp3", legenda: "Brutal Acabou Pro Beta Globo" },
];

const botoes = document.querySelectorAll(".img-botao");
const legendas = document.querySelectorAll(".legenda");


for(let i = 0; i < legendas.length; i++) {
    legendas[i].textContent = audios[i].legenda
    botoes[i].setAttribute("data-item", i);
}

let audioTag = document.querySelector("audio")

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
      let som =audios[botao.getAttribute("data-item")]
      audioTag.src = som.caminho;
      audioTag.addEventListener("ended", () => {
          
      })
      audioTag.play();
    });
});