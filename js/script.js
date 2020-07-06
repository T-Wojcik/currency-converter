let currencyElement1 = document.querySelector(".js-currency-1");
let amountElement = document.querySelector(".js-amount");
let currencyElement2 = document.querySelector(".js-currency-2");
let resultElement = document.querySelector(".js-result");
let submitElement = document.querySelector(".js-submit");
let formElement = document.querySelector(".form")

console.log(formElement);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency1 = currencyElement1.value;
    let currency2 = currencyElement2.value;
    let result;

    console.log(amount, currency1, currency2);

    switch (currency1) {
        case "PLN":
            switch (currency2) {
                case "Euro":
                    result = amount / 4.3990;
                    resultElement.value = result.toFixed(2);
                    break;
                case "USD":
                    result = amount / 3.8922;
                    resultElement.value = result.toFixed(2);
                    break;
                case "GBP":
                    result = amount / 4.8997;
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = amount * 1;
                    resultElement.value = result.toFixed(2);
                    break;
            }
            break;
        case "Euro":
            switch (currency2) {
                case "Euro":
                    result = amount * 1;
                    resultElement.value = result.toFixed(2);
                    break;
                case "USD":
                    result = amount * 1.13;
                    resultElement.value = result.toFixed(2);
                    break;
                case "GBP":
                    result = amount * 0.90;
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = amount * 4.39;
                    resultElement.value = result.toFixed(2);
                    break;
            }
            break;
        case "USD":
            switch (currency2) {
                case "Euro":
                    result = amount * 0.89;
                    resultElement.value = result.toFixed(2);
                    break;
                case "USD":
                    result = amount * 1;
                    resultElement.value = result.toFixed(2);
                    break;
                case "GBP":
                    result = amount * 0.80;
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = amount * 3.89;
                    resultElement.value = result.toFixed(2);
                    break;
            }
            break;
        case "GBP":
            switch (currency2) {
                case "Euro":
                    result = amount * 1.11;
                    resultElement.value = result.toFixed(2);
                    break;
                case "USD":
                    result = amount * 1.26;
                    resultElement.value = result.toFixed(2);
                    break;
                case "GBP":
                    result = amount * 1;
                    resultElement.value = result.toFixed(2);
                    break;
                case "PLN":
                    result = amount * 4.89;
                    resultElement.value = result.toFixed(2);
                    break;
            }
            break;
    }
});

