import noteService from '../js/apps/note/services/noteService.js'
import NoteList from '../js/apps/note/cmps/NoteList.jsx'
import NoteAdd from '../js/apps/note/cmps/NoteAdd.jsx'
import NoteDetails from '../js/apps/note/pages/PageDetails.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()
export default class NoteApp extends React.Component {
    state = { notes: [] }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes = () => {
        noteService.getNotes().
            then(notes => this.setState({ notes }))
    }
    onHandleChange = (txtInput, noteType) => {
        noteService.createNote(txtInput, noteType).then(notes => this.loadNotes())
    }
    onDelete = (noteId) => {
        noteService.deleteNote(noteId).then(notes => {
            this.setState({ notes })
            this.props.history.push('/note')
        })
    }
    onPinned = (noteId) => {
        noteService.pinNote(noteId)
            .then(notes => {
                this.setState({ notes })
                this.props.history.push('/note')
            })
    }

    render() {
        return (
            <div >
                <NoteAdd handleChange={this.onHandleChange} />
                <label >
                    Pinned:
                    <NoteList notes={this.state.notes}
                        onDelete={this.onDelete}
                        onPinned={this.onPinned}
                        isPinned={true} />
                </label>

                <NoteList notes={this.state.notes}
                    onDelete={this.onDelete}
                    onPinned={this.onPinned}
                    isPinned={false} />
                <Router history={history}>
                    <Switch>
                        <Route path="/note/:id" exact
                            render={(props) => {
                                return (
                                    <NoteDetails  {...props} onDelete={this.onDelete}
                                        onPinned={this.onPinned} />
                                )
                            }} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
