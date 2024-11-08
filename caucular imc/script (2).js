document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');

    if (isNaN(weight) || isNaN(height)) {
        result.textContent = "Por favor, insira valores válidos para peso e altura.";
        result.style.color = "red";
        return;
    }

    const imc = weight / (height * height);
    result.textContent = `Seu IMC é ${imc.toFixed(2)}`;
    result.style.color = "green";
});
