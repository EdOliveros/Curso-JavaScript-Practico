const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input = document.querySelector('#calculo1');
const inputTwo = document.querySelector('#calculo2');
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result")

// //btn.addEventListener("evento", function); esto funciona solo si no tengo formularios
// btn.addEventListener("click", btnOnClick);

// function btnOnClick(){
//     const resultado = input.value + inputTwo.value;
//     result.innerText = "El resultado es: " + resultado
// }



// para formularios debe tenerse en cuenta el submit
// event,preventDefault() quita la carga automatica del form
//otra forma de evitar esto es simplemente poniendo type button en nuestro boton
form.addEventListener("submit", btnOnClick);

function btnOnClick(event){
    console.log({event})
    event.preventDefault();
    const resultado = input.value + inputTwo.value;
    result.innerText = "El resultado es: " + resultado
}