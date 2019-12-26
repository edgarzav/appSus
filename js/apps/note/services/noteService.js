import utils from '../../../../services/utils.js'
const gNotes = [
    {
        id:'1',
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id:'2',
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id:'3',
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id:'4',
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id:'5',
        type: "NoteImg",
        isPinned: false,
        info: {
        url: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
        title: "Me playing Mi"
        },
        style: {
        backgroundColor: "#00d"
        }
        }
    
    
];

const getNotes=()=>{
    return  Promise.resolve([...gNotes]);
}

const createInfoByType=(noteType,txtInput)=>{
    if(noteType==='NoteText') return {txt:txtInput}
    else if (noteType==='NoteImg') return {url:txtInput}
    else if (noteType==='NoteTodos') return {todos:[{txt:txtInput,doneAt:null}]}
}

const createNote=(txtInput,noteType)=>{
    const type=noteType
    const id =utils.getRandomId()
    const info= createInfoByType(noteType,txtInput)
    const isPinned=false
    const note ={id,type,info,isPinned}
    gNotes.unshift(note)
   return Promise.resolve([...gNotes])
}

const getNoteById=(noteId)=> {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve({...note})
}

const updateNote=(noteId,info)=>{
    const note = gNotes.find(note => note.id === noteId)
    note.info=info
    return Promise.resolve(true)
}

const deleteNote=(noteId)=>{
    const index= gNotes.findIndex(note=>note.id===noteId)
    gNotes.splice(index,1)
    return Promise.resolve([...gNotes])
}

const pinNote=(noteId)=>{
    const index= gNotes.findIndex(note=>note.id===noteId)
    gNotes[index].isPinned=!gNotes[index].isPinned
    return Promise.resolve([...gNotes])
}

export default {getNotes,createNote,getNoteById,updateNote,deleteNote,pinNote}