import utils from '../../../../services/utils.js'
import axios from '../../../../lib/axios.js'
import Note from './note.js'
let gNotes = utils.loadFromStorage('notes', [])

const getNotes = () => {
    return Promise.resolve([...gNotes]);
}

const searchLocation = (address) => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAsAqgAOgYSK5tcvWVgrko0S1a8mJD4vgM`
 
    return axios.get(url).then(location => {
        let userInputLocation = location.data.results[0].geometry.location
        return userInputLocation
    })
}


const createInfoByType = (noteType, txtInput) => {
    let id = utils.getRandomId()
    if (noteType === 'NoteText') return { txt: txtInput }
    else if (noteType === 'NoteImg') return { url: txtInput }
    else if (noteType === 'NoteTodos') return {
        todos: [{ id, txt: txtInput, doneAt: null }]
    }
    else if (noteType === 'NoteVideo') {
        let url = txtInput
        url = url.replace('watch?v=', 'embed/')
        console.log(url)
        return { url }
    }
}

const createNote = (txtInput, noteType) => {
    if (noteType === 'NoteMap') {
        return    searchLocation(txtInput)
        .then(location=>{
            let info ={
                address:txtInput,
                lat:location.lat,
                lng:location.lng
            }
            let note =new Note(noteType,false,{ backgroundColor: '#fffff' },info)
            gNotes = [note, ...gNotes]
            utils.saveToStorage('notes', [...gNotes])
        Promise.resolve([...gNotes])
        })
    } else {
        let info = createInfoByType(noteType, txtInput)
        let note =new Note(noteType,false,{ backgroundColor: '#fffff' },info)
        gNotes = [note, ...gNotes]
        utils.saveToStorage('notes', [...gNotes])
        return Promise.resolve([...gNotes])
    }
}

const getNoteById = (noteId) => {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve({ ...note })
}

const updateNote = (noteId, info) => {
    const note = gNotes.find(note => note.id === noteId)
    note.info = info
    if (note.type === 'NoteTodos') upDateTodo(info)
    utils.saveToStorage('notes', [...gNotes])
    return Promise.resolve(true)
}
const upDateTodo = (info) => {
    let id = info.todos[info.todos.length - 1].id
    if (!id) {
        id = utils.getRandomId()
        info.todos[info.todos.length - 1].id = id
    }
}
const onToggleDoneTodo = (noteId, todoId) => {
    const note = gNotes.find(note => note.id === noteId)
    const todo = note.info.todos.find(todo => todo.id === todoId)
    const dateTime = new Date
    todo.doneAt = todo.doneAt === null ? dateTime.getTime() : null
    utils.saveToStorage('notes', [...gNotes])
    return Promise.resolve(true)
}
const deleteTodo = (noteId, todoId) => {
    let note = gNotes.find(note => note.id === noteId)
    const todoIndex = note.info.todos.findIndex(todo => todo.id === todoId)
    note.info.todos.splice(todoIndex, 1)
    utils.saveToStorage('notes', [...gNotes])
    return Promise.resolve({ ...note })
}

const changeNoteUrl = (noteId, newUrl) => {
    gNotes = gNotes.map((noteToFind) => {
        if (noteToFind.id === noteId) {
            let noteToChange = { ...noteToFind }
            if (noteToFind.type === 'NoteVideo') {
                noteToChange.info.url = newUrl.replace('watch?v=', 'embed/')
            }
            else {
                noteToChange.info.url = newUrl
            }
            return noteToChange
        } else {
            return noteToFind
        }
    })
    utils.saveToStorage('notes', [...gNotes])
    return Promise.resolve(true)
}

const deleteNote = (noteId) => {
    const index = gNotes.findIndex(note => note.id === noteId)
    gNotes.splice(index, 1)
    utils.saveToStorage('notes', [...gNotes])
    return Promise.resolve([...gNotes])
}

const pinNote = (noteId) => {
    const index = gNotes.findIndex(note => note.id === noteId)
    gNotes[index].isPinned = !gNotes[index].isPinned
    utils.saveToStorage('notes', [...gNotes])
    return Promise.resolve([...gNotes])
}

const changeNoteColor = (color, noteId) => {
    const note = gNotes.find(note => note.id === noteId)
    note.style.backgroundColor = color
    utils.saveToStorage('notes', [...gNotes])
    return Promise.resolve([...gNotes])
}
const isIdExist = (id) => {
    let note = gNotes.find((note) => note.id === id)
    if (!note.id) return Promise.resolve(false)
    else Promise.resolve(true)
}



export default {
    getNotes,
    createNote,
    getNoteById,
    updateNote,
    deleteNote,
    pinNote,
    changeNoteColor,
    onToggleDoneTodo,
    isIdExist,
    deleteTodo,
    changeNoteUrl
}
