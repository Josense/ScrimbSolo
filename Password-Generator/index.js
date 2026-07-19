const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generate() {
    document.querySelectorAll(".password").forEach(function(el) {
        el.textContent = randomPassword()
        console.log(el.textContent)
    })
}

function randomPassword() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    console.log(password)
    return password
}

async function copy(element) {
    const type = "text/plain"
    const blob = new Blob([element.textContent], {type})
    const data = [new ClipboardItem({ [type]: blob })]
    await navigator.clipboard.write(data)
}