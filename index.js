const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const length = 16;
const password1 = document.querySelector(".password1")
const password2 = document.querySelector(".password2")
let isGenerated = false




document.querySelector("#generate").addEventListener("click", getRandomPass)

function getRandomPass(){
    if(isGenerated === false){
        randomPassword1()
        randomPassword2()
    } else {
        alert("Refresh browser to get new password")
    }
    isGenerated = true
}

function randomChar(){
    let randomNum = Math.floor(Math.random() * characters.length)
    return characters[randomNum]
}

function randomPassword1(){
    for(let i = 0; i < length; i++){
        password1.textContent += randomChar()
    }
}

function randomPassword2(){
    for(let i = 0; i < length; i++){
        password2.textContent += randomChar()
    }
}