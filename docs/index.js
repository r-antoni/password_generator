const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const length = document.querySelector("#length");
const passDisplay = document.querySelector("#pass")
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const generateBtn = document.querySelector("#generate");
const copyBtn1 = document.querySelector("#copy1");
const copyBtn2 = document.querySelector("#copy2");
const catFact = document.querySelector("#facts")
let generatedPass1 = ""
let generatedPass2 = ""
let lengthVal = 16;
let isGenerated = false;

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

generateBtn.addEventListener("click", () =>{
    generatedPass1 = ""
    generatedPass2 = ""
    randomPassword1()
    randomPassword2()
    passDisplay.classList.add('flex')
    passDisplay.classList.remove('hidden')
})

const randomChar = () => {
    let randomNum = Math.floor(Math.random() * characters.length)
    return characters[randomNum]
}

const randomPassword1 = () => {
    for(let i = 1; i <= lengthVal; i++){
        generatedPass1 += randomChar()
        password1.innerText = generatedPass1
    } 
}

const randomPassword2 = () => {
    for(let i = 1; i <= lengthVal; i++){
        generatedPass2 += randomChar()
        password2.innerText = generatedPass2
    }  
}

copyBtn1.addEventListener("click", ()=>{
    const textarea = document.createElement("textarea");
    const pass1 = password1.innerText;

    if(!pass1){
        return;
    }
    textarea.value = pass1;
    document.body.appendChild(textarea)
    textarea.select();
    document.execCommand('copy')
    textarea.remove()
    alert("Password 1 copied to clipboard !")
})

copyBtn2.addEventListener("click", ()=>{
    const textarea = document.createElement("textarea");
    const pass2 = password2.innerText;

    if(!pass2){
        return;
    }
    textarea.value = pass2;
    document.body.appendChild(textarea)
    textarea.select();
    document.execCommand('copy')
    textarea.remove()
    alert("Password 2 copied to clipboard !")
})

fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1').then (res=>{
return res.json();
}).then (data =>{
    let fact = (data.text)
    catFact.innerText = fact
}).catch (err =>{
    console.log(err)
})



