const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const length = document.querySelector("#length");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
let generatedPass1 = ""
let generatedPass2 = ""
let lengthVal = 16;
let isGenerated = false;


document.querySelector("#generate").addEventListener("click", getRandomPass)

function getRandomPass(){
        generatedPass1 = ""
        generatedPass2 = ""
        randomPassword1()
        randomPassword2()
}

function randomChar(){
    let randomNum = Math.floor(Math.random() * characters.length)
    return characters[randomNum]
}

function randomPassword1(){
    for(let i = 1; i <= lengthVal; i++){
        generatedPass1 += randomChar()
        password1.textContent = generatedPass1
    } 
}

function randomPassword2(){
    for(let i = 1; i <= lengthVal; i++){
        generatedPass2 += randomChar()
        password2.textContent = generatedPass2
    }  
}

const stepper = (btn) =>{
    let id = btn.getAttribute("id");
    let min = length.getAttribute("min");
    let max = length.getAttribute("max");
    let step = length.getAttribute("step");
    let val = length.getAttribute("value");
    let calculateStep = (id == "increment") ? (step * 1) : (step * -1);
    let newValue = parseInt(val) + calculateStep;

    if (newValue >= min && newValue <= max){
        length.setAttribute("value", newValue);
    }
    lengthVal = newValue
}
