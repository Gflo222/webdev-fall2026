function convert() {
    const usd = document.getElementById("usd").value;
    const exchange = document.getElementById("exchange").value;
    let result = document.getElementById("result");
    console.log(result)
    console.log(exchange)
    if (exchange == "EUR") {
        result.textContent = usd * .91 + " Euro's";
    } else if (exchange == "GBP") {
        result.textContent = usd * .76 + " Pounds";
    } else if (exchange == "CAD") {
        result.textContent = usd * 1.43 + " Canadian Dollars";
    } else if (exchange == "CHF") {
        result.textContent = usd * .84 + " Francs";
    } else if (exchange == "JPY") {
        result.textContent = usd * 158.47 + " Yen";
    } else {
        result.textContent = "Sorry, that isn't an option. Choose either, EUR (Euro), GBP (British pound), CAD (Canadian dollar), CHF (Swiss franc), or JPY (Japanese yen).";
    }
}