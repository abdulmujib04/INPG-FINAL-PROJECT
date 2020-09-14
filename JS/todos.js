let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let x = "Check"

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('span');
    var check = document.createElement('button');
    var hapus = document.createElement('button');
    var div = document.createElement('div');
    hapus.classList.add('hapus');
    div.classList.add('list');
    paragraph.classList.add('paragraph-styling');
    check.classList.add('buttoncheck');
    paragraph.innerText = inputField.value;
    check.innerText = x;
    hapus.innerText = 'X';
    toDoContainer.appendChild(div);
    div.appendChild(check);
    div.appendChild(paragraph);
    div.appendChild(hapus)
    inputField.value = "";
    check.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    check.addEventListener('dblclick', function(){
        paragraph.style.textDecoration = "none";
    })
    hapus.addEventListener('click', function(){
        div.removeChild(paragraph);
        div.removeChild(hapus);
        div.removeChild(check);
    })
})