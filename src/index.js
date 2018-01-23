const NoteList = {

    Notes: [],

    addNote: () => {
        let id = NoteList.Notes.length + 1;
        let noteName = document.querySelector('#input-name').value;
        NoteList.Notes.push({name: noteName, id: id});
        },

    renderer: () => {
        for (let i = 0; i < NoteList.Notes.length ; i++) {
            let ul = document.querySelector('#ul-noteList');
            let newLi = document.createElement('li');
            newLi.innerText = NoteList.Notes[i].name;
            newLi.classList.add('list-group-item');
            ul.appendChild(newLi);
        }
    }
};