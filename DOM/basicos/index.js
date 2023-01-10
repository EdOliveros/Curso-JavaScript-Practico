const title = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document.querySelector("#pid")
const input = document.querySelector("input")

console.log(input.value); 

console.log(title);

console.log({
    title,
    p,
    parrafito,
    pid,
    input,
})

// title.innerHTML = "esto puede escribir html, no solo texto"

// title.innerText = "esto solo puede escribir texto en el html"

title.innerText = "hey baby <p>Potencial codigo malicioso</p>" 

console.log(title.getAttribute("class"))

//title.setAttribute esto modifica un atributo
title.setAttribute("class", "rojo")

// title.classList.add esto agrega una clase adicional a un elemento
title.classList.add("verde")

// title.classList.remove("verde") quitar una clase
title.classList.remove("verde")

// title.classList.toggle("verde") dependiendo si tiene o no, poner o quitar una clase
// title.classList.contains("verde") nos devuelve true o false si tiene la clase que ponemos

input.value = 1234

// document.createElement("img") esto puede crear elementos en html, js sabe que una etiqueta debe cerrarse.

console.log(document.createElement("span") )

const img = document.createElement("img");
img.setAttribute("src", "https://images.pexels.com/photos/14771128/pexels-photo-14771128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

console.log(img)

pid.append(img)