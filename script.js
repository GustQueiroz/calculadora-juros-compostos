function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function calcular() {
  const valorInicial =
    parseFloat(document.getElementById("valorInicialInput").value) || 0;
  const valorMensal =
    parseFloat(document.getElementById("valorMensalInput").value) || 0;
  const taxaAnual =
    parseFloat(document.getElementById("taxaDeJurosAnualInput").value) || 0;
  const periodoMeses =
    parseInt(document.getElementById("periodoEmMesesInput").value) || 0;

  // Validação dos inputs
  if (
    valorInicial < 0 ||
    valorMensal < 0 ||
    taxaAnual < 0 ||
    periodoMeses <= 0
  ) {
    alert("Por favor, insira valores válidos!");
    return;
  }

  const taxaMensal = taxaAnual / 100 / 12;
  let montante = valorInicial;

  for (let i = 0; i < periodoMeses; i++) {
    montante = (montante + valorMensal) * (1 + taxaMensal);
  }

  const valorInvestidoTotal = valorInicial + valorMensal * periodoMeses;
  const valorJuros = montante - valorInvestidoTotal;

  // Atualiza os valores no modal
  document.getElementById("valorFinal").textContent = formatarMoeda(montante);
  document.getElementById(
    "valorInvestidoTotal"
  ).textContent = `Valor total investido: ${formatarMoeda(
    valorInvestidoTotal
  )}`;
  document.getElementById(
    "valorJuros"
  ).textContent = `Rendimento: ${formatarMoeda(valorJuros)}`;

  // Abre o modal
  abrirModal();
}

function abrirModal() {
  const modal = document.getElementById("modalResultado");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  const modal = document.getElementById("modalResultado");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function novaSimulacao() {
  fecharModal();
  // Limpa os campos
  document.getElementById("valorInicialInput").value = "";
  document.getElementById("valorMensalInput").value = "";
  document.getElementById("taxaDeJurosAnualInput").value = "";
  document.getElementById("periodoEmMesesInput").value = "";
  // Foca no primeiro campo
  document.getElementById("valorInicialInput").focus();
}

// Fecha o modal ao clicar fora dele
document
  .getElementById("modalResultado")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      fecharModal();
    }
  });
