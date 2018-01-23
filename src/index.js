const NoteList = {

    Notes: [],

    addNote: () => {
        let id = NoteList.Notes.length + 1;
        let noteName = document.querySelector('#input-name').value;
        NoteList.Notes.push({name: noteName, id: id});
        localStorage.setItem(String(id), noteName);
        },

    delNote: () => {},

    renderer: () => {},

};
