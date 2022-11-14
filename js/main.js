const listaspesa=["Pane", "Frutta", "Verdura","Acqua" ]
let container=document.querySelector(".nomefeature");

// for (let i = 0; i< listaspesa.length; i++){
//     container.innerHTML+=`<span>${listaspesa[i]}</span>`
// }
let addBtn=document.getElementById("add");

addBtn.addEventListener("click",
function(){
let nuovo=prompt("inserisci nuovo item della spesa")
listaspesa.push(nuovo)
container.innerHTML+=`
<div class="nomefeature">
<input type="checkbox" name="" id="">
<span class="taskname"> ${nuovo}</span>
<span class="label greenyellow">Added</span>

    </div> 
`
})
i=0
while (i < listaspesa.length) {
    container.innerHTML+=
    `
    <div class="nomefeature">
    <input type="checkbox" name="" id="">
    <span class="taskname"> ${listaspesa[i]}</span>
    <span class="label blue">Dalla lista</span>
        </div> 
    `
    i++;
  }

  