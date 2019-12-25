import utils from '../../../../services/utils.js'
const gNotes = [
    {
        id:1,
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },

   
    {
        id:4,
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id:2,
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id:3,
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    
    
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
    const note ={id,type,info}
    gNotes.push(note)
   return Promise.resolve([...gNotes])
}


export default {getNotes,createNote}