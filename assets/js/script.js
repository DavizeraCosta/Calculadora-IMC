document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("imcForm");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const weight = parseFloat(weightInput.value);
        const heightCm = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            resultDiv.textContent = "⚠️ Insira valores válidos!";
            resultDiv.style.color = "#F50057";
            return;
        }

        const height = heightCm / 100;
        const bmi = weight / (height * height);

        let classification = "";
        let color = "";
        let emoji = ""; 

        if (bmi < 18.5) {
            classification = "Magreza";
            color = "#FFAB00";
            emoji = "🔽";
        } else if (bmi < 24.9) {
            classification = "Peso Normal";
            color = "#00C853";
            emoji = "✅";
        } else if (bmi < 29.9) {
            classification = "Sobrepeso";
            color = "#FFD600";
            emoji = "⚠️";
        } else if (bmi < 34.9) {
            classification = "Obesidade Grau I";
            color = "#FF6D00";
            emoji = "❌";
        } else if (bmi < 39.9) {
            classification = "Obesidade Grau II";
            color = "#DD2C00";
            emoji = "❌";
        } else {
            classification = "Obesidade Grau III";
            color = "#B71C1C";
            emoji = "⛔";
        }

        resultDiv.style.opacity = "0";
        resultDiv.innerHTML = `IMC: <strong>${bmi.toFixed(2)}</strong> - ${emoji} <span style="color: ${color};">${classification}</span>`;

        setTimeout(() => {
            resultDiv.style.transition = "opacity 0.5s ease-in-out";
            resultDiv.style.opacity = "1";
        }, 100);
    });

    const inputs = [weightInput, heightInput];

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.boxShadow = "0px 0px 10px rgba(255, 64, 129, 0.6)";
        });

        input.addEventListener("blur", () => {
            input.style.boxShadow = "none";
        });
    });
});
