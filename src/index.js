var buttonAddNote = document.getElementById("1");
var buttonDeleteNote = document.getElementById("2"), noteName;
buttonAddNote.addEventListener("click", addNote);
buttonDeleteNote.addEventListener("click", deleteNote);

var Note = function (name, desc) {
    this.noteName = name;

    this.noteDesc = desc;

    this.noteTemplate = function () {
        var ul = document.getElementsByTagName("ul");

/*        var ul = document.getElementsByTagName("ul");
        var newNode = document.createElement("li");
        var newDesc = document.createElement("span");
        var descToNote = newNode[0].appendChild(newDesc);
        var createdNote = ul[0].appendChild(newNode);
        createdNote.innerHTML = this.noteName;*/
    }
};



function addNote() {
    var noteNameInputValue = document.getElementsByName("noteName"); //берем поле для ввода текста (коллекция)
    var value = noteNameInputValue[0].value; // достаем его значение (строка)
    var desc = "Some text";
    var newNote = new Note(value, desc);
    newNote.noteTemplate();
}

function deleteNote() {
    var last = document.getElementsByTagName("ul")[0].lastChild;
    if (last === null) {
        alert('nothing to remove');
    }
    else {
        last.remove();
    }
}

/*function manageNote() {

}*/
