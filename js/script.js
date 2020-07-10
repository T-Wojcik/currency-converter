{
    const calculateResult = (amount, currency1, currency2) => {

        switch (currency1) {
            case "PLN":
                switch (currency2) {
                    case "EUR":
                        return amount / 4.3990;
                    case "USD":
                        return amount / 3.8922;
                    case "GBP":
                        return amount / 4.8997;
                    case "PLN":
                        return amount * 1;
                };
                break;
            case "Euro":
                switch (currency2) {
                    case "EUR":
                        return amount * 1;
                    case "USD":
                        return amount * 1.13;
                    case "GBP":
                        return amount * 0.90;
                    case "PLN":
                        return amount * 4.39;
                };
                break;
            case "USD":
                switch (currency2) {
                    case "EUR":
                        return amount * 0.89;
                    case "USD":
                        return amount * 1;
                    case "GBP":
                        return amount * 0.80;
                    case "PLN":
                        return amount * 3.89;
                };
                break;
            case "GBP":
                switch (currency2) {
                    case "EUR":
                        return amount * 1.11;
                    case "USD":
                        return amount * 1.26;
                    case "GBP":
                        return amount * 1;
                    case "PLN":
                        return amount * 4.89;
                };
                break;
        };
    };

    const updateResultText = (amount, currency1, currency2, result) => {

        const resultElement = document.querySelector(".js-result");

        resultElement.innerHTML = `${amount.toFixed(2)} <strong>${currency1}</strong> = ${result.toFixed(2)} <strong>${currency2}</strong>`;

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement1 = document.querySelector(".js-currency-1");
        const currencyElement2 = document.querySelector(".js-currency-2");

        const amount = +amountElement.value;
        const currency1 = currencyElement1.value;
        const currency2 = currencyElement2.value;

        const result = calculateResult(amount, currency1, currency2);
        updateResultText(amount, currency1, currency2, result);
    };

    const init = () => {

        const formElement = document.querySelector(".form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
};