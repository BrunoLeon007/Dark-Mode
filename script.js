var body = document.querySelector("body")
var btnDarkMode = document.querySelector("#darkmode")

function darkmode(){
   
body.classList.toggle("darkmode")

}

btnDarkMode.addEventListener("click" , darkmode)
