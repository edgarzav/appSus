import NotePreview from './NotePreview.jsx'
export default function NoteList(props) {
    return (<ul >
        {props.notes.map((note, i) =>
            <NotePreview key={i} note={note}  />
        )}
    </ul>)
}