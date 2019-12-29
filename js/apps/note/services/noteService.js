import utils from '../../../../services/utils.js'
import Note from './note.js'
let gNotes = utils.loadFromStorage('notes', [])


const getNotes=(filterBy)=>{
    if (filterBy) return Promise.resolve(gNotes.filter(note=>{
        if(note.type==='NoteText') return note.info.txt.includes(filterBy)
        else if(note.type==='NoteMap') return note.info.address.includes(filterBy)
        else if(note.type==='NoteTodos'){
            for(let i=0;i<note.info.todos.length;i++){
                if(note.info.todos[i].txt.includes(filterBy)) return true
            }
            return false
        }
        else{
            return note.info.url.includes(filterBy)
        } 
    }))
    return Promise.resolve([...gNotes]);
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
        return { url }
    }
    else if (noteType === 'NoteMap') return { address: txtInput }
}

const createNote = (txtInput, noteType) => {
        let info = createInfoByType(noteType, txtInput)
        let note =new Note(noteType,false,{ backgroundColor: '#fffff' },info)
        gNotes = [note, ...gNotes]
        utils.saveToStorage('notes', [...gNotes])
        return Promise.resolve([...gNotes])

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
