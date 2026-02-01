const produtos = [
  { tamanho: "12x18 + 3ABA", preco: 27.90, peso: 1.7 },
  { tamanho: "15x25 + 3ABA", preco: 46.90, peso: 3.0 },
  { tamanho: "19x25 + 3ABA", preco: 59.90, peso: 3.4 },
  { tamanho: "20x30 + 3ABA", preco: 74.90, peso: 4.5 },
  { tamanho: "22x40 + 3ABA", preco: 105.90, peso: 6.8 },
  { tamanho: "25x35 + 3ABA", preco: 101.90, peso: 7.2 },
  { tamanho: "26x36 + 3ABA", preco: 105.90, peso: 7.4 },
  { tamanho: "25x45 + 3ABA", preco: 133.90, peso: 8.2 },
  { tamanho: "30x40 + 3ABA", preco: 143.90, peso: 8.8 },
  { tamanho: "32x40 + 3ABA", preco: 152.90, peso: 10.6 },
  { tamanho: "35x50 + 3ABA", preco: 207.90, peso: 11.8 },
  { tamanho: "40x50 + 3ABA", preco: 237.90, peso: 14.0 },
  { tamanho: "40x60 + 3ABA", preco: 283.90, peso: 16.9 },
  { tamanho: "50x60 + 3ABA", preco: 354.90, peso: 21.0 }
];

const tabelaDados = document.getElementById("tabelaDados");
const tabelaCalc = document.getElementById("tabelaCalc");

produtos.forEach((p, i) => {
  tabelaDados.innerHTML += `
    <tr>
      <td>${p.tamanho}</td>
      <td>${p.preco.toFixed(2)}</td>
      <td>${p.peso}</td>
    </tr>
  `;

  tabelaCalc.innerHTML += `
    <tr>
      <td>${p.tamanho}</td>
      <td><input type="number" min="0" value="0" id="qtd${i}" oninput="calcular()"></td>
      <td>${p.preco.toFixed(2)}</td>
      <td id="valor${i}">0</td>
      <td id="peso${i}">0</td>
    </tr>
  `;
});

function calcular() {
  let pesoTotal = 0;
  let valorTotal = 0;
  let resumo = "";

  produtos.forEach((p, i) => {
    const qtd = Number(document.getElementById(`qtd${i}`).value);
    const valor = qtd * p.preco;
    const peso = qtd * p.peso;

    document.getElementById(`valor${i}`).innerText = valor.toFixed(2);
    document.getElementById(`peso${i}`).innerText = peso.toFixed(2);

    pesoTotal += peso;
    valorTotal += valor;

    if (qtd > 0) {
      resumo += `${p.tamanho} - ${qtd} milheiros\n`;
    }
  });

  document.getElementById("pesoFinal").innerText = pesoTotal.toFixed(2);
  document.getElementById("valorFinal").innerText = valorTotal.toFixed(2);

  const msg = document.getElementById("mensagem");
  const btn = document.getElementById("btnWhatsapp");

  if (pesoTotal >= 500) {
    msg.innerText = "Pedido mínimo atingido ✔";
    btn.disabled = false;

    const texto = encodeURIComponent(
      `Pedido:\n${resumo}\nPeso Total: ${pesoTotal} kg\nValor Total: R$ ${valorTotal}`
    );

    btn.onclick = () => {
      window.open(
        `https://wa.me/5531990708646?text=${texto}`,
        "_blank"
      );
    };
  } else {
    msg.innerText = "Pedido mínimo: 500 kg";
    btn.disabled = true;
  }
}
