function calcular() {
  const resultado = document.getElementById("resultado");

  const valorTotal = 1234.56;
  const pesoTotal = 678;

  const valorFormatado = valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  resultado.innerHTML = `
    <p>Peso total: ${pesoTotal} kg</p>
    <p>Valor total: ${valorFormatado}</p>
  `;
}
