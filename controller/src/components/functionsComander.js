let users = {
    user: [
        {
            name: "Jaime",
            password: 12345678,
            email: "jaime@gmail.com",
            cards: {
                produtos: []
            }
        }
    ]
}



export function userConfig(){

}


function userLogin(name, password){
    users.user.forEach(element => {
        if(name == element.name && password == element.password){
            const bodyPage = document.getElementById("corpo")
            const divNotification = document.createElement("div")
            const tNotification = document.createElement("h2")

            divNotification.classList("LoginEfetuado")
            tNotification.innerText = "Login efetuado com sucesso!"

            bodyPage.appendChild(divNotification)
            divNotification.appendChild(tNotification)

            setTimeout(() =>{}, 3000)
            window.location.href = "../../../index.html"
            loginUser = true
        }
    });
}