// ==========================================================
// carrossel.js — setas dos carrosséis do cardápio (um card por clique)
// ==========================================================

const carrosseis = document.querySelectorAll(".carrossel");

carrosseis.forEach(function (carrossel) {
  // Cada carrossel procura as suas próprias peças, para uma seta
  // nunca mexer no trilho de outra seção
  const trilho = carrossel.querySelector(".carrossel__trilho");
  const anterior = carrossel.querySelector(".carrossel__seta--anterior");
  const proximo = carrossel.querySelector(".carrossel__seta--proximo");

  if (!trilho || !anterior || !proximo) {
    return;
  }

  // Quanto rolar por clique: a largura de um card + o espaço entre os cards
  function larguraDoPasso() {
    const card = trilho.querySelector(".produto");
    const espaco = parseInt(getComputedStyle(trilho).columnGap) || 0;
    return card.offsetWidth + espaco;
  }

  proximo.addEventListener("click", function () {
    trilho.scrollBy({ left: larguraDoPasso(), behavior: "smooth" });
  });

  anterior.addEventListener("click", function () {
    trilho.scrollBy({ left: -larguraDoPasso(), behavior: "smooth" });
  });
});