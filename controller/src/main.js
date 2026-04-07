import serach from "./components/functionsComander"

// variaveis globais
const input = document.getElementById("search")
const inputButton = document.getElementById("inputButton")

// events
inputButton.addEventListener("click", serach(input.value))

