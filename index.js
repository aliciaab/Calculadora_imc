function calcularIMC() {
    // Obtém o valor do peso e altura inseridos pelo usuário
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    // Verifica se o peso e a altura são números válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return; // Interrompe a execução da função se os valores forem inválidos
    }
  
    // Calcula o IMC (Índice de Massa Corporal)
    const imc = peso / (altura * altura);
    
    let classificacao = "";
    let cor = "";
  
    // Classifica o IMC de acordo com as faixas estabelecidas pela OMS
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
      cor = "abaixo-peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
      cor = "normal";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
      cor = "sobrepeso";
    } else {
      classificacao = "Obesidade";
      cor = "obesidade";
    }
  
    // Exibe o resultado na página
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)}: ${classificacao}`;
    resultadoDiv.className = `result ${cor}`; // Aplica a classe de cor de acordo com a classificação
    resultadoDiv.style.display = "block"; // Torna o resultado visível
  }
  