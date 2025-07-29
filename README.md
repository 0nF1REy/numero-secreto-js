# Jogo do Número Secreto

Um jogo simples e interativo desenvolvido em JavaScript onde o jogador precisa adivinhar um número secreto entre 1 e 100. Este repositório contém duas versões do jogo, cada uma com implementações e interfaces diferentes.

## 📋 Descrição

O **Jogo do Número Secreto** é uma aplicação web que desafia o usuário a descobrir um número aleatório gerado pelo computador. O jogo fornece dicas após cada tentativa, informando se o número secreto é maior ou menor que o palpite do jogador.

### 🎯 Versões Disponíveis

**📁 01-numero-secreto** - Versão com Prompt/Alert

- Interface simples usando `prompt()` e `alert()`
- Página de vitória estática com robô e troféu
- Lógica linear sem reinicialização

**📁 02-numero-secreto** - Versão Web Interativa

- Interface web moderna com campos de entrada
- Interação dinâmica na mesma página
- Sistema de reinicialização de jogo
- Lista de números já sorteados para evitar repetições
- Design responsivo com media queries

## 🎯 Funcionalidades

### Versão 01 (Prompt/Alert)

- **Geração aleatória**: Número secreto gerado automaticamente entre 1 e 100
- **Sistema de dicas**: Informa se o número é maior ou menor que a tentativa
- **Contador de tentativas**: Acompanha quantas tentativas foram necessárias
- **Interface visual**: Tela de vitória com elementos visuais atrativos
- **Tratamento de plurais**: Exibe "tentativa" ou "tentativas" corretamente

### Versão 02 (Web Interativa)

- **Interface web moderna**: Campos de entrada e botões interativos
- **Sistema de reinicialização**: Botão "Novo jogo" para recomeçar
- **Lista de controle**: Evita repetição de números já sorteados
- **Design responsivo**: Adaptável para diferentes tamanhos de tela
- **Feedback visual**: Mensagens dinâmicas na mesma página
- **Estados de botões**: Habilitação/desabilitação conforme o contexto

## 🚀 Como Jogar

### Versão 01 (01-numero-secreto)

1. Abra o arquivo `01-numero-secreto/index.html` em seu navegador
2. Uma mensagem de boas-vindas será exibida via alert
3. Digite um número entre 1 e 100 quando solicitado no prompt
4. Receba dicas se o número secreto é maior ou menor via alert
5. Continue tentando até acertar o número
6. Veja a página de vitória com o número de tentativas!

### Versão 02 (02-numero-secreto)

1. Abra o arquivo `02-numero-secreto/index.html` em seu navegador
2. Digite um número entre 1 e 100 no campo de entrada
3. Clique no botão "Chutar" para fazer sua tentativa
4. Receba dicas na tela se o número é maior ou menor
5. Quando acertar, use o botão "Novo jogo" para jogar novamente

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e layout responsivo
- **JavaScript**: Lógica do jogo e interatividade

## 📁 Estrutura do Projeto

```
numero-secreto-js/
├── README.md              # Documentação do projeto
├── 01-numero-secreto/     # Versão com prompt/alert
│   ├── index.html         # Página de vitória estática
│   ├── scripts/
│   │   └── app.js         # Lógica com prompt/alert
│   ├── styles/
│   │   └── style.css      # Estilos da página de vitória
│   └── images/            # Recursos visuais
│       ├── robot.png      # Imagem do robô mergulhador
│       ├── trophy.png     # Ícone de troféu
│       ├── code.png       # Imagem de fundo (código)
│       ├── Ruido.png      # Textura de fundo
│       └── bg.png         # Imagem de fundo adicional
└── 02-numero-secreto/     # Versão web interativa
    ├── index.html         # Página principal do jogo
    ├── scripts/
    │   └── app.js         # Lógica interativa completa
    ├── styles/
    │   └── style.css      # Estilos responsivos
    └── images/            # Recursos visuais
        ├── ia.png         # Imagem de pessoa/IA
        ├── code.png       # Imagem de fundo (código)
        ├── Ruido.png      # Textura de fundo
        └── bg.png         # Imagem de fundo adicional
```

## 🎨 Design e Interface

### Características Visuais Compartilhadas

- **Cores**: Paleta azul com gradiente (#1354A5 → #041832 → #01080E)
- **Fontes**:
  - Chakra Petch (títulos)
  - Inter (texto geral)
- **Layout**: Container centralizado com bordas arredondadas

### Diferenças Entre Versões

#### Versão 01 (01-numero-secreto)

- **Elementos**: Robô mergulhador e troféu para vitória
- **Interface**: Página estática de celebração
- **Dimensões**: Container fixo (1200x600px)

#### Versão 02 (02-numero-secreto)

- **Elementos**: Imagem de pessoa/IA interativa
- **Interface**: Campos de entrada, botões dinâmicos
- **Dimensões**: Container responsivo (80% da tela)
- **Responsividade**: Media queries para telas menores
- **Estados visuais**: Botões habilitados/desabilitados

## 🔧 Instalação e Execução

1. **Clone ou baixe o projeto**

   ```bash
   git clone https://github.com/0nF1REy/numero-secreto-js.git
   ```

2. **Navegue até a pasta do projeto**

   ```bash
   cd numero-secreto-js
   ```

3. **Escolha a versão desejada e abra o arquivo HTML**

   **Para a versão com prompt/alert:**

   - Abra `01-numero-secreto/index.html` em seu navegador

   **Para a versão web interativa:**

   - Abra `02-numero-secreto/index.html` em seu navegador

   **Ou use um servidor local:**

   - Live Server extension no VS Code
   - Python: `python -m http.server`
   - Node.js: `npx serve`

## 🎮 Lógica do Jogo

### Versão 01 - Implementação Simples

#### Fluxo Principal

1. **Inicialização**: Gera número aleatório entre 1-100
2. **Loop do Jogo**:
   - Solicita palpite via `prompt()`
   - Compara com número secreto
   - Fornece dica via `alert()` (maior/menor)
   - Incrementa contador de tentativas
3. **Vitória**: Exibe alert com número de tentativas e redireciona para página de celebração

#### Algoritmo

```javascript
// Geração do número secreto
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

// Loop até acertar
while (tentativa != numeroSecreto) {
  tentativa = Number(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
  if (numeroSecreto > tentativa) {
    alert(`O número secreto é maior que ${tentativa}`);
  } else {
    alert(`O número secreto é menor que ${tentativa}`);
  }
  tentativas++;
}
```

### Versão 02 - Implementação Avançada

#### Fluxo Principal

1. **Inicialização**: Interface web com funções de controle
2. **Sistema de Tentativas**:
   - Entrada via campo HTML
   - Validação e feedback visual
   - Controle de estado dos botões
3. **Reinicialização**: Sistema completo de novo jogo
4. **Controle de Repetições**: Lista de números já sorteados

#### Algoritmo Avançado

```javascript
// Geração com controle de repetição
function gerarNumeroAleatorio() {
  let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

  if (listaDeNumerosSorteados.length == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
    return gerarNumeroAleatorio(); // Recursão
  } else {
    listaDeNumerosSorteados.push(NumeroEscolhido);
    return NumeroEscolhido;
  }
}
```

## 🌟 Recursos Adicionais

### Versão 01

- **Console Log**: Número secreto visível no console para debugging
- **Tratamento de Plurais**: Exibe "tentativa" ou "tentativas" corretamente
- **Interface de Vitória**: Página HTML estilizada para celebrar a vitória

### Versão 02

- **Controle de Estado**: Gerenciamento dinâmico da interface
- **Sistema de Reinicialização**: Funcionalidade completa de novo jogo
- **Prevenção de Repetições**: Lista que evita números já sorteados
- **Interface Responsiva**: Adaptação automática para diferentes dispositivos
- **Feedback Visual**: Mensagens dinâmicas e controle de botões
- **Funções Modulares**: Código organizado em funções reutilizáveis

## 🔄 Evolução do Projeto

Este repositório demonstra a evolução de um projeto simples para uma implementação mais robusta:

1. **01-numero-secreto**: Abordagem inicial com prompt/alert - ideal para aprender conceitos básicos
2. **02-numero-secreto**: Versão moderna com interface web - demonstra boas práticas de desenvolvimento

Ambas as versões mantêm a mesma essência do jogo, mas oferecem experiências diferentes para o usuário.

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
