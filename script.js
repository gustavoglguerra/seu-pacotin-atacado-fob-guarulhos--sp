alert("JS NOVO CARREGOU");

function calcular() {
  const produto = document.getElementById("produto");
  const quantidade = Number(document.getElementById("quantidade").value);

  const precoMilheiro = Number(produto.selectedOptions[0].dataset.preco);
  const pesoMilheiro = Number(produto.selectedOptions[0].dataset.peso);

  const pesoTotal = quantidade * pesoMilheiro;
  const valorTotal = quantidade * precoMilheiro;

  const resultado = document.getElementById("resultado");

  // Formatação brasileira
const valorFormatado = valorTotal.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});


  if (pesoTotal < 500) {
    resultado.innerHTML = `
      ❌ Pedido mínimo: <strong>500 kg</strong><br>
      Peso atual: <strong>${pesoTotal} kg</strong>
    `;
    return;
  }

  const mensagem = encodeURIComponent(
    `Pedido realizado:
Produto: ${produto.options[produto.selectedIndex].text}
Quantidade: ${quantidade} milheiros
Peso total: ${pesoTotal} kg
Valor total: ${valorFormatado}`
  );

  resultado.innerHTML = `
    resultado.innerHTML = `
  <p><strong>Peso total:</strong> ${pesoTotal} kg</p>
  <p><strong>Valor total:</strong> ${valorFormatado}</p>
`;

    <a href="https://wa.me/5531990728646?text=${mensagem}" target="_blank">
      Enviar pedido pelo WhatsApp
    </a>
  `;
}
