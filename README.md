# Jogo do Número Secreto

Um jogo simples e interativo desenvolvido em JavaScript onde o jogador precisa adivinhar um número secreto entre 1 e 100.

## 📋 Descrição

O **Jogo do Número Secreto** é uma aplicação web que desafia o usuário a descobrir um número aleatório gerado pelo computador. O jogo fornece dicas após cada tentativa, informando se o número secreto é maior ou menor que o palpite do jogador.

## 🎯 Funcionalidades

- **Geração aleatória**: Número secreto gerado automaticamente entre 1 e 100
- **Sistema de dicas**: Informa se o número é maior ou menor que a tentativa
- **Contador de tentativas**: Acompanha quantas tentativas foram necessárias
- **Interface visual**: Tela de vitória com elementos visuais atrativos
- **Responsivo**: Design adaptável para diferentes tamanhos de tela

## 🚀 Como Jogar

1. Abra o arquivo `index.html` em seu navegador
2. Uma mensagem de boas-vindas será exibida
3. Digite um número entre 1 e 100 quando solicitado
4. Receba dicas se o número secreto é maior ou menor
5. Continue tentando até acertar o número
6. Veja quantas tentativas foram necessárias para vencer!

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e layout responsivo
- **JavaScript**: Lógica do jogo e interatividade

## 📁 Estrutura do Projeto

```
numero-secreto/
├── index.html          # Página principal do jogo
├── app.js             # Lógica do jogo em JavaScript
├── style.css          # Estilos e layout
└── img/               # Recursos visuais
    ├── robot.png      # Imagem do robô
    ├── trophy.png     # Ícone de troféu
    ├── code.png       # Imagem de fundo (código)
    ├── Ruido.png      # Textura de fundo
    └── bg.png         # Imagem de fundo adicional
```

## 🎨 Design e Interface

### Características Visuais
- **Cores**: Paleta azul com gradiente (#1354A5 → #041832 → #01080E)
- **Fontes**: 
  - Chakra Petch (títulos)
  - Inter (texto geral)
- **Layout**: Container centralizado com bordas arredondadas
- **Elementos**: Robô mergulhador e troféu para vitória

## 🔧 Instalação e Execução

1. **Clone ou baixe o projeto**
    ```bash
    git clone https://github.com/0nF1REy/numero-secreto-js.git
    ```

2. **Navegue até a pasta do projeto**
    ```bash
    cd numero-secreto-js/numero-secreto
    ```

3. **Abra o arquivo HTML**
   - Clique duas vezes em `index.html`, ou
   - Abra com um servidor local (Live Server, etc.)

## 🎮 Lógica do Jogo

### Fluxo Principal
1. **Inicialização**: Gera número aleatório entre 1-100
2. **Loop do Jogo**: 
   - Solicita palpite do usuário
   - Compara com número secreto
   - Fornece dica (maior/menor)
   - Incrementa contador de tentativas
3. **Vitória**: Exibe mensagem com número de tentativas

### Algoritmo
```javascript
// Geração do número secreto
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Loop até acertar
while (tentativa != numeroSecreto) {
    // Lógica de comparação e dicas
    if (numeroSecreto > tentativa) {
        alert("O número secreto é maior");
    } else {
        alert("O número secreto é menor");
    }
}
```

## 🌟 Recursos Adicionais

- **Console Log**: Número secreto visível no console para debugging
- **Tratamento de Plurais**: Exibe "tentativa" ou "tentativas" corretamente
- **Interface de Vitória**: Página HTML estilizada para celebrar a vitória

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar ideias

## 📄 Licença

Este projeto é de código aberto e está disponível para uso educacional e pessoal.

---

**Divirta-se jogando! 🎉**
