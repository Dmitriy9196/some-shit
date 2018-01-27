const NoteList = {

    index: 1,

    addNote: () => {
        const i = NoteList.index;
        let ul = document.querySelector('#ul-noteList');
        let noteName = document.querySelector('#input-name').value;
        //let noteDesc = document.querySelector('#input-desc').value;
        let newNote = makeElement('li', 'list-group-item', 'id', `${i}`);
        // let newNote = document.createElement('li');
        // let newNoteDesc = document.createElement('span');
        // newNote.classList.add('list-group-item');
        // newNoteDesc.classList.add('list-group-item');
        // newNote.setAttribute('id', `${i}`);
        newNote.innerText = noteName;
        // newNoteDesc.innerText = noteDesc;
        // newNote.appendChild(newNoteDesc);
        ul.appendChild(newNote);
        NoteList.index += 1;
    },

    delNote: () => {
        let ul = document.querySelector('#ul-noteList');
        let last = ul.lastChild;
        last.remove();
        NoteList.index -= 1;
    },

//    filter: () => {}

};