# 🗓️ Calculadora de Datas

Uma extensão nativa, leve e moderna para o **Mozilla Firefox** desenvolvida para calcular com precisão a diferença exata em **anos, meses e dias** entre duas datas escolhidas.

O projeto foi construído utilizando as tecnologias web mais recentes, destacando-se o uso da nova API nativa de manipulação de datas do JavaScript, o **Temporal API** (substituindo bibliotecas externas pesadas como o Luxon).

---

## ✨ Funcionalidades

- **Interface Direta (Pop-up):** Abre instantaneamente ao clicar no ícone da extensão na barra do navegador.
- **Cálculo Preciso:** Retorna a diferença exata dividida em anos, meses e dias sem problemas com fusos horários ou frações de horas.
- **Performance Nativa:** Utiliza o `Temporal.PlainDate` nativo do motor do navegador, eliminando dependências externas (`node_modules`) e reduzindo o tamanho da extensão para poucos kilobytes.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estruturação da interface do pop-up.
- **CSS3** – Estilização e design responsivo da calculadora.
- **JavaScript (ES2026+)** – Lógica de programação usando a nova especificação **`Temporal`**.
- **WebExtensions API (Manifest V3)** – O padrão moderno e seguro para desenvolvimento de extensões do ecossistema Mozilla.

---

## 📂 Estrutura do Projeto

```text
├── manifest.json       # Configurações e permissões da extensão (Manifest V3)
├── index.html          # Interface visual do pop-up da calculadora
├── index.js            # Lógica de cálculo utilizando a API Temporal
├── styles.css          # Estilização visual da extensão
└── calculadora.png     # Ícone de exibição na barra do navegador (48x48)
```

---

## 📜 Licença

Este projeto está sob a licença MIT.

Desenvolvido com 💻 e JS Moderno.
# calculadora-de-datas
