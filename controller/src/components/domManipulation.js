
let data = {
    produto: [{
            nome: "foneDeOuvido",
            preco: 20,
            descricao: "",
            quantidade: 29,
            img: "./../../../assets/img/fonesDeOuvidos.webp"
        },{
            nome: "microfoneDeMesa",
            preco: 259.99,
            descricao: "",
            quantidade: 78
        },{
            nome: "caixaDeSom",
            preco: 80,
            descricao: "",
            quantidade: 45
        },{
            nome: "powerBank",
            preco: 70,
            descricao: "",
            quantidade: 114
        },{
            nome: "centralMultimidia",
            preco: 495.58,
            descricao: "",
            quantidade: 63
        },{
            nome: "microondas",
            preco: 386,
            descricao: "",
            quantidade: 8
        },{
            nome: "ventilador",
            preco: 150,
            descricao: "" ,
            quantidade: 7
        },{
            nome: "tecladoMecanico",
            preco: 170,
            descricao: "",
            quantidade: 46
        },{
            nome: "mouse",
            preco: 10,
            descricao: "",
            quantidade: 178
        },{
            nome: "monitor",
            preco: 600,
            descricao: "",
            quantidade: 985
        },{
            nome: "alexa",
            preco: 80,
            descricao: "",
            quantidade: 78
        },{
            nome: "impressoraALazer",
            preco: 2080,
            descricao: "",
            quantidade: 18
        }
    ]
}

export function winErrorSearch(){
    console.log("Error")
}

export function viewProducts(tag){
    data["produto"].forEach(element => {
        console.log(element)
        console.log("olá")
    });
}