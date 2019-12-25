import NotePreview from './NotePreview.jsx'
export default function NoteList(props) {
    return (<ul  className="note-list-container " >
        {props.notes.map((note, i) =>
            <NotePreview key={i} note={note}  />
        )}
    
       
    </ul>)
}