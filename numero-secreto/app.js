alert("Boas vindas ao jogo do número secreto!");

let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let tentativa;
let tentativas = 1;

console.log(numeroSecreto);

while (tentativa != numeroSecreto) {
  tentativa = Number(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));

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

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(
  `Você acertou! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}. Parabéns!`
);
