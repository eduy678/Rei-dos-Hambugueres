// ==========================================================
// carrinho.js — carrega em todas as páginas (depois do produtos.js)
// ==========================================================

// ---------- 0. Configuração ----------
// Número que recebe os pedidos: só dígitos, com 55 (Brasil) + DDD + número
const numeroWhatsApp = "5587991271679";

// ---------- 1. O carrinho: começa lendo o que foi salvo ----------
let carrinho = [];

const salvo = localStorage.getItem("carrinho");
if (salvo) {
  carrinho = JSON.parse(salvo);
}

// ---------- 2. Elementos da página (podem não existir em todas) ----------
const botoes = document.querySelectorAll(".produto button[data-id]");
const secaoItens = document.getElementById("carrinho-itens");
const secaoVazio = document.getElementById("carrinho-vazio");
const lista = document.getElementById("lista-carrinho");
const totalElemento = document.getElementById("total-carrinho");
const botaoWhatsapp = document.getElementById("botao-whatsapp");

// ---------- 3. Funções (cada uma fecha com a sua própria chave) ----------

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function atualizarContador() {
  let total = 0;
  for (const item of carrinho) {
    total = total + item.quantidade;
  }

  const contador = document.getElementById("contador-carrinho");
  if (contador) {
    contador.textContent = total;
    contador.hidden = total === 0;
  }
}

function montarMensagem() {
  let mensagem = "Olá! Gostaria de fazer o pedido:\n\n";
  let total = 0;

  for (const item of carrinho) {
    const produto = produtos.find(function (p) {
      return p.id === item.id;
    });

    if (!produto) {
      continue;
    }

    const subtotal = produto.preco * item.quantidade;
    total = total + subtotal;
    mensagem = mensagem + item.quantidade + "x " + produto.nome + " - R$" + subtotal + "\n";
  }

  mensagem = mensagem + "\nTotal: R$" + total;
  return mensagem;
}

function desenharCarrinho() {
  // Fora da página do carrinho, essas peças não existem: não há nada a desenhar
  if (!secaoItens || !secaoVazio || !lista || !totalElemento) {
    return;
  }

  if (carrinho.length === 0) {
    secaoItens.hidden = true;
    secaoVazio.hidden = false;
  } else {
    secaoItens.hidden = false;
    secaoVazio.hidden = true;
  }

  lista.innerHTML = "";
  let total = 0;

  for (const item of carrinho) {
    const produto = produtos.find(function (p) {
      return p.id === item.id;
    });

    if (!produto) {
      continue;
    }

    total = total + produto.preco * item.quantidade;

    lista.innerHTML += `
    <li class="item">
        <img class="item__foto" src="${produto.imagem}" alt="${produto.nome}" width="80" height="80">
        <p class="item__nome">${produto.nome}</p>
        <p class="item__preco">R$${produto.preco}</p>
        <div class="item__controles">
            <button class="item__botao item__menos" type="button" data-id="${item.id}" aria-label="Diminuir quantidade">−</button>
            <span class="item__quantidade">${item.quantidade}</span>
            <button class="item__botao item__mais" type="button" data-id="${item.id}" aria-label="Aumentar quantidade">+</button>
            <button class="item__remover" type="button" data-id="${item.id}" aria-label="Remover item">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
            </button>
        </div>
    </li>
    `;
  }

  totalElemento.textContent = "R$" + total;
}

// Depois de qualquer mudança: salvar e atualizar tudo na tela
function atualizarTela() {
  salvarCarrinho();
  atualizarContador();
  desenharCarrinho();
}

function adicionarAoCarrinho(id) {
  const existente = carrinho.find(function (item) {
    return item.id === id;
  });

  if (existente) {
    existente.quantidade = existente.quantidade + 1;
  } else {
    carrinho.push({ id: id, quantidade: 1 });
  }

  atualizarTela();
}

function removerItem(id) {
  carrinho = carrinho.filter(function (item) {
    return item.id !== id;
  });
  atualizarTela();
}

function alterarQuantidade(id, mudanca) {
  const item = carrinho.find(function (i) {
    return i.id === id;
  });

  if (!item) {
    return;
  }

  item.quantidade = item.quantidade + mudanca;

  if (item.quantidade <= 0) {
    removerItem(id);
  } else {
    atualizarTela();
  }
}

// ---------- 4. Ouvir os cliques ----------

// Botões "Adicionar" do cardápio
botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    adicionarAoCarrinho(botao.dataset.id);
  });
});

// Botões −, + e lixeira do carrinho (a lista inteira escuta os cliques)
if (lista) {
  lista.addEventListener("click", function (evento) {
    const botao = evento.target.closest("button");
    if (!botao) {
      return;
    }

    const id = botao.dataset.id;

    if (botao.classList.contains("item__mais")) {
      alterarQuantidade(id, 1);
    } else if (botao.classList.contains("item__menos")) {
      alterarQuantidade(id, -1);
    } else if (botao.classList.contains("item__remover")) {
      removerItem(id);
    }
  });
}

// Botão "Finalizar no WhatsApp": monta o link com o carrinho do momento do clique
if (botaoWhatsapp) {
  botaoWhatsapp.addEventListener("click", function () {
    const textoCodificado = encodeURIComponent(montarMensagem());
    botaoWhatsapp.href = "https://wa.me/" + numeroWhatsApp + "?text=" + textoCodificado;
  });
}

// ---------- 5. Ao abrir a página ----------
atualizarContador();
desenharCarrinho();