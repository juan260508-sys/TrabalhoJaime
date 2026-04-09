import { viewProducts, searchProduct} from "./components/domManipulation.js"
import { userConfig } from "./components/functionsComander.js"

// variaveis globais
const inputButton = document.getElementById("inputButton")
const listProduct = document.getElementById("listaProdutos")

// events
inputButton.addEventListener("click", () => {
    const input = document.getElementById("search").value
    searchProduct(input)
})

let loginUser = false

if(loginUser == true){
    userConfig()
} else {
    const loginPage = document.getElementById("userPoint")

    loginPage.addEventListener("click", () => {
        window.location.href = "../../veiw/pages/login.html"
    })
}

viewProducts(listProduct)
