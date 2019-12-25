import NoteText from './noteText/NoteText.jsx'
import NoteImg from './noteImg/NoteImg.jsx'
import NoteTodos from './noteTodos/NoteTodos.jsx'
export default function NotePreview(props) {
    switch (props.note.type) {
        case 'NoteText':
            return <NoteText {...props} />
        case 'NoteImg':
            return <NoteImg {...props} />
        case 'NoteTodos':
            return <NoteTodos {...props} />
        default:
            return //...some default error view
    }
}
