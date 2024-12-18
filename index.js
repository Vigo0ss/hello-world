function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (isNaN(amount) || isNaN(rate)) {
        document.getElementById("result").innerText = "Пожалуйста, введите правильные значения.";
        return;
    }

    const result = (amount / rate).toFixed(2);
    document.getElementById("result").innerText = `${amount} RUB = ${result} USD`;
}
