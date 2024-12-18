function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);

  // Получаем курс обмена из API
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
      const rate = data.rates.RUB; // Получаем курс обмена из данных API

      if (isNaN(amount)) {
        document.getElementById("result").innerText = "Пожалуйста, введите правильные значения.";
        return;
      }
      const result = (amount / rate).toFixed(2);
      document.getElementById("result").innerText = `${amount} RUB = ${result.toFixed(2)} USD`;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById("result").innerText = "Ошибка при получении курса обмена. Пожалуйста, попробуйте позже.";
    });
}
