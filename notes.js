const fs = require('fs')
const addNote = function (title, body) {
    const notes = loadNotes()

    /*    const duplicateNotes = notes.filter(function (note) {
            return note.title === title
        })*/

    const duplicateNote = notes.find((note) => note.title === title)

    //console.log('dup=' + duplicateNote)

    //debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken, please reenter a new title!')
    }
}

const removeNote = function (title) {

    const notes = loadNotes()

    const notesToKeep = notes.filter(function (note) {
        return note.title != title
    })

    if (notes.length > notesToKeep.length) {
        console.log('Note removed!')
        saveNotes(notesToKeep)
    } else {
        console.log('No note found!')
    }


}

const saveNotes = function (note) {
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log('Your notes:')
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(note.title)
        console.log(note.body)
    } else {
        console.log('Note not found!')
    }
}

module.exports = {

    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}