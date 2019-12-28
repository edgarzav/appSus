import utils from '../../../../services/utils.js'

let gNotes = utils.loadFromStorage('notes', [])



const getNotes = () => {
    return Promise.resolve([...gNotes]);
}

const createInfoByType = (noteType, txtInput) => {
    let id = utils.getRandomId()
    if (noteType === 'NoteText') return { txt: txtInput }
    else if (noteType === 'NoteImg') return { url: txtInput }
    else if (noteType === 'NoteTodos') return {
        todos: [{ id, txt: txtInput, doneAt: null }]
    }
}

const createNote = (txtInput, noteType) => {
    let type = noteType
    let id = utils.getRandomId()
    let info = createInfoByType(noteType, txtInput)
    let isPinned = false
    let style = { backgroundColor: '#fffff' }
    let note = { id, type, info, isPinned, style }
    gNotes.unshift(note)
    utils.saveToStorage('notes', [...gNotes])
    //gNotes = [note, ...gNotes]
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
    note.info.todos.splice(todoIndex,1)
    utils.saveToStorage('notes', [...gNotes])
    return Promise.resolve({...note})
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
    deleteTodo
}