const funcoes = "./components/functionsComander.js"
import { viewProducts } from "./components/domManipulation.js"

// variaveis globais
const inputButton = document.getElementById("inputButton")
const listProduct = document.getElementById("listaProdutos")

// events
inputButton.addEventListener("click", () => {
    const input = document.getElementById("search").value
    funcoes.search(input)
})

viewProducts(listProduct)
