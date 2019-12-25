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

    render() {
        return (
            <section >
                <NoteAdd handleChange={this.onHandleChange} />
                <NoteList notes={this.state.notes} />
                <Router history={history}>
                    <Switch>
                        <Route component={NoteDetails} path="/note/:id" exact></Route>
                    </Switch>
                </Router>
            </section>
        )
    }
}
