let listaDeNumerosSorteados = [];
let numeroInicial = 1;
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do Número Secreto");
  exibirTextoNaTela(
    "p",
    `Escolha um número entre ${numeroInicial} e ${numeroLimite}`
  );
}

function inicializarJogo() {
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  document.querySelector(".container__botao").removeAttribute("disabled");
  document.querySelector(".container__input").removeAttribute("disabled");
  limparCampo();
}

inicializarJogo();

function verificarTentativa() {
  let tentativa = document.querySelector("input").value;

  if (tentativa == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.querySelector(".container__botao").setAttribute("disabled", true);
    document.querySelector(".container__input").setAttribute("disabled", true);
  } else {
    if (tentativa > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor!");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior!");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(NumeroEscolhido);
    return NumeroEscolhido;
  }
}

function limparCampo() {
  tentativa = document.querySelector("input");
  tentativa.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  inicializarJogo();
}
