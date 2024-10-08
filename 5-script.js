const converteButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySection = document.querySelector(".currency-section");


// const dolarToday = 4.96
// const bitcoinToday = 0.02
// const euroToday = 5.33
const libraToday = 6.22



const convertValues = async() => {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor em real
    const currencyValueConverted = document.querySelector(".currency-value");  //outras moedas

const data =  await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
  
const dolar = data.USDBRL.high
const bitcoin = data.BTCBRL.high
const euro = data.EURBRL.high


// console.log(dolar)
// console.log(bitcoin)
// console.log(euro)
   
currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",

}).format(inputCurrencyValue);


if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",

        }).format(inputCurrencyValue / dolar)   
        // Today
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("BTC-Bitcoin", {
            style: "currency",
            currency: "BTC",

        }).format(inputCurrencyValue / bitcoin)
        // Today
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",

        }).format(inputCurrencyValue / euro)
        // Today
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP",

        }).format(inputCurrencyValue / libraToday)
    }


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/estados-unidos.png"
    }


    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin .png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }
    convertValues()
};


currencySelect.addEventListener("change", changeCurrency)
converteButton.addEventListener("click", convertValues)





// const convertValues = inputCurrencyValue / dolarToday