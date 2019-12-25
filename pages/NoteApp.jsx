import noteService from '../js/apps/note/services/noteService.js'
import NoteList from '../js/apps/note/cmps/NoteList.jsx'
export default class NoteApp extends React.Component {
    state = { notes:[] }

    componentDidMount() {
        this.loadNote();
    }
    loadNote = () => {
        noteService.getNotes().
        then(notes=>this.setState({notes}))
    }

    
    render() {
        return (
            <section >
            <NoteList notes={this.state.notes}/>
            </section>
        )
    }
}
