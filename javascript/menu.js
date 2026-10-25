// ============================
// menu.js — menu ☰ do celular 
// ============================

const botaoMenu = document.getElementById("botao-menu");
const menuNav = document.getElementById("menu-nav");

// Só liga o menu se as duas peças existirem na página
if (botaoMenu && menuNav) {
  function fecharMenu() {
    menuNav.classList.remove("menu__nav--aberto");
    botaoMenu.textContent = "☰";
    botaoMenu.setAttribute("aria-expanded", "false");
  }

  // Clique no botão: abre se estava fechado, fecha se estava aberto
  botaoMenu.addEventListener("click", function () {
    menuNav.classList.toggle("menu__nav--aberto");

    const aberto = menuNav.classList.contains("menu__nav--aberto");

    if (aberto) {
      botaoMenu.textContent = "✕";
      botaoMenu.setAttribute("aria-expanded", "true");
    } else {
      botaoMenu.textContent = "☰";
      botaoMenu.setAttribute("aria-expanded", "false");
    }
  });

  // Clique num link do menu: fecha (por exemplo, depois de "Contatos")
  const links = menuNav.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", fecharMenu);
  });
}