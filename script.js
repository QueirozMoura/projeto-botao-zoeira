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

const soundboard = document.getElementById("soundboard");
const player = document.getElementById("player");

audios.forEach((audio, i) => {
  const item = document.createElement("div");
  item.className = "sound-item";

  const img = document.createElement("img");
  img.src = "imagens/botao.png";
  img.alt = audio.legenda;
  img.className = "img-botao";

  const p = document.createElement("p");
  p.className = "legenda";
  p.textContent = audio.legenda;

  item.appendChild(img);
  item.appendChild(p);
  soundboard.appendChild(item);

  item.addEventListener("click", () => {
    const isReplay = player.src.endsWith(audio.caminho) && !player.paused;
    player.pause();
    player.src = audio.caminho;
    player.currentTime = 0;
    player.play();

    item.classList.add("playing");
    player.onended = () => item.classList.remove("playing");
  });
});
