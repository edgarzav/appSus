
export default function EmailPreviewNote(props) {

    const { data, type } = props.note
    switch (type) {
        case 'NoteText':
            return <div className="note-preview"><p>{data}</p></div>
        case 'NoteImg':
            return <div className="note-preview"><img src={data} /></div>
        case 'NoteTodos':
            return <div className="note-preview"><ul>Todo :{data.split(',').map((item, i) => <li key={i}>* {item}</li>)}</ul></div>
        case 'NoteVideo':
            return <div className="note-preview">
                <iframe  
                frameBorder="0" allowFullScreen
                src={data}>
                </iframe>
            </div>
        default:
            return 1
    }
}
