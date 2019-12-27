import utils from '../../../../services/utils.js'
const gNotes = [
    {
        id: '1',
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#ffff"
        }
    },
    {
        id: '2',
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { id: 'eee', txt: "Do that", doneAt: null },
                { id: 'fff', txt: "Do this", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#ffff"
        }
    },
    {
        id: '3',
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { id: 'ggg', txt: "Do that", doneAt: null },
                { id: 'nnn', txt: "Do this", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#ffff"
        }
    },
    {
        id: '4',
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { id: 'mmm', txt: "Do that", doneAt: null },
                { id: 'ttt', txt: "Do this", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#ffff"
        }
    },
    {
        id: '5',
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#fffff"
        }
    }


];

const getNotes = () => {
    return Promise.resolve([...gNotes]);
}

const createInfoByType = (noteType, txtInput) => {
    if (noteType === 'NoteText') return { txt: txtInput }
    else if (noteType === 'NoteImg') return { url: txtInput }
    else if (noteType === 'NoteTodos') return { todos: [{ txt: txtInput, doneAt: null }] }
}

const createNote = (txtInput, noteType) => {
    let type = noteType
    let id = utils.getRandomId()
    let info = createInfoByType(noteType, txtInput)
    let isPinned = false
    let style = { backgroundColor: '#fffff' }
    let note = { id, type, info, isPinned, style }
    gNotes.unshift(note)
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
    const todo=note.info.todos.find(todo=>todo.id===todoId)
    const dateTime= new Date
    todo.doneAt= todo.doneAt === null? dateTime.getTime():null
    return Promise.resolve(true)
}

const deleteNote = (noteId) => {
    const index = gNotes.findIndex(note => note.id === noteId)
    gNotes.splice(index, 1)
    return Promise.resolve([...gNotes])
}

const pinNote = (noteId) => {
    const index = gNotes.findIndex(note => note.id === noteId)
    gNotes[index].isPinned = !gNotes[index].isPinned
    return Promise.resolve([...gNotes])
}

const changeNoteColor = (color, noteId) => {
    const note = gNotes.find(note => note.id === noteId)
    note.style.backgroundColor = color
    return Promise.resolve([...gNotes])
}
const isIdExist=(id)=>{
 let note=   gNotes.find((note)=>note.id===id)
 if(!note.id)return Promise.resolve(false)
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
    isIdExist
}