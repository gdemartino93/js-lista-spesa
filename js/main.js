const listaspesa=["pane", "salsa", "frutta","asd" ]
let container=document.getElementById("container");
// for (let i = 0; i< listaspesa.length; i++){
//     container.innerHTML+=`<span>${listaspesa[i]}</span>`
//     console.log("L'elemento " + i + " è: " + listaspesa[i])
// }

let addBtn=document.getElementById("add");
addBtn.addEventListener("click",
function(){
let nuovo=prompt("inserisci nuovo item della spesa")
listaspesa.push("nuovo")
container.innerHTML+=`<span>${nuovo}</span>`
})

i=0
while (i < listaspesa.length) {
    container.innerHTML+=`<span>${listaspesa[i]}</span>`
    i++;
  }