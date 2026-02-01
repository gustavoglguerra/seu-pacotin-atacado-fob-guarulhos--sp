// ===== FUNÇÕES DE FORMATAÇÃO =====
function formatarReal(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function formatarKg(peso) {
  return `${peso.toLocaleString("pt-BR")} kg`;
}

// ===== FUNÇÃO PRINCIPAL =====
function calcular() {
  // Seleciona TODAS as linhas da calculadora (tbody)
  const linhas = document.querySelectorAll(".linha-calculadora");

  linhas.forEach(linha => {
    const quantidadeInput = linha.querySelector(".quantidade");
    const colValorMilheiro = linha.querySelector(".valor-milheiro");
    const colValorTotal = linha.querySelector(".valor-total");
    const colPesoTotal = linha.querySelector(".peso-total");

    const quantidade = Number(quantidadeInput.value || 0);

    // Dados vindos da tabela de cima (fonte de dados)
    const precoMilheiro = Number(linha.dataset.preco);
    const pesoMilheiro = Number(linha.dataset.peso);

    const valorTotal = quantidade * precoMilheiro;
    const pesoTotal = quantidade * pesoMilheiro;

    // ===== AQUI ESTÃO AS MUDANÇAS QUE VOCÊ PEDIU =====
    colValorMilheiro.textContent = formatarReal(precoMilheiro);
    colValorTotal.textContent = formatarReal(valorTotal);
    colPesoTotal.textContent = formatarKg(pesoTotal);
  });
}
