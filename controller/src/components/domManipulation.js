
let data = {
    produto: [{
        id: 1,
        nome: "Fone de ouvido",
        preco: 20.00,
        descricao: "",
        quantidade: 29,
        img: "./assets/img/fonesDeOuvidos.webp"
    }, {
        id: 2,
        nome: "Microfone de mesa",
        preco: 259.99,
        descricao: "",
        quantidade: 78,
        img: "./assets/img/microfone.webp"
    }, {
        id: 3,
        nome: "Caixa De Som",
        preco: 80.00,
        descricao: "",
        quantidade: 45,
        img: "./assets/img/baixados.webp"
    }, {
        id: 4,
        nome: "PowerBank",
        preco: 70.00,
        descricao: "",
        quantidade: 114,
        img: "./assets/img/powerBank.webp"
    }, {
        id: 5,
        nome: "Central Multimidia",
        preco: 495.58,
        descricao: "",
        quantidade: 63,
        img: "./assets/img/centralMultimidia.webp"
    }, {
        id: 6,
        nome: "Microondas",
        preco: 386.00,
        descricao: "",
        quantidade: 8,
        img: "./assets/img/microondas.webp"
    }, {
        id: 7,
        nome: "Ventilador",
        preco: 150.00,
        descricao: "",
        quantidade: 7,
        img: "./assets/img/ventilador.webp"
    }, {
        id: 8,
        nome: "Teclado Mecanico",
        preco: 170.00,
        descricao: "",
        quantidade: 46,
        img: "./assets/img/tecladoMecanico.webp"
    }, {
        id: 9,
        nome: "Mouse",
        preco: 10.00,
        descricao: "",
        quantidade: 178,
        img: "./assets/img/mouse.webp"
    }, {
        id: 10,
        nome: "Monitor",
        preco: 600.00,
        descricao: "",
        quantidade: 985,
        img: "./assets/img/monitor.webp"
    }, {
        id: 11,
        nome: "Alexa",
        preco: 80.00,
        descricao: "",
        quantidade: 78,
        img: "./assets/img/alexa.webp"
    }, {
        id: 12,
        nome: "Impressora a Lazer",
        preco: 2080.00,
        descricao: "",
        quantidade: 18,
        img: "./assets/img/impressora.webp"
    }
    ]
}

export function winErrorSearch() {
    const mainPage = document.getElementById("main")
    const divNotProduct = document.createElement("div")
    divNotProduct.innerText = "Nenhum produto encontrado."
    divNotProduct.classList.add("error-message")
    mainPage.appendChild(divNotProduct)
}

export function searchProduct(produto) {
    const list = document.getElementById("listaProdutos")
    list.innerHTML = "" // limpar toda a lista para redenrizar os produto pesquisados

    const resultado = data.produto.filter(item => item.nome.toLowerCase().includes(produto.toLowerCase()))

    if (resultado.length === 0) {
        winErrorSearch()
        return
    }

    resultado.forEach(element => {
        const li = document.createElement("li")
        const divProduct = document.createElement("div")
        const imgProduct = document.createElement("img")
        const nameProduct = document.createElement("h4")
        const precoProduct = document.createElement("p")

        nameProduct.innerText = element.nome
        precoProduct.innerText = "R$ " + parseFloat(element.preco)
        imgProduct.src = element.img

        list.appendChild(li)
        li.appendChild(divProduct)
        divProduct.appendChild(imgProduct)
        divProduct.appendChild(nameProduct)
        divProduct.appendChild(precoProduct)
    })
}

export function viewProducts(tag) {
    tag.innerHTML = "" // limpar a lista antes de adicionar produtos
    data["produto"].forEach(element => {
        const li = document.createElement("li")
        const divProduct = document.createElement("div")
        const imgProduct = document.createElement("img")
        const nameProduct = document.createElement("h4")
        const precoProduct = document.createElement("p")

        nameProduct.innerText = element.nome
        precoProduct.innerText = "R$ " + parseFloat(element.preco)
        imgProduct.src = element.img

        divProduct.classList.add("produto", `id-${element.id}`)
        imgProduct.classList.add("produto-img")
        nameProduct.classList.add("produto-name")
        precoProduct.classList.add("produto-preco")

        tag.appendChild(li)
        li.appendChild(divProduct)
        divProduct.appendChild(imgProduct)
        divProduct.appendChild(nameProduct)
        divProduct.appendChild(precoProduct)
    });
}