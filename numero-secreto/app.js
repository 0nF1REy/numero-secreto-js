alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 5;
let tentativa;
let tentativas = 1;
let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";

console.log(numeroSecreto);

while (tentativa != numeroSecreto) {
  tentativa = prompt("Escolha um número entre 1 e 10");

  if (tentativa == numeroSecreto) {
    break;
  } else {
    if (numeroSecreto > tentativa) {
      alert(`O número secreto é maior que ${tentativa}`);
    } else {
      alert(`O número secreto é menor que ${tentativa}`);
    }
    tentativas++;
  }
}

alert(
  `Você acertou! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativas}. Parabéns!`
);
