import { viewProducts, searchProduct } from "./components/domManipulation.js"

// variaveis globais
const inputButton = document.getElementById("inputButton")
const listProduct = document.getElementById("listaProdutos")

// events
inputButton.addEventListener("click", () => {
    const input = document.getElementById("search").value
    searchProduct(input)
})

viewProducts(listProduct)
