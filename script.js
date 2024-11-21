var body = document.querySelector("body")
var btnDarkMode = document.querySelector("#darkmode")

function darkmode(){
   
body.classList.toggle("darkmode")
if(btnDarkMode.textContent == "Ativar"){
    btnDarkMode.textContent = "Desativar"
}else{
    btnDarkMode.textContent = "Ativar"
}
}

btnDarkMode.addEventListener("click" , darkmode)




