
const notesCountainer = document.querySelector(".notes-countainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll("input-box");

function showNotes(){
    notesCountainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes",notesCountainer.innerHTML);
}


createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "./img/recycle-bin_8258471.png";
    notesCountainer.appendChild(inputBox).appendChild(img);
});

notesCountainer.addEventListener("click", function(e){
     if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
     }
   else if(e.target.tagName ==="p"){
     notes = document.querySelectorAll("input-box");
     notes.forEach(nt =>{
        nt.onkeyup = function(){
        updateStorage();
        }
     })
   }
})
document.addEventListener("keydown",event =>{
    if (event.Key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})