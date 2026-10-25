// ==========================================================
// produtos.js — lista de produtos (carrega ANTES do carrinho.js)
//
// Cada produto tem:
//   id     -> igual ao data-id do botão "Adicionar" no cardapio.html
//   nome   -> texto que aparece no carrinho e na mensagem do WhatsApp
//   preco  -> número, sem aspas e sem "R$"
//   imagem -> caminho a partir da raiz do site (sem "../")
// ==========================================================

const produtos = [
  // ---------- Bebidas ----------
  {
    id: "coca-cola-500ml",
    nome: "Coca Cola 500ml",
    preco: 6,
    imagem: "imagens/bebidas/coca-cola-500ml.png"
  },
  {
    id: "coca-cola-lata",
    nome: "Coca Cola 300ml",
    preco: 4,
    imagem: "imagens/bebidas/coca-cola-lata.png"
  },
  {
    id: "fanta-lata",
    nome: "Fanta 300ml",
    preco: 3,
    imagem: "imagens/bebidas/fanta-lata.png"
  },
  {
    id: "pepsi-black",
    nome: "Pepsi Black",
    preco: 5,
    imagem: "imagens/bebidas/pepsi-black.png"
  },
  {
    id: "agua",
    nome: "Água",
    preco: 2,
    imagem: "imagens/bebidas/agua.png"
  },
  {
    id: "suco-laranja",
    nome: "Suco de Laranja",
    preco: 10,
    imagem: "imagens/bebidas/suco-laranja.png"
  },
  {
    id: "suco-maracuja",
    nome: "Suco de Maracujá",
    preco: 10,
    imagem: "imagens/bebidas/suco-maracuja.png"
  },

  // ---------- Hambúrgueres ----------
  {
    id: "x-bacon",
    nome: "X-Bacon",
    preco: 16,
    imagem: "imagens/hamburgures/x-bacon.png"
  },
  {
    id: "x-tudo",
    nome: "X-Tudo",
    preco: 18,
    imagem: "imagens/hamburgures/x-tudo.png"
  },
  {
    id: "x-burguer",
    nome: "X-Burguer",
    preco: 13,
    imagem: "imagens/hamburgures/x-burguer.png"
  },
  {
    id: "x-egg",
    nome: "X-Egg",
    preco: 13,
    imagem: "imagens/hamburgures/x-egg.png"
  },
  {
    id: "x-salada",
    nome: "X-Salada",
    preco: 13,
    imagem: "imagens/hamburgures/x-salada.png"
  },

  // ---------- Salgados ----------
  {
    id: "coxinha",
    nome: "Coxinha",
    preco: 13,
    imagem: "imagens/salgados/coxinha.png"
  },
  {
    id: "lasanha",
    nome: "Lasanha",
    preco: 12,
    imagem: "imagens/salgados/lasanha.png"
  },
  {
    id: "sanduiche",
    nome: "Sanduíche",
    preco: 10,
    imagem: "imagens/salgados/sanduiche.png"
  },
  {
    id: "torata",
    nome: "Torta de Frango",
    preco: 15,
    imagem: "imagens/salgados/torata-frango.png"
  },
  {
    id: "pastel-frango-catupiry",
    nome: "Pastel de Frango com Catupiry",
    preco: 12,
    imagem: "imagens/salgados/pastel-frango-catupiry.png"
  },
  {
    id: "pastel-queijo",
    nome: "Pastel de Queijo",
    preco: 12,
    imagem: "imagens/salgados/pastel-queijo.png"
  },
  {
    id: "risole",
    nome: "Risole",
    preco: 8,
    imagem: "imagens/salgados/risole.png"
  },

  // ---------- Bolos ----------
  {
    id: "bolo-branco",
    nome: "Bolo Branco",
    preco: 13,
    imagem: "imagens/bolos/bolo-branco.png"
  },
  {
    id: "bolo-bundt",
    nome: "Bolo Bundt",
    preco: 10,
    imagem: "imagens/bolos/bolo-bundt.png"
  },
  {
    id: "bolo-cenoura",
    nome: "Bolo de Cenoura",
    preco: 14,
    imagem: "imagens/bolos/bolo-cenoura.png"
  },
  {
    id: "bolo-chocolate",
    nome: "Bolo de Chocolate",
    preco: 15,
    imagem: "imagens/bolos/bolo-chocolate.png"
  },
  {
    id: "bolo-dourado",
    nome: "Bolo Dourado",
    preco: 15,
    imagem: "imagens/bolos/bolo-dourado.png"
  }
];