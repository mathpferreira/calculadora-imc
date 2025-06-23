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
    classificacao = "Abaixo do peso";
    corClasse = "text-yellow-500";
  } else if (imc < 25) {
    classificacao = "Peso normal 👏";
    corClasse = "text-green-600";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
    corClasse = "text-yellow-600";
  } else if (imc < 35) {
    classificacao = "Obesidade Grau I";
    corClasse = "text-red-500";
  } else if (imc < 40) {
    classificacao = "Obesidade Grau II";
    corClasse = "text-red-600";
  } else {
    classificacao = "Obesidade Grau III (mórbida)";
    corClasse = "text-red-700";
  }

  resultado.className = `mt-6 text-center text-lg font-medium ${corClasse}`;
  resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${classificacao})`;
}

// Suporte à tecla Enter
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calcularIMC();
  }
});
