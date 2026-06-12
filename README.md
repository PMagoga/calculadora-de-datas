# 🗓️ Calculadora de Datas

Uma extensão nativa, leve e moderna para o **Mozilla Firefox** desenvolvida para calcular com precisão a diferença exata em **anos, meses e dias** entre duas datas escolhidas.

O projeto foi construído utilizando as tecnologias web mais recentes, destacando-se o uso da nova API nativa de manipulação de datas do JavaScript, o **Temporal API** (substituindo bibliotecas externas pesadas como o Luxon).

---

## ✨ Funcionalidades

- **Interface Direta (Pop-up):** Abre instantaneamente ao clicar no ícone da extensão na barra do navegador.
- **Cálculo Preciso:** Retorna a diferença exata dividida em anos, meses e dias sem problemas com fusos horários ou frações de horas.
- **Performance Nativa:** Utiliza o `Temporal.PlainDate` nativo do motor do navegador, eliminando dependências externas (`node_modules`) e reduzindo o tamanho da extensão para poucos kilobytes.

---

## 🛠️ Requisitos de Ambiente e Sistema

Para construir (dar build) nesta extensão a partir do código-fonte, o ambiente deve atender aos seguintes requisitos:

- **Sistema Operacional:** Linux (Ubuntu/Debian/WSL), macOS ou Windows 10/11.
- **Ambiente de Compilação:** Node.js (versão mínima recomendada: `v20.0.0` ou superior).
- **Gerenciador de Pacotes:** NPM (geralmente instalado junto com o Node.js).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estruturação da interface do pop-up.
- **CSS3** – Estilização e design responsivo da calculadora.
- **JavaScript (ES2026+)** – Lógica de programação usando a nova especificação **`Temporal`**.
- **WebExtensions API (Manifest V3)** – O padrão moderno e seguro para desenvolvimento de extensões do ecossistema Mozilla.

---

## 📂 Estrutura do Projeto

```text
├── src/
│   ├── calculadora.png     # Ícone original da extensão
│   ├── index.html          # Interface visual do pop-up
│   ├── index.js            # Lógica de cálculo utilizando a API Temporal
│   ├── manifest.json       # Configurações do Manifest V3 da extensão
│   └── styles.css          # Estilização visual da extensão
├── package.json            # Definição de scripts e dependências (Vite)
├── vite.config.js          # Script técnico de compilação e automação do build
└── README.md               # Este arquivo com instruções de reprodução
```

---

## 🚀 Instruções de Construção Passo a Passo (Build)

Siga os passos abaixo para gerar uma cópia exata do código de produção da extensão:

### 1. Instalar as Dependências

Abra o terminal na raiz deste projeto (onde o arquivo `package.json` está localizado) e execute o comando abaixo para instalar a ferramenta de build (Vite):

```bash
npm install
```

### 2. Executar o script de Compilação

```bash
npm run build
```

### 3. Resultado da Compilação

Após a execução do script, uma nova pasta chamada dist será criada automaticamente na raiz do projeto.

O script de build também utiliza um gatilho personalizado no vite.config.js que copia automaticamente o arquivo manifest.json e o ícone calculadora.png para dentro da pasta dist/.

O conteúdo gerado dentro da pasta dist/ é a cópia exata do código de produção da extensão pronto para ser zipado e instalado.

## 📜 Licença

Este projeto está sob a licença MIT.

Desenvolvido com 💻 e JS Moderno.
