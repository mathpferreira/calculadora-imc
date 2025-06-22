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

      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        corClasse = "text-red-500";
      } else if (imc < 24.9) {
        classificacao = "Peso ideal 👏";
        corClasse = "text-green-600";
      } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
        corClasse = "text-red-500";
      } else {
        classificacao = "Obesidade";
        corClasse = "text-red-500";
      }

      resultado.className = `mt-6 text-center text-lg font-medium ${corClasse}`;
      resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${classificacao})`;
    }

    document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calcularIMC();
  }
});