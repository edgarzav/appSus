import NotePreview from './NotePreview.jsx'
import NoteTools from './NoteTools.jsx'
export default function NoteList(props) {
    return (<ul className="note-list-container " >
        {props.notes.map((note, i) =>
            <li key={i} className="note-container clean-list">
                <NotePreview note={note} />
                 <NoteTools note={note} className='note-tools-container' />
            </li>

        )}


    </ul>)
}
