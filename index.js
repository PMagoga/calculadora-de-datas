document.getElementById("btnCalcular").addEventListener("click", () => {
  const dataInicioStr = document.getElementById("dataInicio").value;
  const dataFimStr = document.getElementById("dataFim").value;

  if (!dataInicioStr || !dataFimStr) {
    document.getElementById("resultado").innerText = "Selecione as duas datas.";
    return;
  }

  // 1. Criando objetos PlainDate nativos a partir das strings YYYY-MM-DD
  const inicio = Temporal.PlainDate.from(dataInicioStr);
  const fim = Temporal.PlainDate.from(dataFimStr);

  // 2. Calculando a diferença diretamente pelas propriedades do Temporal.PlainDate, que lida com a lógica de "empréstimo" de dias dos meses anteriores
  const diff = fim.since(inicio, { largestUnit: "year", smallestUnit: "day" });

  // 3. Exibindo os resultados na tela (anos, meses e dias)
  document.getElementById("resultado").innerText =
    `Diferença: ${diff.years} anos, ${diff.months} meses e ${diff.days} dias.`;
});
