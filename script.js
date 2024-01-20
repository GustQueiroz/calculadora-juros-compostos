function calcular() {
  let valorInicial = parseFloat(
    document.getElementById("valorInicialInput").value
  );

  let valorMensal = parseFloat(
    document.getElementById("valorMensalInput").value
  );

  let taxaDeJurosAnual = parseFloat(
    document.getElementById("taxaDeJurosAnualInput").value
  );

  let periodoEmMeses = parseFloat(
    document.getElementById("periodoEmMesesInput").value
  );

  if (
    isNaN(valorInicial) ||
    isNaN(valorMensal) ||
    isNaN(taxaDeJurosAnual) ||
    isNaN(periodoEmMeses)
  ) {
    alert("Por favor, insira valores numéricos válidos.");
    return;
  }

  let investimento = valorInicial;
  let taxaDeJurosMensal = taxaDeJurosAnual / 12;
  let valorInvestido = investimento + valorMensal * periodoEmMeses;

  let jurosCompostos = 0;
  let jurosCompostosTotal = 0;

  for (let i = 0; i < periodoEmMeses; i++) {
    jurosCompostos = (investimento + taxaDeJurosMensal) / 100;
    jurosCompostosTotal += jurosCompostos;
    investimento += jurosCompostos + valorMensal;
  }

  let valorFinal = valorInvestido + jurosCompostosTotal;

  alert("seu valor final é " + valorFinal.toFixed(2));
}
