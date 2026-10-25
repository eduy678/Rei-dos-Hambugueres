# 🍔 Rei dos Hambúrgueres

Site de uma lanchonete fictícia, feito para o meu portfólio. O cliente navega pelo cardápio, monta o pedido num carrinho e finaliza pelo WhatsApp, com a mensagem do pedido já escrita.

**Ver o site:** https://SEU-USUARIO.github.io/rei-dos-hamburgueres/

<!-- Troque SEU-USUARIO pelo seu usuário do GitHub, depois de ligar o GitHub Pages -->

## O que o site faz

- **Página inicial** com destaque do produto mais vendido, atalhos para as categorias, localização com mapa e horário de funcionamento.

- **Cardápio** com carrosséis por categoria (Mais vendidos, Bebidas, Hambúrgueres, Salgados e Bolos). As setas rolam um card por clique, e no celular também dá para arrastar com o dedo.

- **Carrinho** que junta itens repetidos, permite aumentar, diminuir e remover itens, e calcula o total.

- **Carrinho salvo no navegador** (`localStorage`): ele continua o mesmo ao atualizar a página ou navegar entre as páginas, e o número no ícone do menu mostra quantos itens há nele.

- **Finalizar no WhatsApp:** monta a mensagem com os itens, as quantidades e o total, e abre a conversa pelo link `wa.me`.

- **Layout responsivo**, com menu ☰ no celular e faixa de selos que vira letreiro em movimento nas telas pequenas.

## Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Flexbox, Grid, `scroll-snap`, `@media`, animações com `@keyframes`)
- JavaScript puro, sem frameworks nem bibliotecas
- Fonte [Open Sans](https://fonts.google.com/specimen/Open+Sans), pelo Google Fonts

## Como rodar

Não precisa instalar nada.

1. Baixe ou clone o repositório.
2. Abra o `index.html` no navegador.

Para ver as alterações ao salvar, use a extensão **Live Server** do VS Code.

## Estrutura do projeto

```
rei-dos-hamburgueres/
├── css/
│   ├── cardapio.css    estilos do cardápio e dos carrosséis
│   ├── carrinho.css    estilos do carrinho
│   └── style.css       estilos compartilhados e página inicial 
├── imagens/
│   ├── bebidas/
│   ├── bolos/
│   ├── hamburgures/
│   └── salgados/
├── imagens-geral/    ícones e imagem do hero
├── javascript/
│   ├── carrinho.js   lógica do carrinho e do botão do WhatsApp
│   ├── carrossel.js  setas dos carrosséis      
│   ├── menu.js       menu ☰ do celular 
│   └── produtos.js   lista de produtos (id, nome, preço e imagem)           
├── cardapio.html
├── carrinho.html
└── index.html


## Como o carrinho funciona

1. Cada botão "Adicionar" do cardápio tem um `data-id`, igual ao `id` de um produto em `produtos.js`.
2. Ao clicar, o `carrinho.js` guarda no carrinho só o `id` e a quantidade, e salva no `localStorage`.
3. Na página do carrinho, ele busca nome, preço e imagem de cada `id` no `produtos.js` e desenha as linhas. Assim, o preço fica num lugar só.
4. O botão do WhatsApp monta o texto do pedido, codifica com `encodeURIComponent` e abre o link `https://wa.me/NUMERO?text=...`.

## Como adicionar um produto

1. Coloque a foto na pasta da categoria, em `imagens/`.
2. No `cardapio.html`, copie um card existente da categoria e troque nome, preço, imagem e o `data-id` do botão.
3. No `javascript/produtos.js`, crie a ficha com o mesmo `id`, o `nome`, o `preco` (só o número) e o caminho da `imagem`.

## Observações

- Projeto de estudo e portfólio. A lanchonete, o cardápio e os preços são fictícios.
- As imagens e os nomes de marcas que aparecem no site servem apenas para ilustrar o layout e pertencem aos seus respectivos donos.
- O número que recebe os pedidos fica na constante `numeroWhatsApp`, no início do `carrinho.js`.

## Autor

Feito por **Luiz Eduardo**.

- GitHub: [@eduy678](https://github.com/eduy678)# Rei-dos-Hambugueres
