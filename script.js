//projeto convest 
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("footer")
const hascharactersRegex = /\D+/g
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
    amount.value = amount.value.replace(hascharactersRegex, "")
    
})

form.onsubmit = (evento) => {
    event.preventDefault()
    switch (currency.value) {
    case "USD":
        convertcurrency(amount.value, USD, "US$")
            break
    case "EUR":
            convertcurrency(amount.value,EUR, "€")
            break
    case "GBP":
            convertcurrency(amount.value, GBP, "£")
        break
        
    }
} 

function convertcurrency(amount, price, symbol) {
    try {
        footer.classList.add("show-result")
        description.textContent = `${symbol} 1 = ${formatcurrencyBRL(price)}`
        let total = amount * price + "a"
        console.log (IsNaN(total))
        if (isNaN(total)) {
            return alert = ("Por favor, insira um valor válido para converter")
        }
    }   catch (error) {

    }
}

function formatcurrencyBRL(value){
    return number(value).tolocaleString("pt-BR"), {
        style: "currency",
        currency: "BRL"
    }
}
