function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado');

  if (!peso || !altura || altura <= 0) {
    resultado.textContent = "Por favor, insira valores válidos.";
    resultado.className = "mt-6 text-center text-lg font-medium text-red-500";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";
  let corClasse = "text-gray-800";

  // Classificação detalhada com base na OMS
  if (imc < 18.5) {
    classificacao = "Abaixo do peso ⚠️";
    corClasse = "text-yellow-500";
  } else if (imc < 25) {
    classificacao = "Peso normal 👏";
    corClasse = "text-green-600";
  } else if (imc < 30) {
    classificacao = "Sobrepeso ⚠️";
    corClasse = "text-yellow-600";
  } else if (imc < 35) {
    classificacao = "Obesidade Grau I ❗";
    corClasse = "text-red-500";
  } else if (imc < 40) {
    classificacao = "Obesidade Grau II ❗";
    corClasse = "text-red-600";
  } else {
    classificacao = "Obesidade Grau III (mórbida) ❗";
    corClasse = "text-red-700";
  }

  resultado.className = `mt-6 text-center text-lg font-medium ${corClasse}`;
  resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${classificacao})`;

  salvarHistorico(imc, classificacao);
}

function salvarHistorico(imc, classificacao) {
  const historico = JSON.parse(localStorage.getItem('historicoIMC')) || [];
  const data = new Date().toLocaleString('pt-BR');

  historico.unshift({
    data,
    imc: imc.toFixed(2),
    classificacao
  });

  // Limita a 5 últimos registros
  if (historico.length > 5) historico.pop();

  localStorage.setItem('historicoIMC', JSON.stringify(historico));
  exibirHistorico();
}

function exibirHistorico() {
  const lista = document.getElementById('lista-historico');
  const container = document.getElementById('historico');
  const historico = JSON.parse(localStorage.getItem('historicoIMC')) || [];

  if (historico.length === 0) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  lista.innerHTML = '';

  historico.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.data} — IMC: ${item.imc} (${item.classificacao})`;
    lista.appendChild(li);
  });
}

// Suporte à tecla Enter
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calcularIMC();
  }
});

// Exibe o histórico ao carregar a página
document.addEventListener("DOMContentLoaded", exibirHistorico);