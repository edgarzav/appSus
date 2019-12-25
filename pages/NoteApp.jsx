import noteService from '../js/apps/note/services/noteService.js'
import NoteList from '../js/apps/note/cmps/NoteList.jsx'
import NoteAdd from '../js/apps/note/cmps/NoteAdd.jsx'
export default class NoteApp extends React.Component {
    state = { notes: [] }

    componentDidMount() {
        this.loadNotes();
    }
    loadNotes = () => {
        noteService.getNotes().
            then(notes => this.setState({ notes }))
    }
    onHandleChange=(txtInput,noteType)=>{
        noteService.createNote(txtInput,noteType).then(notes=>this.loadNotes())
    }

    render() {
        return (
            <section >
                <NoteAdd handleChange={this.onHandleChange}/>
                <NoteList notes={this.state.notes} />
            </section>
        )
    }
}
