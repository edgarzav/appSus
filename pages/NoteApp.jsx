import noteService from '../js/apps/note/services/noteService.js'
import NoteList from '../js/apps/note/cmps/NoteList.jsx'
import NoteAdd from '../js/apps/note/cmps/NoteAdd.jsx'
import PageDetails from '../js/apps/note/pages/PageDetails.jsx'
import eventBusService from '../services/eventBusService.js'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()
export default class NoteApp extends React.Component {
    state = { notes: [], screenMode: false }
    componentDidMount() {
        this.loadNotes();
    }
    componentDidUpdate(props) {
        if (props.inputFilter.subject !== this.props.inputFilter.subject) {
            this.loadNotes(this.props.inputFilter.subject);
        }
    }

    loadNotes = (inputFilter) => {
        noteService.getNotes(inputFilter).
            then(notes => this.setState({ notes }))
    }
    onHandleChange = (txtInput, noteType) => {
        noteService.createNote(txtInput, noteType).then(notes => {
            this.loadNotes()
            eventBusService.emit('toggleModalMessage', 'Note has been added');
        })

    }
    onToggleDoneTodo = (noteId, todoId) => {
        noteService.onToggleDoneTodo(noteId, todoId)
            .then(this.loadNotes())
    }

    onDelete = (noteId) => {
        noteService.deleteNote(noteId).then(notes => {
            this.setState({ notes })
            this.props.history.push('/note')
            eventBusService.emit('toggleModalMessage', 'Note has been deleted');
        })
    }
    onPinned = (noteId) => {
        noteService.pinNote(noteId)
            .then(notes => {
                this.setState({ notes })
                this.props.history.push('/note')
            })
    }

    onChangeColor = (color, noteId) => {
        noteService.changeNoteColor(color, noteId)
            .then(notes => {
                this.setState({ notes })
            })
    }
    closeModal = () => {
        this.setState({ screenMode: true })
        this.props.history.push('/note')
    }
    setScreenMode = (flag) => {
        this.setState(prevState => ({ screenMode: !prevState.screenMode }))
    }


    render() {
        return (
            <div className={this.state.screenMode ? 'moblie-overflow-hidden' : ''}>
                {this.state.screenMode && <div className="screen" onClick={this.closeModal}></div>}
                <NoteAdd handleChange={this.onHandleChange} />
                <label className="pinned-container">
                    <h2>Pinned:</h2>
                    <NoteList notes={this.state.notes}
                        onToggleDoneTodo={this.onToggleDoneTodo}
                        onChangeColor={this.onChangeColor}
                        onDelete={this.onDelete}
                        onPinned={this.onPinned}
                        isPinned={true} />
                </label>

                <NoteList notes={this.state.notes}
                    onToggleDoneTodo={this.onToggleDoneTodo}
                    onChangeColor={this.onChangeColor}
                    onDelete={this.onDelete}
                    onPinned={this.onPinned}
                    isPinned={false} />
                <Router history={history}>
                    <Switch>
                        <Route path="/note/:id" exact
                            render={(props) => {
                                return (
                                    <PageDetails  {...props}
                                        setScreenMode={this.setScreenMode}
                                        onChangeColor={this.onChangeColor}
                                        onDelete={this.onDelete}
                                        onPinned={this.onPinned} />
                                )
                            }} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
