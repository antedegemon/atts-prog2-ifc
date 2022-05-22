const maskElements = document.querySelectorAll("[data-mascara]")
const closeAdd = document.getElementById("miniX")
const add = document.querySelector("div.popup")

let slider = document.getElementById("matricula");
let output = document.getElementById("mtn");

const fnMasks = {
    matricula: maskMatricula
}

closeAdd.addEventListener("click", ev =>{
    add.remove();
})

slider.oninput = function() {
    output.innerHTML = this.value;
}

function maskMatricula(el) {
    el.addEventListener("keydown", ev => { 
        const key = ev.key
        if (key == "a") {
            ev.preventDefault()
        }
    })
}

maskElements.forEach(el => {
    const maskName = el.dataset.mascara
    const fnMascara = fnMasks[maskName]
    fnMascara(el)
})

const x = document.querySelector(".modal")
const main = document.querySelector("main")
let i = 0;
while(i--) {
    const z = x.cloneNode(true)
    main.appendChild(z)
}