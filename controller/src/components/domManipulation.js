
let data = {
    produto: [{
            nome: "Fone de ouvido",
            preco: 20.00,
            descricao: "",
            quantidade: 29,
            img: "./../../../assets/img/fonesDeOuvidos.webp"
        },{
            nome: "Microfone de mesa",
            preco: 259.99,
            descricao: "",
            quantidade: 78,
            img: "./../../../assets/img/microfone.webp"
        },{
            nome: "Caixa De Som",
            preco: 80.00,
            descricao: "",
            quantidade: 45,
            img: "./../../../assets/img/baixados.webp"
        },{
            nome: "PowerBank",
            preco: 70.00,
            descricao: "",
            quantidade: 114,
            img: "./../../../assets/img/powerBank.webp"
        },{
            nome: "Central Multimidia",
            preco: 495.58,
            descricao: "",
            quantidade: 63,
            img: "./../../../assets/img/centralMultimidia.webp"
        },{
            nome: "Microondas",
            preco: 386.00,
            descricao: "",
            quantidade: 8,
            img: "./../../../assets/img/microondas.webp"
        },{
            nome: "Ventilador",
            preco: 150.00,
            descricao: "" ,
            quantidade: 7,
            img: "./../../../assets/img/ventilador.webp"
        },{
            nome: "Teclado Mecanico",
            preco: 170.00,
            descricao: "",
            quantidade: 46,
            img: "./../../../assets/img/tecladoMecanico.webp"
        },{
            nome: "Mouse",
            preco: 10.00,
            descricao: "",
            quantidade: 178,
            img: "./../../../assets/img/mouse.webp"
        },{
            nome: "Monitor",
            preco: 600.00,
            descricao: "",
            quantidade: 985,
            img: "./../../../assets/img/monitor.webp"
        },{
            nome: "Alexa",
            preco: 80.00,
            descricao: "",
            quantidade: 78,
            img: "./../../../assets/img/alexa.webp"
        },{
            nome: "Impressora a Lazer",
            preco: 2080.00,
            descricao: "",
            quantidade: 18,
            img: "./../../../assets/img/impressora.webp"
        }
    ]
}

export function winErrorSearch(){
    console.log("Error")
}

export function viewProducts(tag){
    data["produto"].forEach(element => {
        const li = document.createElement("li")
        const divProduct = document.createElement("div")
        const imgProduct = document.createElement("img")
        const nameProduct = document.createElement("h4")
        const precoProduct = document.createElement("p")

        nameProduct.innerText = element.nome
        precoProduct.innerText = "R$ " + parseFloat(element.preco)
        imgProduct.src = element.img

        divProduct.classList.add("produto")
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