import NotePreview from './NotePreview.jsx'
import NoteTools from './NoteTools.jsx'
export default function NoteList(props) {
    return (<ul className="note-list-container " >
        {props.notes.map((note) => {
            if (note.isPinned === props.isPinned) {
                return <li key={note.id} className="note-container clean-list">
                    <NotePreview note={note}
                        onToggleDoneTodo={props.onToggleDoneTodo} />
                    <NoteTools note={note}
                        className='note-tools-container'
                        onDelete={props.onDelete}
                        onChangeColor={props.onChangeColor}
                        onPinned={props.onPinned} />
                </li>
            }
            return null
        })}
    </ul>)
}
