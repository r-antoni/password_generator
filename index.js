const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomNum = Math.floor(Math.random() * characters.length)
let password1 = document.querySelector(".password1")
let password2 = document.querySelector(".password2")

document.querySelector("#generate").addEventListener("click", getRandomPass)

function getRandomPass(){
    randomPassword1()

}

function randomPassword1(){
    for(let i = 0; i < 13; i++){
        password1.textContent += characters[randomNum]
    }
}

function randomPassword2(){
    for(let i = 0; i < 13; i++){
        password2.textContent += characters[randomNum]
    }
}