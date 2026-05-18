console.log("Site Haru e a Corja carregado com sucesso!");

let ultimaPosicao = 0;
const topo = document.querySelector(".topo");

window.addEventListener("scroll", () => {
  const posicaoAtual = window.pageYOffset;

  if (posicaoAtual > ultimaPosicao && posicaoAtual > 120) {
    topo.classList.add("topo-escondido");
  } else {
    topo.classList.remove("topo-escondido");
  }

  ultimaPosicao = posicaoAtual;
});