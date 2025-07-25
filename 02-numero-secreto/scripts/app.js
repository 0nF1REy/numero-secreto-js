let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do Número Secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarTentativa() {
  let tentativa = document.querySelector("input").value;

  if (tentativa == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", "Você descobriu o número secreto!");
  } else {
    if (tentativa > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor!");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior!");
    }
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
