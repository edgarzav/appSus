import NoteText from './noteText/NoteText.jsx'
import NoteImg from './noteImg/NoteImg.jsx'
import NoteTodos from './noteTodos/NoteTodos.jsx'
const { Link } = ReactRouterDOM
export default function NotePreview(props) {
    const  id  = props.note.id
    switch (props.note.type) {
        case 'NoteText':
            return <Link to={`/note/${id}`}> <NoteText {...props} /></Link>
        case 'NoteImg':
            return <Link to={`/note/${id}`}><NoteImg {...props} /></Link>
        case 'NoteTodos':
            return <Link to={`/note/${id}`}><NoteTodos {...props} /></Link>
        default:
            return //...some default error view
    }
}
